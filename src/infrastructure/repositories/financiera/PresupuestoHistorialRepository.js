'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function responsableRepository (models) {
  const { presupuestoHistorial } = models;
  async function findAll (params = {}) {
    const query = getQuery(params);
    query.where = {};
    query.attributes = ['id', 'idPresupuesto', 'versionInicial', 'versionFinal', 'observaciones'];
    if (params.idPresupuesto) {
      query.where.idPresupuesto = params.idPresupuesto;
    }
    const result = await presupuestoHistorial.findAndCountAll(query);
    return toJSON(result);
  }
  return {
    findAll,
    createOrUpdate: (item, t) => Repository.createOrUpdate(item, presupuestoHistorial, t)
  };
};
