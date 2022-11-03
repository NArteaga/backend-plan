'use strict';

const Repository = require('../Repository');
const { getQuery } = require('../../lib/util');

module.exports = function GestionRepository (models) {
  const { partidaPresupuestaria } = models;
  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = ['id', 'codigo', 'idPartidaPadre', 'nombre', 'tipo'];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.tipo) {
      query.where.tipo = params.tipo;
    }
    if (params.idPartidaPadre) {
      query.where.idPartidaPadre = params.idPartidaPadre;
    }
    return partidaPresupuestaria.findAndCountAll(query);
  }

  async function findOne (params = {}) {
    const query = getQuery(params);
    query.attributes = ['id', 'codigo', 'idPartidaPadre', 'nombre', 'tipo'];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    const result = await partidaPresupuestaria.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }
  return {
    findAll,
    findOne,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, partidaPresupuestaria, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, partidaPresupuestaria, t)
  };
};
