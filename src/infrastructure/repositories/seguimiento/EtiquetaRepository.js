'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function etiquetaRepository (models, Sequelize) {
  const { etiqueta } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    if (params.idTema) {
      query.where.idTema = params.idTema;
    }

    return etiqueta.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, etiqueta),
    findById       : id => Repository.findById(id, etiqueta),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, etiqueta, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, etiqueta, t)
  };
};
