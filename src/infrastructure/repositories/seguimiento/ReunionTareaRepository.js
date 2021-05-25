'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function reunionTareaRepository (models, Sequelize) {
  const { reunionTarea } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    return reunionTarea.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, reunionTarea),
    findById       : id => Repository.findById(id, reunionTarea),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, reunionTarea, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, reunionTarea, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, reunionTarea, t)
  };
};
