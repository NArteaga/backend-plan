'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function RFSolicitudHistorialRepository (models, Sequelize) {
  const { RFSolicitudHistorial, Persona } = models;
  const Op = Sequelize.Op;
  const attributes = ['id', 'justificacion', 'denunciante', 'createdAt'];

  async function findOrCreate (data) {
    let respuesta;
    const query = {
      id: data.id
    };
    respuesta = await RFSolicitudHistorial.findOne(query);
    if (!respuesta) {
      respuesta = await RFSolicitudHistorial.create(data);
    }
    return respuesta;
  }

  function findAll (params = {}) {
    const query = getQuery(params);
    query.where = {};
    if (params.rfuncionalSolicitudId) {
      query.where.rfuncionalSolicitudId = params.rfuncionalSolicitudId;
    }

    return RFSolicitudHistorial.findAndCountAll(query);
  }

  return {
    findAll,
    findOrCreate,
    findOne        : params => Repository.findOne(params, RFSolicitudHistorial, attributes),
    findById       : (id) => Repository.findById(id, RFSolicitudHistorial, attributes),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, RFSolicitudHistorial, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, RFSolicitudHistorial, t)
  };
};
