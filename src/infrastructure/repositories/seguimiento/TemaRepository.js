'use strict';

const { getQuery } = require('../../lib/util');
const tarea = require('../../models/seguimiento/tarea');
const Repository = require('../Repository');

module.exports = function temaRepository (models, Sequelize) {
  const { tema, tarea } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);

    query.attributes = [
      'id',
      'idEntidad',
      'titulo',
      'descripcion',
      'estado'
    ];

    query.where = {};
    query.include = [];

    if (params.search) {
      query.where = {
        ...query.where,
        ...{
          [Op.or]: [
            {
              titulo: {
                [Op.iLike]: `%${params.search}%`
              }
            },
            {
              descripcion: {
                [Op.iLike]: `%${params.search}%`
              }
            }
          ]
        }
      };
    }
    console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
    console.log(query.where[Op.or]);
    console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
    if (params.titulo) {
      query.where.titulo = {
        [Op.iLike]: `%${params.titulo}%`
      };
    }

    if (params.descripcion) {
      query.where.descripcion = {
        [Op.iLike]: `%${params.descripcion}%`
      };
    }

    return tema.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, tema),
    findById       : id => Repository.findById(id, tema),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, tema, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, tema, t)
  };
};
