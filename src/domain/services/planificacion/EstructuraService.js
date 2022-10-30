'use strict';

const { ErrorApp } = require('../../lib/error');

module.exports = function estructuraService (repositories, helpers, res) {
  const { EstructuraRepository, OperacionRepository } = repositories;

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
      if (!estructura) throw new Error('El estructura no existe');
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
      datos.nivel = nivel;
      const estructura = await EstructuraRepository.createOrUpdate(datos);
      return estructura;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const operacion = await OperacionRepository.findAll({ idEstructura: id });
      if (operacion.rows.length > 0) throw new Error('El estructura contiene operaciones que se deben eliminar antes de eliminar esta estructura');
      const estructuraPadre = await EstructuraRepository.findAll({ idEstructuraPadre: id });
      if (estructuraPadre.rows.length > 0) throw new Error('El estructura contiene estructuras que son dependientes de ella que se deben eliminar antes de eliminar esta estructura');
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
