'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function rolesRepository (models, Sequelize) {
  const { rol, ruta, menu } = models;
  const Op = Sequelize.Op;
  const attributes = ['id', 'nombre', 'descripcion', 'estado'];

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = attributes;
    query.where = {};
    query.include = [];

    if (params.estado) {
      query.where.estado = params.estado;
    }

    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }

    if (params.descripcion) {
      query.where.nombre = {
        [Op.iLike]: `%${params.descripcion}%`
      };
    }

    return rol.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, rol),
    findById       : id => Repository.findById(id, rol, attributes),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, rol, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, rol, t)
  };
};
