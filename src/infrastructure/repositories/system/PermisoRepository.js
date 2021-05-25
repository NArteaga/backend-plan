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

  async function findByRoles (roles) {
    const query = {};

    query.where = {
      estado: 'ACTIVO'
    };

    query.attributes = [
      'id',
      'nombre',
      'descripcion',
      'estado'
    ];

    query.include = [
      {
        required   : true,
        through    : { attributes: [] },
        attributes : [],
        model      : rol,
        as         : 'roles',
        where      : {
          id: {
            [Op.in]: roles
          }
        }
      }
    ];

    const result = await permiso.findAndCountAll(query);
    return toJSON(result);
  }

  async function verificarPermisos (params) {
    const query = {
      attributes: ['id']
    };
    query.where = {
      nombre: {
        [Op.in]: params.permisos
      }

    };

    query.include = [
      {
        required   : true,
        through    : { attributes: [] },
        attributes : [],
        model      : rol,
        as         : 'roles',
        where      : {
          id: {
            [Op.in]: params.roles
          }
        }
      }
    ];

    const result = await permiso.findOne(query);
    return result.toJSON();
  }

  return {
    findByRoles,
    verificarPermisos,
    findAll,
    findOne,
    findById       : (id) => Repository.findById(id, permiso),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, permiso, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, permiso, t)
  };
};
