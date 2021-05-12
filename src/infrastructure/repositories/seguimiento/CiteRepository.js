'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function citeRepository (models, Sequelize) {
  const { cite } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    return cite.findAndCountAll(query);
  }

  async function generarCite (prefijo, sufijo, correlativo) {
    const anio = new Date();
    const [results, metadata] = await cite.options.sequelize
      .query(`SELECT '${prefijo}/${anio.getFullYear()}' || '-' || RIGHT('00000' || ${correlativo}::varchar, 5) || '-' || '${sufijo}'  as codigo;`);
    return results[0] || null;
  }

  return {
    generarCite,
    findAll,
    findOne        : params => Repository.findOne(params, cite),
    findById       : id => Repository.findById(id, cite),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, cite, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, cite, t)
  };
};
