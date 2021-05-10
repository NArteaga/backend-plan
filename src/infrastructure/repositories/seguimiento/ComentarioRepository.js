'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function comentarioRepository (models, Sequelize) {
  const { comentario } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.where = {};
    query.include = [];

    if (params.idTarea) {
      query.where.idTarea = params.idTarea;
    }

    return comentario.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, comentario),
    findById       : id => Repository.findById(id, comentario),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, comentario, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, comentario, t)
  };
};
