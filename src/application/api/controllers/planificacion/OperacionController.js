'use strict';

const debug = require('debug')('app:controller:auth');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');

module.exports = function setupOperacionController (services) {
  const { OperacionService, EstructuraService, GestionService } = services;

  async function findAll (req, res) {
    try {
      const respuesta = await OperacionService.findAll(req.query);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }
  async function calificaciones (req, res) {
    try {
      const respuesta = await OperacionService.calificaciones(req.params);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }
  async function mostrar (req, res) {
    try {
      debug('Recuperando modulos');
      const respuesta = await OperacionService.findOne({ id: req.params.id });
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }
  async function crear (req, res) {
    try {
      const datos = req.body;
      datos.userCreated = req.user.idUsuario;
      const respuesta = await OperacionService.createOrUpdate(datos, 'crear');
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }
  async function actualizar (req, res) {
    try {
      const datos = req.body;
      datos.userUpdated = req.user.idUsuario;
      datos.id = req.params.id;
      const respuesta = await OperacionService.createOrUpdate(datos, 'actualizar');
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }
  async function eliminar (req, res) {
    try {
      const respuesta = await OperacionService.eliminar(req.params.id);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }
  async function activarInactivar (req, res) {
    try {
      const usuario = req.user.idUsuario;
      const respuesta = await OperacionService.activarInactivar(req.params.id, usuario);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }
  async function poa (req, res) {
    try {
      const respuesta = await OperacionService.getOperacionesPoa({
        idGestion : req.query.idGestion,
        idEntidad : req.query.idEntidad
      });
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      console.log(error);
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }
  async function ultimaEstructura (req, res) {
    try {
      let gestion = {
        id: req.query.idGestion
      };
      if (!gestion) {
        const gestiones = await GestionService.findAll({ ejecutando: true });
        gestion = gestiones.rows.pop();
      }
      const ultimaEstructura = await EstructuraService.ultimaEstructura(gestion);
      const respuesta = await OperacionService.findAll({
        idEstructura           : ultimaEstructura.id,
        idUnidadOrganizacional : req.query.idUnidadOrganizacional
      });
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }
  return {
    findAll,
    mostrar,
    crear,
    actualizar,
    eliminar,
    activarInactivar,
    poa,
    calificaciones,
    ultimaEstructura
  };
};
