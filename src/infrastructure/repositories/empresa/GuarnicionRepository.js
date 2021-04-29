'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function redesSocialesRepository (models, Sequelize) {
  const { guarnicion } = models;

  async function findAll (params = {}) {
    const query = {};
    query.where = {};

    query.include = [];

    const result = await guarnicion.findAndCountAll(query);
    return toJSON(result);
  }

  return {
    findAll,
    findOne        : (params) => Repository.findOne(params, guarnicion),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, guarnicion, t)
  };
};
