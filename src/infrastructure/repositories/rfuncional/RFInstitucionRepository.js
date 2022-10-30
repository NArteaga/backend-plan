'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function RFInstitucionRepository (models, Sequelize) {
  const { RFInstitucion } = models;
  const Op = Sequelize.Op;
  const attributes = ['id', 'nombre', 'departamento', 'provincia', 'municipio'];

  async function findOrCreate (data) {
    let respuesta;
    const query = {
      where: { nombre: data.nombre }
    };
    respuesta = await RFInstitucion.findOne(query);
    if (!respuesta) {
      respuesta = await RFInstitucion.create(data);
    }
    return respuesta;
  }

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = attributes;
    query.where = {};
    return RFInstitucion.findAndCountAll(query);
  }

  return {
    findAll,
    findOrCreate,
    findOne        : params => Repository.findOne(params, RFInstitucion, attributes),
    findById       : (id) => Repository.findById(id, RFInstitucion, attributes),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, RFInstitucion, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, RFInstitucion, t)
  };
};
