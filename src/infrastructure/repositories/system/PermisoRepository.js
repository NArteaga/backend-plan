'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function modulossRepository (models, Sequelize) {
  const { permisos, modulos, rol } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = {};
    query.where = {};
    // query.attributes = [];
    query.include = [
      {
        model : rol,
        as    : 'rol'
      },
      {
        model : modulos,
        as    : 'modulo'
      }
    ];

    const result = await permisos.findAndCountAll(query);
    return toJSON(result);
  }

  async function findOne (params) {
    const query = {};
    query.where = {};
    query.attributes =  [
      'id',
      'nombre',
      'descripcion'
    ];
    if (params.idRol) {
      query.where.id = params.idRol;
    }

    query.include = [
      {
        attributes: [
          'id',
          'idModulo',
          'idRol',
          'access',
          'create',
          'read',
          'update',
          'delete',
          'csv'
        ],
        model   : permisos,
        as      : 'permisos',
        include : [
          {
            attributes : [],
            model      : modulos,
            as         : 'modulo',
            where      : { id: params.idModulo }
          }
        ]
      }
    ];
    const result = await rol.findAndCountAll(query);
    return toJSON(result);
  }

  async function verificarPermisos (params) {
    const query = {
      attributes: ['id']
    };
    query.where = params.permiso;

    query.include = [
      {
        model : rol,
        as    : 'rol',
        where : { id: params.idRol }
      },
      {
        model : modulos,
        as    : 'modulo',
        where : { ruta: params.ruta }
      }
    ];

    const result = await permisos.findOne(query);
    return result.toJSON();
  }

  return {
    verificarPermisos,
    findAll,
    findOne,
    findById       : (id) => Repository.findById(id, permisos),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, permisos, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, permisos, t)
  };
};
