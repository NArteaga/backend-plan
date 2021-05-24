'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function temaEntidadRepository (models, Sequelize) {
  const { temaEntidad } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    return temaEntidad.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, temaEntidad),
    findById       : id => Repository.findById(id, temaEntidad),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, temaEntidad, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, temaEntidad, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, temaEntidad, t)
  };
};
