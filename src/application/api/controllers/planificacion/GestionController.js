'use strict';

const debug = require('debug')('app:controller:auth');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');

module.exports = function setupGestionController (services) {
  const { GestionService, FormulacionService, SeguimientoService } = services;

  async function findAll (req, res) {
    try {
      const respuesta = await GestionService.findAll(req.query);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function mostrar (req, res) {
    try {
      debug('Recuperando modulos');
      const respuesta = await GestionService.findOne({ id: req.params.id });
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function crear (req, res) {
    try {
      const datos = req.body;
      datos.userCreated = req.user.idUsuario;
      const respuesta = await GestionService.createOrUpdate(datos);
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
      if (datos.id && datos.estado === 'INACTIVO') {
        throw new Error('La gestion debe estar ACTIVA para aplicar los cambios');
      }
      const respuesta = await GestionService.createOrUpdate(datos);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function estado (req, res) {
    try {
      const datos = req.body;
      datos._user_updated = req.user.idUsuario;
      const respuesta = await GestionService.activarInactivar(req.params.id, datos);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function eliminar (req, res) {
    try {
      const respuesta = await GestionService.eliminar(req.params.id);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function etapaActiva (req, res) {
    try {
      const gestion = await GestionService.findOne({ estado: 'ACTIVO', ejecutando: true });
      let formulacion = null;
      let seguimiento = null;
      if (gestion.etapa) {
        formulacion = await FormulacionService.findOne({
          idGestion : gestion.id,
          idEntidad : req.query.idEntidad,
          tipo      : gestion.etapa || 'FORMULACION'
        });
      }
      if (gestion.idSeguimiento) {
        seguimiento = await SeguimientoService.findOne({ id: gestion.idSeguimiento });
      }
      const respuesta = {
        gestion,
        formulacion,
        seguimiento
      };
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
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
    estado,
    etapaActiva
  };
};
