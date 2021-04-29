'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function ordenRepository (models, Sequelize) {
  const { orden, ordenProducto, producto } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'delivery',
      'descuento',
      'direccion',
      'efectivo',
      'estado',
      'idDelivery',
      'idSucursal',
      'nit',
      'nombreCliente',
      'numeroOrden',
      'total',
      '_created_at'
    ];

    query.distinct = true;
    query.where = {};

    if (params.idSucursal) {
      query.where.idSucursal = params.idSucursal;
    }

    if (params.numeroOrden) {
      query.where.numeroOrden = {
        [Op.iLike]: `%${params.numeroOrden}%`
      };
    }

    if (params.nombreCliente) {
      query.where.nombreCliente = {
        [Op.iLike]: `%${params.nombreCliente}%`
      };
    }

    if (params.efectivo) {
      query.where.efectivo = params.efectivo;
    }

    if (params.delivery) {
      query.where.delivery = params.delivery;
    }

    if (params.estado) {
      query.where.estado = params.estado;
    }

    if (params.fechaIni || params.fechaFin) {
      query.where._created_at = {
        [Op.gt] : params.fechaIni || new Date('2000', '01', '01'),
        [Op.lt] : params.fechaFin || new Date()
      };
    }

    query.include = [
      {
        model   : ordenProducto,
        as      : 'ordenProducto',
        include : [
          {
            model : producto,
            as    : 'producto'
          }
        ]
      }
    ];

    const result = await orden.findAndCountAll(query);
    return toJSON(result);
  }

  async function findById (id) {
    const query = {
      where: { id }
    };

    query.include = [
      {
        model   : ordenProducto,
        as      : 'ordenProducto',
        include : [
          {
            model : producto,
            as    : 'producto'
          }
        ]
      }
    ];

    const result = await orden.findOne(query);
    if (result) {
      return result.toJSON();
    }
    return null;
  }

  return {
    findById,
    findAll,
    findOne        : (params) => Repository.findOne(params, orden),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, orden, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, orden, t)
  };
};
