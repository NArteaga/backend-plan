'use strict';

const Repository = require('../Repository');
const { getQuery } = require('../../lib/util');

module.exports = function GestionRepository (models, Sequelize) {
  const { organismoFinanciador } = models;
  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = ['id', 'sigla', 'nombre'];
    const Op = Sequelize.Op;
    query.where = {};
    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }
    if (params.sigla) {
      query.where.sigla = {
        [Op.iLike]: `%${params.sigla}%`
      };
    }
    if (params.id) {
      query.where.id = params.id;
    }
    return organismoFinanciador.findAndCountAll(query);
  }

  async function findOne (params = {}) {
    const query = getQuery(params);
    query.attributes = ['id', 'sigla', 'nombre'];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    const result = await organismoFinanciador.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }
  return {
    findAll,
    findOne,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, organismoFinanciador, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, organismoFinanciador, t)
  };
};
