
'use strict';
const debug = require('debug')('app:controller:REPORTE');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');

module.exports = function setupRutaController (services) {
  const { PermisoService, ModuloService, AuthService } = services;

  async function listar (req, res) {
    try {
      debug('Recuperando ruta');
      const respuesta = await PermisoService.listar();
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function getPermisos (req, res) {
    try {
      debug('Recuperando ruta');
      const respuesta = await AuthService.verificarPermisos({
        idUsuario : req.idUsuario,
        idRol     : req.idRol,
        metodo    : req.metodo,
        url       : req.url
      });
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function crear (req, res) {
    try {
      debug('Creando permiso');
      const datos = req.body;
      datos._user_created = req.user.idUsuario;
      const respuesta = await PermisoService.createOrUpdate(datos);
      return res.status(201).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function actualizar (req, res) {
    try {
      debug('Creando permiso');
      const datos = req.body;
      datos.id = req.params.id;
      datos._user_updated = req.user.idUsuario;
      const respuesta = await PermisoService.createOrUpdate(datos);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function listarPermisos (req, res) {
    try {
      debug('Recuperando ruta');
      const params = { idModulo: req.params.idModulo };
      if (req.query.rol) {
        params.idRol = req.idRol;
      }
      const respuesta = await ModuloService.getPermisos(params);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    getPermisos,
    crear,
    actualizar,
    listarPermisos,
    listar
  };
};
