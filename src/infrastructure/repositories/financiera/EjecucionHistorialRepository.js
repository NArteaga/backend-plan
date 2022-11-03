'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function responsableRepository (models) {
  const { ejecucionHistorial } = models;
  async function findAll (params = {}) {
    const query = getQuery(params);
    query.where = {};
    query.attributes = ['id', 'idEjecucion', 'versionInicial', 'versionFinal', 'observaciones'];
    if (params.idEjecucion) {
      query.where.idEjecucion = params.idEjecucion;
    }
    const result = await ejecucionHistorial.findAndCountAll(query);
    return toJSON(result);
  }
  return {
    findAll,
    createOrUpdate: (item, t) => Repository.createOrUpdate(item, ejecucionHistorial, t)
  };
};
