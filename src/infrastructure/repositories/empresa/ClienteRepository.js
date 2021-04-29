'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function clienteRepository (models, Sequelize) {
  const { cliente } = models;
  const Op = Sequelize.Op;

  return {
    findOne        : (params) => Repository.findOne(params, cliente),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, cliente, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, cliente, t)
  };
};
