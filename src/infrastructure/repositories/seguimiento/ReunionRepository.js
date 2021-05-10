'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function reunionRepository (models, Sequelize) {
  const { reunion } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    return reunion.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, reunion),
    findById       : id => Repository.findById(id, reunion),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, reunion, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, reunion, t)
  };
};
