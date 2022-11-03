'use strict';

const Repository = require('../Repository');
const { getQuery } = require('../../lib/util');

module.exports = function GestionRepository (models, Sequelize) {
  const { presupuesto, organismoFinanciador, partidaPresupuestaria, operacion, entidad } = models;
  function findAll (params = {}, t) {
    const query = getQuery(params);
    if (t) query.transaction = t;
    const Op = Sequelize.Op;
    query.attributes = [
      'id',
      'idPartidaPresupuestaria',
      'idOrganismoFinanciador',
      'idOperacion',
      'descripcion',
      'montoInicial',
      'montoOficial',
      [Sequelize.literal('COALESCE((SELECT SUM(cantidad * precio_unitario)  FROM financiera_solicitud_detalle fe WHERE fe.id_presupuesto = financiera_presupuesto.id AND _deleted_at IS NULL),0)'), 'montoEjecutado'],
      [Sequelize.literal('financiera_presupuesto.monto_oficial - COALESCE((SELECT SUM((cantidad * precio_unitario))  FROM financiera_solicitud_detalle fe WHERE fe.id_presupuesto = financiera_presupuesto.id AND _deleted_at IS NULL),0)'), 'saldo']
    ];
    query.include = [
      {
        attributes : ['id', 'codigo', 'idPartidaPadre', 'nombre', 'tipo'],
        model      : partidaPresupuestaria,
        as         : 'partidaPresupuestaria'
      },
      {
        attributes : ['id', 'sigla', 'nombre'],
        model      : organismoFinanciador,
        as         : 'organismoFinanciador'
      },
      {
        attributes : ['id', 'codigo', 'descripcion', 'idEntidad'],
        model      : operacion,
        as         : 'operacion',
        where      : {},
        include    : [
          {
            attributes : ['id', 'nombre'],
            model      : entidad,
            as         : 'entidad',
            required   : false
          }
        ]
      }
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.idEntidad) {
      query.include[2].where.idEntidad = params.idEntidad;
    }
    if (params.idPartidaPresupuestaria) {
      if (!Array.isArray(params.idPartidaPresupuestaria)) query.where.idPartidaPresupuestaria = params.idPartidaPresupuestaria;
      else query.where.idPartidaPresupuestaria = { [Op.in]: params.idPartidaPresupuestaria };
    }
    if (params.idOrganismoFinanciador) {
      query.where.idOrganismoFinanciador = params.idOrganismoFinanciador;
    }
    if (params.idOperacion) {
      query.where.idOperacion = params.idOperacion;
    }
    return presupuesto.findAndCountAll(query);
  }

  async function findOne (params = {}, t) {
    const query = getQuery(params);
    if (t) query.transaction = t;
    query.attributes = [
      'id',
      'idPartidaPresupuestaria',
      'idOrganismoFinanciador',
      'idOperacion',
      'descripcion',
      'montoInicial',
      'montoOficial',
      [Sequelize.literal('COALESCE((SELECT SUM(cantidad * precio_unitario)  FROM financiera_solicitud_detalle fe WHERE fe.id_presupuesto = financiera_presupuesto.id AND _deleted_at IS NULL),0)'), 'montoEjecutado'],
      [Sequelize.literal('financiera_presupuesto.monto_oficial - COALESCE((SELECT SUM((cantidad * precio_unitario))  FROM financiera_solicitud_detalle fe WHERE fe.id_presupuesto = financiera_presupuesto.id AND _deleted_at IS NULL),0)'), 'saldo']
    ];
    query.include = [
      {
        attributes : ['id', 'codigo', 'idPartidaPadre', 'nombre', 'tipo'],
        model      : partidaPresupuestaria,
        as         : 'partidaPresupuestaria'
      },
      {
        attributes : ['id', 'sigla', 'nombre'],
        model      : organismoFinanciador,
        as         : 'organismoFinanciador'
      },
      {
        attributes : ['id', 'codigo', 'descripcion', 'idEntidad'],
        model      : operacion,
        as         : 'operacion',
        include    : [
          {
            attributes : ['id', 'nombre'],
            model      : entidad,
            as         : 'entidad',
            required   : false
          }
        ]
      }
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    const result = await presupuesto.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }
  return {
    findAll,
    findOne,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, presupuesto, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, presupuesto, t)
  };
};
