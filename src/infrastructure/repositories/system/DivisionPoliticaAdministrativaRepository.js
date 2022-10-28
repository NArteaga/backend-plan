'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function DivisionPoliticaAdministrativaRepository (models, Sequelize) {
  const { divisionPoliticaAdministrativa } = models;

  async function findAll (params = {}) {
    const query = getQuery();
    query.where = {};
    if (params.nivel) {
      query.where.nivel = params.nivel;
    }
    if (params.idDpa) {
      query.where.idDpa = params.idDpa;
    }

    const result = await divisionPoliticaAdministrativa.findAndCountAll(query);

    if (result) {
      return result;
    }
    return null;
  }

  async function findOne (params = {}) {
    const query = {};
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.idUsuario) {
      query.where.idUsuario = params.idUsuario;
    }

    if (params.idRol) {
      query.where.idRol = params.idRol;
    }
    const result = await divisionPoliticaAdministrativa.findOne(query);
    if (result) {
      return result.toJSON();
    }
    return null;
  }
  return {
    findOne,
    findAll,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, divisionPoliticaAdministrativa, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, divisionPoliticaAdministrativa, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, divisionPoliticaAdministrativa, t)
  };
};
