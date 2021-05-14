'use strict';

const debug = require('debug')('app:service:auth');
const crypto = require('crypto');
const Issuer = require('openid-client').Issuer;
const { ErrorApp } = require('../../lib/error');
const url = require('url');
const { config } = require('../../../common');
const { iss } = require('../../lib/util');
const { generateToken } = require('../../../application/lib/auth');
const moment = require('moment');

// Métodos para CIUDADANÍA DIGITAL
module.exports = function authService (repositories, helpers, res) {
  const UsuarioService = require('./UsuarioService')(repositories, helpers, res);
  const { AuthRepository, UsuarioRepository, EntidadRepository, ParametroRepository, MenuRepository, PermisoRepository } = repositories;
  const issuer = new Issuer(iss);
  const { FechaHelper } = helpers;
  // console.log('---------------------------- issuer', issuer);
  // const keystore = jose.JWK.createKeyStore();
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

  async function getEntidadesDependientes (entidades, nivel) {
    let entidadesDependientes = [];
    if (entidades.length > 0) {
      const idEntidades = entidades.map(x => x.id);
      entidadesDependientes = await EntidadRepository.findDependientes(idEntidades, nivel);
      return entidades.concat(await getEntidadesDependientes(entidadesDependientes.rows, nivel + 1));
    }
    return [...entidades];
  }

  async function getResponse (usuario) {
    try {
      usuario.menu = await getMenusRoles(usuario.roles);
      const entidadesDependientes = await getEntidadesDependientes([usuario.entidad], usuario.entidad.nivel + 1);
      usuario.entidades = entidadesDependientes;
      usuario.token = await generateToken(ParametroRepository, {
        idUsuario             : usuario.id,
        celular               : usuario.celular,
        correoElectronico     : usuario.correoElectronico,
        usuario               : usuario.usuario,
        idEntidad             : usuario.entidad.id,
        entidadesDependientes : entidadesDependientes.map(x => x.id)
      });
      return usuario;
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function login (usuario, contrasena) {
    try {
      const existeUsuario = await UsuarioRepository.findOne({ usuario, contrasena });
      if (!existeUsuario) {
        throw new Error('No existe el usuario.');
      }
      return getResponse(existeUsuario);
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

  async function authorizate (req, info) {
    debug('Autorizar código');
    let usuario;
    let respuesta;
    try {
      const params = cliente.callbackParams(req);
      if (!params.state) {
        throw new Error('Parámetro state es requerido.');
      }
      if (!params.code) {
        throw new Error('Parámetro code es requerido.');
      }
      const parametros = {
        state  : params.state,
        estado : 'INICIO'
      };
      const resultadoState = await AuthRepository.findOne(parametros);

      if (resultadoState) {
        // obtenemos el code
        const respuestaCode = await cliente.callback(cliente.redirect_uris[0], params, {
          nonce : resultadoState.parametros.nonce,
          state : resultadoState.state
        });
        resultadoState.tokens = respuestaCode;

        const claims = await cliente.userinfo(respuestaCode);
        // const claims = respuestaCode.userinfo(respuesta);
        claims.fecha_nacimiento = FechaHelper.formatearFecha(claims.fecha_nacimiento);
        console.log('-------------------------------claims', claims);
        const [numeroDocumento, complemento] = claims.documento_identidad.numero_documento.split('-');
        const complementoVisible = !!complemento;
        const wherePersona = {
          numeroDocumento : numeroDocumento,
          fechaNacimiento : claims.fecha_nacimiento,
          complementoVisible
        };
        if (complemento) {
          Object.assign(wherePersona, { complemento });
        }
        usuario = await UsuarioRepository.findByPersona(wherePersona);
        if (!usuario) {
          const tipoDocumento = await ParametroRepository.findOne({ codigo: claims.documento_identidad.tipo_documento });
          if (!tipoDocumento) {
            throw new Error('El usuario no cuenta con un tipo de documento Valido.');
          }
          if (!claims.nombre.primer_apellido && !claims.nombre.segundo_apellido) {
            throw new Error(`El usuario con numero de documento ${numeroDocumento} no tiene apellido paterno y apellido materno.`);
          }
          const usuarioCreado = await UsuarioService.guardarUsuario({
            usuario           : numeroDocumento + (complemento ? `-${complemento}` : ''),
            correoElectronico : claims.email,
            persona           : {
              parIdTipoDocumento : tipoDocumento.id,
              numeroDocumento    : numeroDocumento,
              complementoVisible,
              complemento        : complemento,
              fechaNacimiento    : claims.fecha_nacimiento,
              nombres            : claims.nombre.nombres,
              primerApellido     : claims.nombre.primer_apellido,
              segundoApellido    : claims.nombre.segundo_apellido,
              estado             : config.constants.ESTADO_ACTIVO,
              correoElectronico  : claims.email,
              parIdTipoPersona   : config.constants.TIPO_PERSONA_NATURAL,
              usuarioCreacion    : config.constants.USUARIO_CREACION_DEFAULT
            }
          });
          usuario = await UsuarioRepository.findByUsername(usuarioCreado.usuario, true);
        }
        respuesta = await registrarLogin(usuario, info, resultadoState);
        return res.success(respuesta);
      } else {
        return res.warning(new Error('Los códigos de verificacion no coenciden. Intente nuevamente.'));
      }
    } catch (e) {
      return res.error(e);
    }
  }

  async function registrarLogin (user, info, resultadoState) {
    info.state = resultadoState.state;
    const respuesta = await UsuarioService.getResponse(user, null, info);
    resultadoState.id_usuario = user.id;
    resultadoState.estado = config.constants.ESTADO_ACTIVO;
    resultadoState.userCreated = user.id;
    await AuthRepository.createOrUpdate(resultadoState);
    return respuesta;
  }

  async function logout (code, usuario) {
    debug('Salir del sistema');
    let resultUrl;
    const urlExit = '/oauth/logout.html';
    try {
      const user = await UsuarioRepository.findByUsername(usuario, false);
      if (user) {
        const parametros = {
          state      : code,
          id_usuario : user.id,
          estado     : config.constants.ESTADO_ACTIVO
        };
        const result = await AuthRepository.findOne(parametros);
        if (result) {
          resultUrl = getUrl(result);
        } else {
          resultUrl = urlExit;
        }
      } else {
        resultUrl = urlExit;
      }
      return res.success({ url: resultUrl });
    } catch (e) {
      return res.error(e);
    }
  }

  function getUrl (data) {
    return url.format(Object.assign(url.parse(issuer.end_session_endpoint), {
      search : null,
      query  : {
        id_token_hint            : data.tokens.id_token,
        post_logout_redirect_uri : cliente.post_logout_redirect_uris[0]
      }
    }));
  }

  return {
    getMenusRoles,
    verificarPermisos,
    login,
    getCode,
    authorizate,
    logout,
    refreshToken
  };
};
