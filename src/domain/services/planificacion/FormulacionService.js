'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function formulacionService (repositories, helpers, res) {
  const { FormulacionRepository } = repositories;

  async function findAll (params) {
    try {
      if (params.gestion && params.gestion === 'undefined') {
        throw new Error('No se encontró la gestión');
      }
      const formulacion = await FormulacionRepository.findAll(params);
      return formulacion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const formulacion = await FormulacionRepository.findOne(params);
      if (!formulacion) {
        throw new Error('El formulacion no existe');
      }
      return formulacion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      if (datos.etapa === 'POR VALIDAR') {
        datos.idUsuarioRevisor = datos._user_updated;
        datos.fechaRevision = new Date();
      }
      if (datos.etapa === 'VALIDADO') {
        datos.idUsuarioValidador = datos._user_updated;
        datos.fechaValidacion = new Date();
      }
      const formulacion = await FormulacionRepository.createOrUpdate(datos);
      return formulacion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const formulacion = await FormulacionRepository.deleteItem(id);
      return formulacion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    findOne,
    eliminar,
    createOrUpdate,
    findAll
  };
};
