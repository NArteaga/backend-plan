'use strict';

const Repository = require('../Repository');
const { getQuery } = require('../../lib/util');

module.exports = function estructuraRepository (models, Sequelize) {
  const { estructura } = models;
  const Op = Sequelize.Op;

  function buscarHijos (idEstructuraPadre) {
    const query = {};
    query.attributes = [
      'id',
      'idEstructuraPadre',
      'nombre',
      'nivel',
      'sigla',
      'editable',
      'codigo',
      'cronograma',
      'codigoManual',
      'areaRequerida',
      'created',
      'eje',
      'pilar',
      'lineamientos',
      'objetivo',
      'accion'
    ];
    query.where = {};
    query.where.idEstructuraPadre = idEstructuraPadre;
    return estructura.findAndCountAll(query);
  }

  async function ultimaEstructura (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idEstructuraPadre',
      'nombre',
      'nivel',
      'sigla',
      'codigo',
      'cronograma',
      'codigoManual',
      'areaRequerida',
      'editable',
      'created',
      'eje',
      'pilar',
      'lineamientos',
      'objetivo',
      'accion'
    ];
    query.where = {};
    query.order = [['nivel', 'DESC']];
    const result = await estructura.findOne(query);
    if (result) {
      return result.toJSON();
    }
    return null;
  }

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idEstructuraPadre',
      'nombre',
      'nivel',
      'sigla',
      'codigo',
      'cronograma',
      'codigoManual',
      'areaRequerida',
      'editable',
      'created',
      'eje',
      'pilar',
      'lineamientos',
      'objetivo',
      'accion'
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.idEstructuraPadre) {
      query.where.idEstructuraPadre = {
        [Op.contains]: params.idEstructuraPadre
      };
    }
    console.log(query.where);
    if (params.sigla) {
      query.where.sigla = {
        [Op.iLike]: `%${params.sigla}%`
      };
    }
    if (params.nivel) {
      query.where.nivel = params.nivel;
    }
    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }

    return estructura.findAndCountAll(query);
  }

  async function findOne (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idEstructuraPadre',
      'nombre',
      'nivel',
      'sigla',
      'codigo',
      'cronograma',
      'codigoManual',
      'areaRequerida',
      'editable',
      'created',
      'eje',
      'pilar',
      'lineamientos',
      'objetivo',
      'accion'
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.idEstructuraPadre) {
      query.where.idEstructuraPadre = params.idEstructuraPadre;
    }
    if (params.nivel) {
      query.where.nivel = params.nivel;
    }
    const result = await estructura.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }
  return {
    findAll,
    findOne,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, estructura, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, estructura, t),
    buscarHijos,
    ultimaEstructura
  };
};
