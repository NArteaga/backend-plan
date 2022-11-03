'use strict';

const Repository = require('../Repository');
const { getQuery } = require('../../lib/util');

module.exports = function GestionRepository (models) {
  const { ejecucion, detalle } = models;
  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = ['id', 'objetivo', 'montoTotal', 'createdAt', 'updatedAt'];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    return ejecucion.findAndCountAll(query);
  }

  async function findOne (params = {}, t) {
    const query = {};
    if (t) query.transaction = t;
    query.attributes = ['id', 'objetivo', 'montoTotal'];
    query.include = [
      {
        attributes : ['id', 'idEjecucion', 'idPresupuesto', 'descripcion', 'idUnidadMedida', 'cantidad', 'precioUnitario'],
        model      : detalle,
        as         : 'detalles',
        required   : false
      }
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    const result = await ejecucion.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }
  return {
    findAll,
    findOne,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, ejecucion, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, ejecucion, t)
  };
};
