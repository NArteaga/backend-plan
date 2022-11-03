'use strict';

const { ErrorApp } = require('../../lib/error');

module.exports = function gestionService (repositories) {
  const { PresupuestoRepository, OrganismoFinanciadorRepository } = repositories;

  async function findAll (params) {
    try {
      const organismoFinanciador = await OrganismoFinanciadorRepository.findAll(params);
      return organismoFinanciador;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const organismoFinanciador = await OrganismoFinanciadorRepository.findOne(params);
      return organismoFinanciador;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      const organismoFinanciador = await OrganismoFinanciadorRepository.createOrUpdate(datos);
      return organismoFinanciador;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const presupuesto = await PresupuestoRepository.findAll({ idOrganismoFinanciador: id });
      if (presupuesto.length > 0) throw new Error('No puede eliminar el organismo financiador debido a que se tiene presupuestos asociadas');
      const organismoFinanciador = await OrganismoFinanciadorRepository.deleteItem(id);
      return organismoFinanciador;
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
