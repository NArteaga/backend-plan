
'use strict';
const debug = require('debug')('app:controller:REPORTE');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');

module.exports = function setupEntidadController (services) {
  const { TemaService, PermisoService } = services;

  async function listar (req, res) {
    try {
      debug('Recuperando entidades');
      // req = await PermisoService.buscarFiltros(req);
      req.query.entidades = req.user.entidadesDependientes;
      const respuesta = await TemaService.listar(req.query);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function listarTareas (req, res) {
    try {
      req.query.idTema = req.params.id;
      req.query.entidades = req.user.entidadesDependientes;
      const respuesta = await TemaService.listarTareas(req.query);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function crear (req, res) {
    try {
      const data = req.body;
      debug('creando entidad');
      data.userCreated = req.user.idUsuario;

      const respuesta = await TemaService.createOrUpdate(data);
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

      const respuestaVerificacion = await TemaService.verficarDependencia(req.user.entidadesDependientes, req.params.id);
      if (!respuestaVerificacion) {
        throw new Error('No tiene permisos para editar este tema.');
      }

      const respuesta = await TemaService.createOrUpdate(data);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function eliminar (req, res) {
    try {
      const { id } = req.params;
      debug('Eliminando entidad');

      const respuesta = await TemaService.deleteItem(id);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }
  return {
    listarTareas,
    listar,
    eliminar,
    actualizar,
    crear
  };
};
