'use strict';

const { ErrorApp } = require('../../lib/error');

module.exports = function userService (repositories, helpers, res) {
  const { UsuarioRepository, RolUsuarioRepository, AuthRepository, transaction } = repositories;

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

      if (data.contrasena) {
        data.contrasena = await AuthRepository.codificarContrasena(data.contrasena);
      }

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
        if (data.roles.length === 0) throw new Error('Debe asignar al menos un rol al usuario');
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

      const respuestaVerificacion = await AuthRepository.verificarContrasena(data.antiguaContrasena, existeUsuario.contrasena);
      if (!respuestaVerificacion) {
        throw new Error('Su contraseña anterior no coincide.');
      }

      await UsuarioRepository.createOrUpdate({
        id         : existeUsuario.id,
        contrasena : await AuthRepository.codificarContrasena(data.nuevaContrasena)
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

  return {
    cambiarContrasena,
    asignarRoles,
    listarUsuarios,
    mostrar,
    createOrUpdate,
    eliminar
  };
};
