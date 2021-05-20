'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function suscripcionRepository (models, Sequelize) {
  const { suscripcion } = models;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    if (params.idUsuario) {
      query.where.idUsuario = params.idUsuario;
    }

    const result = await suscripcion.findAndCountAll(query);
    return toJSON(result);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, suscripcion),
    findById       : id => Repository.findById(id, suscripcion),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, suscripcion, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, suscripcion, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, suscripcion, t)
  };
};
