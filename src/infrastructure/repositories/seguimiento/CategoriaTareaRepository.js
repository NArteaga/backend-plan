'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function categoriaTareaRepository (models, Sequelize) {
  const { categoriaTarea } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    if (params.idTema) {
      query.where.idTema = params.idTema;
    }

    return categoriaTarea.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, categoriaTarea),
    findById       : id => Repository.findById(id, categoriaTarea),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, categoriaTarea, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, categoriaTarea, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, categoriaTarea, t)

  };
};
