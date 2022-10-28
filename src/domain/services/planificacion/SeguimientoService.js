'use strict';

const { ErrorApp } = require('../../lib/error');
module.exports = function seguimientoService (repositories, helpers, res) {
  const { SeguimientoRepository } = repositories;

  async function findAll (params) {
    try {
      const seguimiento = await SeguimientoRepository.findAll(params);
      return seguimiento;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const seguimiento = await SeguimientoRepository.findOne(params);
      if (!seguimiento) {
        throw new Error('La seguimiento no existe');
      }
      return seguimiento;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      const seguimiento = await SeguimientoRepository.createOrUpdate(datos);
      return seguimiento;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const seguimiento = await SeguimientoRepository.deleteItem(id);
      return seguimiento;
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
