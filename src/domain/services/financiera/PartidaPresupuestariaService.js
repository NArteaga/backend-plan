'use strict';

const { ErrorApp } = require('../../lib/error');

module.exports = function gestionService (repositories) {
  const { PresupuestoRepository, PartidaPresupuestariaRepository } = repositories;

  async function findAll (params) {
    try {
      const partidaPresupuestaria = await PartidaPresupuestariaRepository.findAll(params);
      return partidaPresupuestaria;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const partidaPresupuestaria = await PartidaPresupuestariaRepository.findOne(params);
      return partidaPresupuestaria;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      const partidaPresupuestaria = await PartidaPresupuestariaRepository.createOrUpdate(datos);
      return partidaPresupuestaria;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const presupuesto = await PresupuestoRepository.findAll({ idPartidaPresupuestaria: id });
      if (presupuesto.length > 0) throw new Error('No puede eliminar la partida presupuestaria debido a que se tiene presupuestos asociadas');
      const partidaPresupuestaria = await PartidaPresupuestariaRepository.deleteItem(id);
      return partidaPresupuestaria;
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
