'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function modulossRepository (models, Sequelize) {
  const { permiso, modulos, rol } = models;
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

    const result = await permiso.findAndCountAll(query);
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
        model   : permiso,
        as      : 'permiso',
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

  async function verificarpermiso (params) {
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

    const result = await permiso.findOne(query);
    return result.toJSON();
  }

  return {
    verificarpermiso,
    findAll,
    findOne,
    findById       : (id) => Repository.findById(id, permiso),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, permiso, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, permiso, t)
  };
};
