'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function sucursalRepository (models, Sequelize) {
  const { sucursal, parametro } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);
    query.where = {};
    query.order = [
      ['_created_at', 'ASC']
    ];

    if (params.idSucursal) {
      query.where.id = params.idSucursal;
    }

    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }

    if (params.direccion) {
      query.where.direccion = {
        [Op.iLike]: `%${params.direccion}%`
      };
    }

    const whereCiudad = {};
    if (params.ciudad) {
      whereCiudad.nombre = {
        [Op.iLike]: `%${params.ciudad}%`
      };
    }

    query.include = [
      {
        model : parametro,
        as    : 'ciudad',
        where : whereCiudad
      }
    ];
    const result = await sucursal.findAndCountAll(query);
    return toJSON(result);
  }

  async function generarCodigo (prefijo, numero) {
    const [results, metadata] = await sucursal.options.sequelize.query(`SELECT '${prefijo}' || '-' || RIGHT('0000000000' || ${numero}::varchar, 10) as codigo;`);
    return results[0] || null;
  }

  return {
    generarCodigo,
    findAll,
    findOne        : (params) => Repository.findOne(params, sucursal),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, sucursal, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, sucursal, t)
  };
};
