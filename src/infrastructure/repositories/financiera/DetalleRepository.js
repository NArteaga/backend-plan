'use strict';

const Repository = require('../Repository');
const { getQuery } = require('../../lib/util');

module.exports = function GestionRepository (models) {
  const { detalle, parametro } = models;
  function findAll (params = {}, t) {
    const query = getQuery(params);
    if (t) query.transaction = t;
    query.attributes = ['id', 'idEjecucion', 'idPresupuesto', 'descripcion', 'idUnidadMedida', 'cantidad', 'precioUnitario'];
    query.include = [
      {
        attributes : ['id', 'nombre'],
        model      : parametro,
        as         : 'unidadMedida'
      }
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.idPresupuesto) {
      query.where.idPresupuesto = params.idPresupuesto;
    }
    if (params.idEjecucion) {
      query.where.idEjecucion = params.idEjecucion;
    }
    return detalle.findAndCountAll(query);
  }

  async function findOne (params = {}, t) {
    const query = getQuery(params);
    if (t) query.transaction = t;
    query.attributes = ['id', 'idEjecucion', 'idPresupuesto', 'descripcion', 'idUnidadMedida', 'cantidad', 'precioUnitario'];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    const result = await detalle.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }

  async function sumEjecucion (params = {}, t) {
    let where = '';
    if (params.idPresupuesto) where += ` AND id_presupuesto = '${params.idPresupuesto}'`;
    if (params.id) where += ` AND id <> '${params.id}'`;
    const query = `
      SELECT COALESCE(
        (
          SELECT SUM(cantidad * precio_unitario)
          FROM financiera_solicitud_detalle fe
          WHERE _deleted_at IS NULL${where}
        ), 0) montoAcumulado`;
    const [results] = await detalle.options.sequelize.query(query, t);
    return results || null;
  }
  return {
    findAll,
    findOne,
    sumEjecucion,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, detalle, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, detalle, t)
  };
};
