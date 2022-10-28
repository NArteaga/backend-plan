'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function SeguimientoRepository (models, Sequelize) {
  const { seguimiento } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idGestion',
      'descripcion',
      'tipo',
      'fechaInicio',
      'fechaFin'
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.idTipoSeguimiento) {
      query.where.idTipoSeguimiento = params.idTipoSeguimiento;
    }
    if (params.descripcion) {
      query.where.descripcion = {
        [Op.iLike]: `%${params.descripcion}%`
      };
    }
    if (params.estado) {
      query.where.estado = params.estado;
    }

    const result = await seguimiento.findAndCountAll(query);
    return toJSON(result);
  }

  async function findOne (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idGestion',
      'descripcion',
      'tipo',
      'fechaInicio',
      'fechaFin'
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }

    const result = await seguimiento.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }
  return {
    findAll,
    findOne,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, seguimiento, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, seguimiento, t)
  };
};
