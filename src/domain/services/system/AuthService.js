'use strict';

const debug = require('debug')('app:service:auth');
const crypto = require('crypto');
const Issuer = require('openid-client').Issuer;
const { ErrorApp } = require('../../lib/error');
const { config } = require('../../../common');
const { iss } = require('../../lib/util');
const { generateToken } = require('../../../application/lib/auth');

module.exports = function authService (repositories, helpers, res) {
  const { AuthRepository, UsuarioRepository, SuscripcionRepository, EntidadRepository, ParametroRepository, MenuRepository, PermisoRepository } = repositories;
  const issuer = new Issuer(iss);

  const cliente = new issuer.Client(config.openid.client);
  cliente.CLOCK_TOLERANCE = 5;

  async function verificarPermisos (params) {
    try {
      const permisos = await PermisoRepository.verificarPermisos(params);
      return permisos;
    } catch (error) {
    }
  }

  async function getMenusRoles (roles) {
    const idRoles = roles.map(x => x.id);
    const { rows } = await MenuRepository.findByRoles(idRoles);
    return rows;
  }

  async function getPermisos (roles) {
    const idRoles = roles.map(x => x.id);
    const { rows } = await PermisoRepository.findByRoles(idRoles);
    const permisos = {};
    for (const permiso of rows) {
      permisos[permiso.nombre] = true;
    }
    return permisos;
  }

  async function getResponse (usuario) {
    try {
      usuario.menu = await getMenusRoles(usuario.roles);
      usuario.permisos = await getPermisos(usuario.roles);

      usuario.token = await generateToken(ParametroRepository, {
        idRoles           : usuario.roles.map(x => x.id),
        idUsuario         : usuario.id,
        celular           : usuario.celular,
        correoElectronico : usuario.correoElectronico,
        usuario           : usuario.usuario,
        idEntidad         : usuario.entidad.id
      });

      return usuario;
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function login (usuario, contrasena, request) {
    try {
      const existeUsuario = await UsuarioRepository.login({ usuario });
      if (!existeUsuario) {
        throw new Error('No existe el usuario.');
      }
      const respuestaVerificacion = await AuthRepository.verificarContrasena(contrasena, existeUsuario.contrasena);
      if (!respuestaVerificacion) {
        throw new Error('Error en su usuario o su contraseña.');
      }
      delete existeUsuario.contrasena;
      const respuesta = await getResponse(existeUsuario);
      await AuthRepository.deleteItemCond({ idUsuario: existeUsuario.id });
      await AuthRepository.createOrUpdate({
        ip          : request.ipInfo.ip,
        navegador   : request.ipInfo.navigator,
        userAgent   : request.headers['user-agent'],
        token       : respuesta.token,
        idUsuario   : existeUsuario.id,
        idRol       : existeUsuario.roles.map(x => x.id).join(','),
        idEntidad   : existeUsuario.entidad.id,
        userCreated : existeUsuario.id
      });
      return respuesta;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function refreshToken (idRol, idUsuario) {
    const existeUsuario = await UsuarioRepository.findById(idUsuario);
    if (!existeUsuario) {
      throw new Error('No existe el usuario.');
    }
    return getResponse(existeUsuario, idRol);
  }

  async function getCode (data) {
    debug('Obtener código state');
    const state = crypto.randomBytes(16).toString('hex');
    const nonce = crypto.randomBytes(16).toString('hex');

    try {
      const authorizationRequest = Object.assign({
        redirect_uri: config.openid.client.redirect_uris[0],
        state,
        nonce
      }, config.openid.client_params);

      const authorizeUrl = cliente.authorizationUrl(authorizationRequest);

      const data = {
        state,
        parametros: {
          nonce
        },
        userCreated: 1
      };
      await AuthRepository.createOrUpdate(data);

      return res.success({
        url    : authorizeUrl,
        codigo : state
      });
    } catch (e) {
      return res.error(e);
    }
  }

  async function getSubscription (idUsuario) {
    const subscriptions = await SuscripcionRepository.findOne({ idUsuario });
    return subscriptions;
  }

  return {
    getSubscription,
    getMenusRoles,
    verificarPermisos,
    login,
    getCode,
    refreshToken
  };
};
