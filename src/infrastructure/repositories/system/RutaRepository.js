'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function menusRepository (models, Sequelize) {
  const { ruta } = models;
  const Op = Sequelize.Op;
  const attributes = ['id', 'ruta', 'metodo', 'descripcion'];
  function findAll (params = {}) {
    let query = getQuery(params);
    query.where = {};
    query.attributes = attributes;
    return ruta.findAndCountAll(query);
  }

  return {
    findAll,
    findById: (id) => Repository.findById(id, ruta, attributes),
    createOrUpdate: (item, t) => Repository.createOrUpdate(item, ruta, t),
    deleteItem: (id, t) => Repository.deleteItem(id, ruta, t)
  };
};
