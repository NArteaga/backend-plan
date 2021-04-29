'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function modulossRepository (models, Sequelize) {
  const { modulos, rol, permisos } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'url',
      'ruta',
      'label',
      'icono',
      'orden',
      'estado',
      'visible'
    ];
    query.where = {};
    query.include = [];

    if (params.estado) {
      query.where.estado = params.estado;
    }

    if (params.visible) {
      query.where.visible = params.visible;
    }

    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }

    if (params.descripcion) {
      query.where.nombre = {
        [Op.iLike]: `%${params.descripcion}%`
      };
    }

    return modulos.findAndCountAll(query);
  }

  function findOne (params = {}) {
    const query = getQuery(params);
    query.where = params;
    query.include = [];
    return modulos.findOne(query);
  }

  async function findByRol (idRol) {
    const query = {};
    query.where = {
      idModulo : null,
      estado   : 'ACTIVO',
      visible  : true
    };

    query.attributes = [
      'id',
      'url',
      'ruta',
      'label',
      'icono',
      'orden',
      'estado',
      'visible'
    ];
    query.order = [['orden', 'ASC']];
    query.include = [
      {
        required   : false,
        attributes : [
          'id',
          'url',
          'ruta',
          'label',
          'icono',
          'orden',
          'estado',
          'visible'
        ],
        model   : modulos,
        as      : 'subModulos',
        where   : { estado: 'ACTIVO', visible: true },
        include : [
          {
            attributes: [
              'access',
              'create',
              'read',
              'update',
              'delete',
              'csv'
            ],
            model   : permisos,
            include : [
              {
                attributes : [],
                model      : rol,
                as         : 'rol',
                where      : { id: idRol }
              }
            ]
          }
        ]
      },
      {
        attributes: [
          'access',
          'create',
          'read',
          'update',
          'delete',
          'csv'
        ],
        model   : permisos,
        include : [
          {
            attributes : [],
            model      : rol,
            as         : 'rol',
            where      : { id: idRol }
          }
        ]
      }
    ];

    const result = await modulos.findAndCountAll(query);
    return toJSON(result);
  }

  return {
    findAll,
    findByRol,
    findOne,
    findById       : (id) => Repository.findById(id, modulos),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, modulos, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, modulos, t)
  };
};
