'use strict';

const debug = require('debug')('app:controller:auth');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');
const uuid = require('uuid');
const { config } = require('../../../../common');

module.exports = function setupCronogramaController (services) {
  const { CronogramaService } = services;

  async function findAll (req, res) {
    try {
      const respuesta = await CronogramaService.findAll(req.query);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function mostrar (req, res) {
    try {
      debug('Recuperando modulos');
      const respuesta = await CronogramaService.findOne({ id: req.params.id });
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function crear (req, res) {
    try {
      const datos = req.body;
      datos.userCreated = req.user.idUsuario;
      const respuesta = await CronogramaService.createOrUpdate(datos);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function actualizar (req, res) {
    try {
      const datos = req.body;
      datos._user_updated = req.user.idUsuario;
      datos.id = req.params.id;
      const respuesta = await CronogramaService.createOrUpdate(datos);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function eliminar (req, res) {
    try {
      const respuesta = await CronogramaService.eliminar(req.params.id);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function adicionarDocumento (req, res) {
    try {
      const respuesta = await CronogramaService.adicionarDocumento(req.params.id, req.body);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function actualizarDocumentos (req, res) {
    try {
      const datos = {};
      datos.documentos = req.body;
      datos._user_updated = req.user.idUsuario;
      await CronogramaService.actualizarDocumentos(req.params.id, datos);
      const documentos = await CronogramaService.findOne({ id: req.params.id });
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, documentos));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function upload (req, res) {
    try {
      const dir = 'public/adjuntos';
      const { backendUrl } = config.app;
      const archivos = req.files;
      let fileName = null;
      if (archivos.adjunto) {
        const ext = (archivos.adjunto.name.split('.').pop()).toLowerCase();
        fileName = `${uuid.v4()}.${ext}`;
        const pathFile = `${dir}/${fileName}`;
        await archivos.adjunto.mv(pathFile);
      } else {
        return res.status(404).json(new Respuesta(
          'faltan parametros', Finalizado.FAIL));
      }

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, `${backendUrl}adjuntos/${fileName}`));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    mostrar,
    crear,
    actualizar,
    findAll,
    eliminar,
    adicionarDocumento,
    actualizarDocumentos,
    upload
  };
};
