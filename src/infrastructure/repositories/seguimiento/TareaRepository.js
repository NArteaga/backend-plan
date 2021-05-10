'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function tareaRepository (models, Sequelize) {
  const { tarea } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    if (params.idTema) {
      query.where.idTema = params.idTema;
    }

    return tarea.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, tarea),
    findById       : id => Repository.findById(id, tarea),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, tarea, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, tarea, t)
  };
};
