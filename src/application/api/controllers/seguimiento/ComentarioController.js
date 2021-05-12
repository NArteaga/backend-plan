
'use strict';
const debug = require('debug')('app:controller:REPORTE');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');
const { app } = require('../../../../common/config');
const fs = require('fs');

module.exports = function setupEntidadController (services) {
  const {
    ComentarioService
  } = services;

  async function listar (req, res) {
    try {
      debug('Recuperando entidades');
      const respuesta = await ComentarioService.listar(req.query);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function crear (req, res) {
    try {
      const data = req.body;
      debug('creando entidad');
      data.idUsuario = req.user.idUsuario;
      data.userCreated = req.user.idUsuario; // corregir
      const respuesta = await ComentarioService.createOrUpdate(data);
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
      data.idUsuario = req.user.idUsuario;
      data.userUpdated = req.user.idUsuario;
      const respuesta = await ComentarioService.createOrUpdate(data);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function eliminar (req, res) {
    try {
      const { id } = req.params;
      debug('Eliminando entidad');
      const respuesta = await ComentarioService.deleteItem(id);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function subirArchivo (req, res) {
    try {
      const dir = app.archivosPublicos;
      const archivos = req.files;
      const archivosArray = [];
      for (const key in archivos) {
        const pathFile = `${dir}/${archivos[key].name}`;
        await archivos[key].mv(pathFile);
        archivosArray.push(archivos[key].name);
      }
      debug('Eliminando entidad');
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, archivosArray));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function recuperarArchivo (req, res) {
    try {
      const dir = app.archivosPublicos;
      const { id } = req.params;
      const comentario = await ComentarioService.findOne({ id });
      const existeArchivo = fs.existsSync(`${dir}/${comentario.rutaAdjunto}`);
      let archivo = null;
      if (existeArchivo) {
        archivo = fs.readFileSync(`${dir}/${comentario.rutaAdjunto}`, { encoding: 'base64' });
      }
      debug('Eliminando entidad');
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, archivo));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    recuperarArchivo,
    subirArchivo,
    listar,
    eliminar,
    actualizar,
    crear
  };
};
