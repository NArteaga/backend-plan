'use strict';

const debug = require('debug')('app:service:usuario');
const moment = require('moment');
const crypto = require('crypto');
const { generateToken } = require('../../../application/lib/auth');
const { ErrorApp } = require('../../lib/error');
const { config } = require('../../../common');

module.exports = function userService (repositories, helpers, res) {
  const { Iop, UsuarioRepository, RolUsuarioRepository, Parametro, Log, PersonaRepository, transaction, RolRepository } = repositories;
  const { FechaHelper } = helpers;

  async function listarUsuarios (params) {
    try {
      return UsuarioRepository.findAll(params);
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function mostrar (id) {
    try {
      return UsuarioRepository.findOne({ id });
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function createOrUpdate (data) {
    let transaccion;
    try {
      transaccion = await transaction.create();

      if (data.id) delete data.contrasena;

      const existeUsuario = await UsuarioRepository.verificarCorreoElectronico({
        id                : data.id,
        correoElectronico : data.correoElectronico,
        usuario           : data.usuario
      }, transaccion);

      if (existeUsuario) {
        if (existeUsuario.correoElectronico === data.correoElectronico) {
          throw new Error(`Ya se encuentra registrado un usuario con el correo electronico "${data.correoElectronico}".`);
        }

        if (existeUsuario.usuario === data.usuario) {
          throw new Error(`Ya se encuentra registrado un usuario con el nombre de usuario "${data.usuario}".`);
        }
      }

      const usuarioCreado = await UsuarioRepository.createOrUpdate(data, transaccion);

      if (data.roles) {
        await RolUsuarioRepository.deleteItemCond({ idUsuario: usuarioCreado.id });
        for (const rol of data.roles) {
          await RolUsuarioRepository.createOrUpdate({
            idUsuario   : usuarioCreado.id,
            idRol       : rol,
            userCreated : data.userCreated || data.userUpdated
          }, transaccion);
        }
      }

      await transaction.commit(transaccion);
      return usuarioCreado;
    } catch (error) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(error.message, 400);
    }
  }

  async function cambiarContrasena (data) {
    try {
      const existeUsuario = await UsuarioRepository.findById(data.id);
      if (!existeUsuario) {
        throw new Error('No existe el usuario.');
      }

      if (existeUsuario.contrasena !== data.antiguaContrasena) {
        throw new Error('Su contraseña anterior no coincide.');
      }

      const usuarioCreado = await UsuarioRepository.createOrUpdate({
        id         : existeUsuario.id,
        contrasena : data.nuevaContrasena
      });
      return true;
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      return UsuarioRepository.deleteItem(id);
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function asignarRoles (data) {
    try {
      const { idUsuario, roles } = data;
      await RolUsuarioRepository.eliminarRolesAsociados(idUsuario);
      await RolUsuarioRepository.crearRolesAsociados(idUsuario, roles);
      return true;
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function getResponse (user, seleccionarRol, info = {}) {
    let respuesta;
    try {
      const usuario = user.usuario;
      // Actualizando el último login
      const now = moment().format('YYYY-MM-DD HH:mm:ss');
      let text = '';
      if (info.location) {
        text += `Location: ${info.location.country} -- ${info.location.city} <br />`;
      }
      if (info.navigator) {
        text += `Navigator: ${info.navigator}`;
      }
      Log.info(`El usuario: ${usuario} ingresó al sistema a las ${now}`, 'LOGIN', text, usuario, info.ip);
      // Obteniendo menu

      const where = {};
      if (seleccionarRol) {
        where.id = seleccionarRol;
      } else {
        where.ciudadano = true;
      }
      let idRolSeleccionado = await RolRepository.findOne(where);
      if (!idRolSeleccionado) {
        throw new Error('El rol seleccionado no existe.');
      }
      idRolSeleccionado = idRolSeleccionado.id;
      const rolSeleccionado = user.roles.find(x => x.id === idRolSeleccionado);
      if (!rolSeleccionado) {
        throw new Error('No tiene asignado el rol que selecciono.');
      }
      const menu = rolSeleccionado.menus;
      const listaRoles = user.roles.map(x => {
        return {
          id          : x.id,
          nombre      : x.nombre,
          descripcion : x.descripcion,
          ciudadano   : x.ciudadano,
          admin       : x.admin
        }
        ;
      });
      // menu = menu.data.menu;
      // Generando token
      const token = await generateToken(Parametro, {
        id        : user.id,
        user      : user.usuario,
        rol       : rolSeleccionado.id,
        state     : info.state,
        idPersona : user.idPersona,
        idEmpresa : user.idEmpresa ? user.idEmpresa : null
      });
      respuesta = {
        roles   : listaRoles,
        menu,
        token,
        usuario : {
          usuario          : user.usuario,
          nombres          : user.persona.nombres,
          primer_apellido  : user.persona.primerApellido,
          segundo_apellido : user.persona.segundoApellido,
          email            : user.email,
          rol              : rolSeleccionado.nombre,
          idEmpresa        : user.idEmpresa ? user.idEmpresa : null,
          lang             : 'es'
        },
        redirect: rolSeleccionado.path
      };
      return respuesta;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  return {
    cambiarContrasena,
    asignarRoles,
    listarUsuarios,
    mostrar,
    createOrUpdate,
    eliminar,
    getResponse
  };
};
