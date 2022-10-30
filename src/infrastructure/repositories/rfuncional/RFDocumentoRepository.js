'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function RFDocumentoRepository (models, Sequelize) {
  const { RFDocumento } = models;
  const Op = Sequelize.Op;
  const attributes = ['id', 'nombre'];

  async function findOrCreate (data) {
    let respuesta;
    const query = {
      where: { id: data.id }
    };
    respuesta = await RFDocumento.findOne(query);
    if (!respuesta) {
      respuesta = await RFDocumento.create(data);
    }
    return respuesta;
  }

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = attributes;
    query.where = {};
    return RFDocumento.findAndCountAll(query);
  }

  return {
    findAll,
    findOrCreate,
    findOne        : params => Repository.findOne(params, RFDocumento, attributes),
    findById       : (id) => Repository.findById(id, RFDocumento, attributes),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, RFDocumento, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, RFDocumento, t)
  };
};
