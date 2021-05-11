'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function reunionParticipanteRepository (models, Sequelize) {
  const { reunionParticipante } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    if (params.idTema) {
      query.where.idTema = params.idTema;
    }

    return reunionParticipante.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, reunionParticipante),
    findById       : id => Repository.findById(id, reunionParticipante),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, reunionParticipante, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, reunionParticipante, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, reunionParticipante, t)

  };
};
