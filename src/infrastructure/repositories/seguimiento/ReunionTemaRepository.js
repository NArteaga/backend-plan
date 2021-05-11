'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function reunionTemaRepository (models, Sequelize) {
  const { reunionTema } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    if (params.idTema) {
      query.where.idTema = params.idTema;
    }

    return reunionTema.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, reunionTema),
    findById       : id => Repository.findById(id, reunionTema),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, reunionTema, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, reunionTema, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, reunionTema, t)

  };
};
