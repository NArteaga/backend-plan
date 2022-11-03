'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function ParametroRepository (models, Sequelize) {
  const { parametro } = models;
  const Op = Sequelize.Op;
  const attributes = ['id', 'codigo', 'grupo', 'nombre', 'descripcion', 'otros', 'estado'];

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = attributes;
    query.where = {};

    if (params.estado) {
      query.where.estado = params.estado;
    }

    if (params.grupo) {
      if (!Array.isArray(params.grupo)) query.where.grupo = { [Op.iLike]: `%${params.grupo}%` };
      else {
        const whereGrupo = [];
        for (const grupo of params.grupo) whereGrupo.push({ [Op.iLike]: `%${grupo}%` });
        query.where.grupo = { [Op.or]: whereGrupo };
      }
    }

    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }

    if (params.descripcion) {
      query.where.descripcion = {
        [Op.iLike]: `%${params.descripcion}%`
      };
    }
    // query.attributes = attributes;
    return parametro.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, parametro, attributes),
    findById       : (id) => Repository.findById(id, parametro, attributes),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, parametro, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, parametro, t)
  };
};
