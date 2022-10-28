'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function responsableRepository (models, Sequelize) {
  const { operacionHistorial } = models;
  async function findAll (params = {}) {
    const query = getQuery(params);
    query.where = {};
    query.attributes = ['id', 'idOperacion', 'versionInicial', 'versionFinal', 'observaciones'];
    if (params.idOperacion) {
      query.where.idOperacion = params.idOperacion;
    }
    const result = await operacionHistorial.findAndCountAll(query);
    return toJSON(result);
  }
  return {
    findAll,
    createOrUpdate: (item, t) => Repository.createOrUpdate(item, operacionHistorial, t)
  };
};
