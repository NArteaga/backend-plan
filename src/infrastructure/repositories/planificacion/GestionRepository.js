'use strict';

const Repository = require('../Repository');
const { getQuery } = require('../../lib/util');

module.exports = function GestionRepository (models, Sequelize) {
  const { gestion } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'gestion',
      'descripcion',
      'etapa',
      'ejecutando',
      'estado',
      'fechaInicio',
      'fechaFin',
      'updatedAt'
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.gestion) {
      query.where.gestion = params.gestion;
    }
    if (params.estado) {
      query.where.estado = params.estado;
    }
    if (params.ejecutando) {
      query.where.ejecutando = params.ejecutando;
    }
    if (params.descripcion) {
      query.where.descripcion = {
        [Op.iLike]: `%${params.descripcion}%`
      };
    }
    if (params.estado) {
      query.where.estado = params.estado;
    }
    return gestion.findAndCountAll(query);
  }

  async function findOne (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'gestion',
      'descripcion',
      'etapa',
      'ejecutando',
      'estado',
      'fechaInicio',
      'fechaFin'
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.estado) {
      query.where.estado = params.estado;
    }
    if (params.gestion) {
      query.where.gestion = params.gestion;
    }
    const result = await gestion.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }
  return {
    findAll,
    findOne,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, gestion, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, gestion, t)
  };
};
