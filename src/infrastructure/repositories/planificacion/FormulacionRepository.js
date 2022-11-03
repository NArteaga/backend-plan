'use strict';

const Repository = require('../Repository');
const { getQuery } = require('../../lib/util');

module.exports = function gestionRepository (models, Sequelize) {
  const { formulacion, gestion, entidad } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idEntidad',
      'idGestion',
      'idSeguimiento',
      'tipo',
      'idUsuarioRevisor',
      'idUsuarioValidador',
      'validado',
      'fechaRevision',
      'fechaValidacion',
      'fechaElaboracion',
      'observacion',
      'fechaInicio',
      'fechaFin',
      'etapa',
      'archivoAdjunto',
      'userCreated'
    ];
    query.include = [
      {
        model      : entidad,
        as         : 'entidad',
        attributes : ['id', 'nombre']
      },
      {
        model      : gestion,
        as         : 'gestion',
        attributes : ['id', 'gestion']
      }
    ];

    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.idEntidad) {
      query.where.idEntidad = params.idEntidad;
    }
    if (params.idGestion) {
      query.where.idGestion = params.idGestion;
    }
    if (params.idSeguimiento) {
      query.where.idSeguimiento = params.idSeguimiento;
    }
    if (params.tipo && params.tipo !== 'null') {
      query.where.tipo = params.tipo;
    }
    if (params.etapa) {
      query.where.etapa = params.etapa;
    }
    if (params.idEntidad) {
      query.where.idEntidad = params.idEntidad;
    }
    if (params.idUsuarioRevisor) {
      query.where.idUsuarioRevisor = params.idUsuarioRevisor;
    }
    if (params.idUsuarioValidador) {
      query.where.idUsuarioValidador = params.idUsuarioValidador;
    }
    if (params.observaciones) {
      query.where.observaciones = {
        [Op.iLike]: `%${params.observaciones}%`
      };
    }
    if (params.estado) {
      query.where.estado = params.estado;
    }
    if (params.validado) {
      query.where.validado = params.validado;
    }

    // filtro por gestion
    query.where[Op.and] = [];
    if (params.gestion) {
      query.where[Op.and].push({
        '$gestion.gestion$': params.gestion
      });
    }

    return formulacion.findAndCountAll(query);
  }

  async function findOne (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idEntidad',
      'idGestion',
      'idSeguimiento',
      'tipo',
      'idUsuarioRevisor',
      'idUsuarioValidador',
      'validado',
      'fechaRevision',
      'fechaValidacion',
      'fechaElaboracion',
      'observacion',
      'fechaInicio',
      'fechaFin',
      'etapa',
      'userCreated',
      'archivoAdjunto'
    ];
    query.where = {};

    if (params.id) {
      query.where.id = params.id;
    }

    if (params.idGestion) {
      query.where.idGestion = params.idGestion;
    }

    if (params.idEntidad) {
      query.where.idEntidad = params.idEntidad;
    }

    if (params.tipo) {
      query.where.tipo = params.tipo;
    }

    query.include = [
      {
        model      : entidad,
        as         : 'entidad',
        attributes : ['id', 'nombre']
      },
      {
        model      : gestion,
        as         : 'gestion',
        attributes : ['id', 'gestion']
      }
    ];
    const result = await formulacion.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }
  return {
    findAll,
    findOne,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, formulacion, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, formulacion, t)
  };
};
