'use strict';

const Repository = require('../Repository');
const { getQuery } = require('../../lib/util');

module.exports = function CronogramaRepository (models, Sequelize) {
  const { cronograma } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'mes',
      'cantidadProgramada',
      'cantidadCumplida',
      'fechaRegistroCumplimiento',
      'idUsuarioRegistroCumplimiento',
      'observacion',
      'detalle',
      'documentos',
      'meta',
      'idIndicadorMeta'
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.idOperacion) {
      query.where.idOperacion = params.idOperacion;
    }
    if (params.idMonitoreo) {
      query.where.idMonitoreo = params.idMonitoreo;
    }
    if (params.idUsuarioRegistroCumplimiento) {
      query.where.idUsuarioRegistroCumplimiento = params.idUsuarioRegistroCumplimiento;
    }
    if (params.reformulacionHabilitada) {
      query.where.reformulacionHabilitada = params.reformulacionHabilitada;
    }
    if (params.cantidadProgramada) {
      query.where.cantidadProgramada = params.cantidadProgramada;
    }
    if (params.cantidadCumplida) {
      query.where.cantidadCumplida = params.cantidadCumplida;
    }
    if (params.idIndicadorMeta) {
      query.where.idIndicadorMeta = params.idIndicadorMeta;
    }
    if (params.meta) {
      query.where.meta = {
        [Op.iLike]: `%${params.meta}%`
      };
    }
    if (params.observacion) {
      query.where.observacion = {
        [Op.iLike]: `%${params.observacion}%`
      };
    }
    if (params.mes) {
      query.where.mes = {
        [Op.iLike]: `%${params.mes}%`
      };
    }
    if (params.estado) {
      query.where.estado = params.estado;
    }
    return cronograma.findAndCountAll(query);
  }

  async function findOne (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'mes',
      'cantidadProgramada',
      'cantidadCumplida',
      'fechaRegistroCumplimiento',
      'idUsuarioRegistroCumplimiento',
      'observacion',
      'meta',
      'detalle',
      'documentos',
      'idIndicadorMeta'
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    const result = await cronograma.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }

  return {
    findAll,
    findOne,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, cronograma, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, cronograma, t)
  };
};
