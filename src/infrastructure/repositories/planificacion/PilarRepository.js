'use strict';

const Repository = require('../Repository');
const { getQuery } = require('../../lib/util');

module.exports = function GestionRepository (models, Sequelize) {
  const { pilar } = models;
  function findAll (params = {}) {
    const query = getQuery(params);
    const Op = Sequelize.Op;
    query.attributes = [
      'id',
      'idEje',
      'nombre',
      'codigo'
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }
    if (params.codigo) {
      query.where.codigo = params.codigo;
    }
    return pilar.findAndCountAll(query);
  }

  async function findOne (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idEje',
      'nombre',
      'codigo'
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    const result = await pilar.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }
  return {
    findAll,
    findOne,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, pilar, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, pilar, t)
  };
};
