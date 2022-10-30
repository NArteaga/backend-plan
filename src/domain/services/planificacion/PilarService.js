'use strict';

const { ErrorApp } = require('../../lib/error');

module.exports = function gestionService (repositories, helpers, res) {
  const { PilarRepository } = repositories;

  async function findAll (params) {
    try {
      const pilar = await PilarRepository.findAll(params);
      if (params.idEje) {
        pilar.rows = pilar.rows.filter(item => item.idEje.includes(params.idEje));
      }
      return pilar;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const pilar = await PilarRepository.findOne(params);
      return pilar;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      const pilar = await PilarRepository.createOrUpdate(datos);
      return pilar;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const pilar = await PilarRepository.deleteItem(id);
      return pilar;
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
