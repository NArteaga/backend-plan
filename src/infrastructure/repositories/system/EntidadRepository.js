'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function entidadRepository (models, Sequelize) {
  const { entidad } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'sigla',
      'nombre',
      'idEntidad',
      'nivel',
      'direccion',
      'telefono',
      'urlLogo',
      'estado',
      [Sequelize.literal('(SELECT TRUE)'), 'lazy']
    ];
    query.where = {};

    if (params.search) {
      query.where = {
        ...query.where,
        ...{
          [Op.or]: [
            {
              nombre: {
                [Op.iLike]: `%${params.search}%`
              }
            },
            {
              sigla: {
                [Op.iLike]: `%${params.search}%`
              }
            }
          ]
        }
      };
    }

    if (params.nivel) {
      query.where.nivel = params.nivel;
    }

    if (params.idEntidad) {
      query.where.id = params.idEntidad;
    }

    if (params.entidades && !params.idEntidad) {
      query.where.id = {
        [Op.in]: params.entidades
      };
    }

    query.include = [];

    return entidad.findAndCountAll(query);
  }

  async function findDependientes (entidades, nivel) {
    const query = {
      attributes: [
        'id',
        'sigla',
        'nombre',
        'idEntidad',
        'nivel',
        'direccion',
        'telefono',
        'urlLogo',
        'estado'
      ],
      where: {
        idEntidad: {
          [Op.in]: entidades
        },
        nivel
      }
    };
    const result = await entidad.findAndCountAll(query);
    return toJSON(result);
  }

  return {
    findDependientes,
    findAll,
    findOne        : (params) => Repository.findOne(params, entidad),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, entidad, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, entidad, t)
  };
};
