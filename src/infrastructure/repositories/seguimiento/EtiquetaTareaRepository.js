'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function etiquetaTareaRepository (models, Sequelize) {
  const { etiquetaTarea } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    if (params.idTema) {
      query.where.idTema = params.idTema;
    }

    return etiquetaTarea.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, etiquetaTarea),
    findById       : id => Repository.findById(id, etiquetaTarea),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, etiquetaTarea, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, etiquetaTarea, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, etiquetaTarea, t)
  };
};
