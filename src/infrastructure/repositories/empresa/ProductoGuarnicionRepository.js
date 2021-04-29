'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function servicioRepository (models, Sequelize) {
  const { productoGuarnicion } = models;

  async function findAll (params = {}) {
    const query = {};
    query.where = {};
    query.include = [];

    const result = await productoGuarnicion.findAndCountAll(query);
    return toJSON(result);
  }

  return {
    findAll,
    findOne        : (params) => Repository.findOne(params, productoGuarnicion),
    deleteItem     : (id, t) => Repository.deleteItem(id, productoGuarnicion, t),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, productoGuarnicion, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, productoGuarnicion, t)

  };
};
