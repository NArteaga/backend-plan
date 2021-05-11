'use strict';

const { getQuery } = require('../../lib/util');
const tarea = require('../../models/seguimiento/tarea');
const Repository = require('../Repository');

module.exports = function temaRepository (models, Sequelize) {
  const { tema, tarea } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);

    query.attributes = [
      'id',
      'idEntidad',
      'titulo',
      'descripcion',
      'estado'
    ];

    query.where = {};
    query.include = [];

    return tema.findAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, tema),
    findById       : id => Repository.findById(id, tema),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, tema, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, tema, t)
  };
};
