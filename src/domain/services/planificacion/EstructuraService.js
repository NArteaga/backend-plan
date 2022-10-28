'use strict';

const { ErrorApp } = require('../../lib/error');

module.exports = function estructuraService (repositories, helpers, res) {
  const { EstructuraRepository } = repositories;

  async function findAll (params) {
    try {
      const estructura = await EstructuraRepository.findAll(params);
      return estructura;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const estructura = await EstructuraRepository.findOne(params);
      if (!estructura) {
        throw new Error('El estructura no existe');
      }
      return estructura;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      let nivel = 1;
      if (datos.idEstructuraPadre) {
        const estructuraPadre = await EstructuraRepository.findOne({ id: datos.idEstructuraPadre });
        nivel = estructuraPadre.nivel + 1;
      }
      if (datos.gestion.id) {
        datos.idGestion = datos.gestion.id;
      }
      datos.nivel = nivel;
      const estructura = await EstructuraRepository.createOrUpdate(datos);
      return estructura;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const estructura = await EstructuraRepository.deleteItem(id);
      return estructura;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function buscarHijos (idEstructuraPadre) {
    try {
      const estructura = await EstructuraRepository.buscarHijos(idEstructuraPadre);
      return estructura;
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function ultimaEstructura (gestion) {
    try {
      const estructura = await EstructuraRepository.ultimaEstructura(gestion);
      return estructura;
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  return {
    findOne,
    eliminar,
    createOrUpdate,
    findAll,
    buscarHijos,
    ultimaEstructura
  };
};
