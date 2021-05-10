'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function entidadRepository (models, Sequelize) {
  const { entidad } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = attributes;
    query.where = {};
    query.include = [];

    return entidad.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : (params) => Repository.findOne(params, entidad),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, entidad, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, entidad, t)
  };
};
