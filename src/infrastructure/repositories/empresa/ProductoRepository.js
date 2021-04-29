'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function productoRepository (models, Sequelize) {
  const { producto, productoGuarnicion, parametro } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    if (params.idSucursal) {
      query.where.idSucursal = params.idSucursal;
    }

    if (params.estado) {
      query.where.estado = params.estado;
    }

    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }

    query.include = [
      {
        through : { attributes: [] },
        model   : parametro,
        as      : 'guarnicionesProducto'
      }
    ];

    const result = await producto.findAndCountAll(query);
    return toJSON(result);
  }

  return {
    findAll,
    findOne        : (params) => Repository.findOne(params, producto),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, producto, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, producto, t)
  };
};
