'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function ordenRepository (models, Sequelize) {
  const { orden } = models;

  async function ganancias (params = {}) {
    const date  = new Date();
    const mes = date.getMonth() + 1;

    let query = `
      SELECT SUM(total) as total
      FROM ORDEN
      WHERE EXTRACT(MONTH FROM _created_at) = ${mes}
      GROUP BY EXTRACT(MONTH FROM _created_at);
    `;

    if (params.idSucursal) {
      query = `
        SELECT SUM(total) as total
        FROM ORDEN
        WHERE EXTRACT(MONTH FROM _created_at) = ${mes} AND id_sucursal = ${params.idSucursal}
        GROUP BY EXTRACT(MONTH FROM _created_at);
      `;
    }
    const [results, metadata] = await orden.options.sequelize.query(query);
    return results;
  }

  async function ingresos (params) {
    let where = '';
    let query = '';

    if (params.mes) {
      where = `WHERE EXTRACT(MONTH FROM _created_at) = ${params.mes} ${params.idSucursal ? ` AND ID_SUCURSAL = ${params.idSucursal}` : ''}`;
      query = `
        SELECT  DATE(_created_at) as fecha, SUM(total) as total
        FROM ORDEN
        ${where}
        GROUP BY DATE(_created_at);
      `;
    }

    if (params.anio) {
      where = `WHERE EXTRACT(YEAR FROM _created_at) = ${params.anio} ${params.idSucursal ? ` AND ID_SUCURSAL = ${params.idSucursal}` : ''}`;
      query = `
        SELECT EXTRACT(MONTH FROM _created_at) as mes, SUM(total) as total
        FROM ORDEN
        ${where}
        GROUP BY EXTRACT(MONTH FROM _created_at);
      `;
    }

    if (params.fechaInicio || params.fechaFin) {
      const date  = new Date();
      const fechaFin = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      where = `WHERE DATE(_created_at) >= '${params.fechaInicio || new Date('2000', '01', '01')}' AND DATE(_created_at) <= '${params.fechaFin || fechaFin}' ${params.idSucursal ? ` AND ID_SUCURSAL = ${params.idSucursal}` : ''}`;
      query = `
        SELECT DATE(_created_at) as dia, SUM(total) as total
        FROM ORDEN
        ${where}
        GROUP BY DATE(_created_at);
      `;
    }
    const [results, metadata] = await orden.options.sequelize.query(query);
    return results;
  }

  async function productos (params) {
    let where = '';
    let query = '';
    if (params.mes) {
      where = `WHERE EXTRACT(MONTH FROM op._created_at) = ${params.mes} ${params.idSucursal ? ` AND o2.ID_SUCURSAL = ${params.idSucursal}` : ''}`;
      query = `
      SELECT p.nombre, COALESCE(c.total, 0) as cantidad_total, COALESCE(c.total_precio, 0) as precio_total
      FROM PRODUCTO P
      LEFT JOIN (
        SELECT ID_PRODUCTO, SUM(op.cantidad) as total, SUM(PRECIO_UNIT) as total_precio
        FROM ORDEN_PRODUCTO OP
        INNER JOIN ORDEN O2 on op.ID_ORDEN = o2.ID 
        ${where}
        GROUP BY ID_PRODUCTO
      ) C on C.id_producto = P.id;`;
    }

    if (params.anio) {
      where = `WHERE EXTRACT(YEAR FROM OP._created_at) = ${params.anio} ${params.idSucursal ? ` AND o2.ID_SUCURSAL = ${params.idSucursal}` : ''}`;
      query = `
      SELECT p.nombre, COALESCE(c.total, 0) as cantidad_total, COALESCE(c.total_precio, 0) as precio_total
      FROM PRODUCTO P
      LEFT JOIN (
        SELECT ID_PRODUCTO, SUM(op.cantidad) as total, SUM(PRECIO_UNIT) as total_precio
        FROM ORDEN_PRODUCTO OP
        INNER JOIN ORDEN O2 on op.ID_ORDEN = o2.ID 
        ${where}
        GROUP BY ID_PRODUCTO
      ) C on C.id_producto = P.id`;
    }

    if (params.fechaInicio || params.fechaFin) {
      const date  = new Date();
      const fechaFin = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      where = `WHERE DATE(OP._created_at) >= '${params.fechaInicio || new Date('2000', '01', '01')}' AND DATE(op._created_at) <= '${params.fechaFin || fechaFin}' ${params.idSucursal ? ` AND o2.ID_SUCURSAL = ${params.idSucursal}` : ''}`;
      query = `
      SELECT p.nombre, COALESCE(c.total, 0) as cantidad_total, COALESCE(c.total_precio, 0) as precio_total
      FROM PRODUCTO P
      LEFT JOIN (
        SELECT ID_PRODUCTO, SUM(op.cantidad) as total, SUM(PRECIO_UNIT) as total_precio
        FROM ORDEN_PRODUCTO OP
        INNER JOIN ORDEN O2 on op.ID_ORDEN = o2.ID 
        ${where}
        GROUP BY ID_PRODUCTO
      ) C on C.id_producto = P.id
      `;
    }
    const [results, metadata] = await orden.options.sequelize.query(query);
    return results;
  }

  return {
    productos,
    ingresos,
    ganancias,
    findOne        : (params) => Repository.findOne(params, orden),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, orden, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, orden, t)
  };
};
