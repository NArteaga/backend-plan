'use strict';

const { ErrorApp } = require('../../lib/error');
module.exports = function DivisionPoliticaAdministrativaService (repositories, helpers, res) {
  const { DivisionPoliticaAdministrativaRepository } = repositories;

  async function findAll (params = {}) {
    try {
      const resultado = await DivisionPoliticaAdministrativaRepository.findAll(params);
      return resultado;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const entidad = await DivisionPoliticaAdministrativaRepository.findOne(params);
      if (!entidad) {
        throw new Error('La entidad no existe');
      }
      return entidad;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      const parametros = await DivisionPoliticaAdministrativaRepository.createOrUpdate(datos);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const parametros = await DivisionPoliticaAdministrativaRepository.deleteItem(id);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    findAll,
    findOne,
    createOrUpdate,
    eliminar
  };
};
