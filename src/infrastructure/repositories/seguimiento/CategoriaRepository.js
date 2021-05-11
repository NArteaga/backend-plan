'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function categoriaRepository (models, Sequelize) {
  const { categoria } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    if (params.idTema) {
      query.where.idTema = params.idTema;
    }

    return categoria.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, categoria),
    findById       : id => Repository.findById(id, categoria),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, categoria, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, categoria, t)
  };
};
