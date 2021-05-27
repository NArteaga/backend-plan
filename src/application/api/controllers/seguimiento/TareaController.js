
'use strict';
const debug = require('debug')('app:controller:REPORTE');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');

module.exports = function setupEntidadController (services) {
  const { TareaService, PermisoService } = services;

  async function listar (req, res) {
    try {
      console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
      console.log(req.user);
      console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
      const tienePermiso = await PermisoService.verificarPermisos(req.user.idRoles, ['tareas:eliminadas']);
      if (!req.query.eliminados || !tienePermiso) {
        delete req.query.eliminados;
      }
      req.query.entidades = req.user.entidadesDependientes;
      const respuesta = await TareaService.listar(req.query);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function crear (req, res) {
    try {
      const data = req.body;
      debug('creando entidad');
      data.userCreated = req.user.idUsuario; // corregir
      data.idEntidad = req.user.idEntidad;
      const respuesta = await TareaService.createOrUpdate(data);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function actualizar (req, res) {
    try {
      debug('actualizando entidad');
      const data = req.body;
      data.id = req.params.id;
      data.userUpdated = req.user.idUsuario;

      const respuestaVerificacion = await TareaService.verficarDependencia(req.user.entidadesDependientes, req.params.id);
      if (!respuestaVerificacion) {
        throw new Error('No tiene permisos para realizar esta acción.');
      }

      delete data.idEntidad;
      const respuesta = await TareaService.createOrUpdate(data);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function cambiarEstado (req, res) {
    try {
      debug('actualizando entidad');
      const data = {
        id          : req.params.id,
        userUpdated : req.user.idUsuario
      };

      const respuestaVerificacion = await TareaService.verficarDependencia(req.user.entidadesDependientes, req.params.id);
      if (!respuestaVerificacion) {
        throw new Error('No tiene permisos para realizar esta acción.');
      }

      const respuesta = await TareaService.cambiarEstado(data);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function eliminar (req, res) {
    try {
      const { id } = req.params;
      debug('Eliminando entidad');
      const respuesta = await TareaService.deleteItem(id);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    cambiarEstado,
    listar,
    eliminar,
    actualizar,
    crear
  };
};
