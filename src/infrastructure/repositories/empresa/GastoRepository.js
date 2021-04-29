'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function redesSocialesRepository (models, Sequelize) {
  const { gasto, parametro } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    const date  = new Date();
    const mes = date.getMonth() + 1;

    query.where = {
      [Op.and]: Sequelize.literal(`EXTRACT(MONTH FROM gasto._created_at) = ${mes}`)
    };

    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }

    if (params.descripcion) {
      query.where.descripcion = {
        [Op.iLike]: `%${params.descripcion}%`
      };
    }

    if (params.categoria) {
      query.where.idCategoria = params.categoria;
    }

    if (params.idSucursal) {
      query.where.idSucursal = params.idSucursal;
    }

    query.include = [
      {
        model : parametro,
        as    : 'categoria'
      }
    ];

    const result = await gasto.findAndCountAll(query);
    return toJSON(result);
  }

  async function reporte (params) {
    const date  = new Date();
    const mes = date.getMonth() + 1;

    let query = `
    SELECT G.id_categoria, p.nombre, p.otros, sum(G.monto) as monto_total, sum(G.cantidad) as cantidad_total
    FROM GASTO G
    INNER JOIN PARAMETRO P on p.id = G.id_categoria
    WHERE EXTRACT(MONTH FROM G._created_at) = ${mes}
    GROUP BY g.id_categoria, p.NOMBRE, p.otros;`;

    if (params.idSucursal) {
      query = `
        SELECT G.id_categoria, p.nombre, p.otros, sum(G.monto) as monto_total, sum(G.cantidad) as cantidad_total
        FROM GASTO G
        INNER JOIN PARAMETRO P on p.id = G.id_categoria 
        WHERE G.id_sucursal = ${params.idSucursal} AND EXTRACT(MONTH FROM G._created_at) = ${mes}
        GROUP BY g.id_categoria, p.NOMBRE, p.otros;`;
    }

    const [results, metadata] = await gasto.options.sequelize.query(query);
    return results;
  }

  return {
    reporte,
    findAll,
    findOne        : (params) => Repository.findOne(params, gasto),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, gasto, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, gasto, t)
  };
};
