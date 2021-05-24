'use strict';

const { getQuery } = require('../../lib/util');
const tarea = require('../../models/seguimiento/tarea');
const Repository = require('../Repository');

module.exports = function temaRepository (models, Sequelize) {
  const { tema, tarea, entidad } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);

    query.distinct = true;

    query.attributes = [
      'id',
      'titulo',
      'descripcion',
      'estado',
      'createdAt',
      'updatedAt',
      [Sequelize.literal('(SELECT COUNT(*) FROM tarea WHERE tarea.id_tema = tema.id AND finalizado = FALSE)'), 'tareasPendientes'],
      [Sequelize.literal('(SELECT COUNT(*) FROM tarea WHERE tarea.id_tema = tema.id AND finalizado = TRUE)'), 'tareasCompletadas']
    ];

    query.where = {};

    const whereEntidad = {};

    if (params.idEntidad) {
      whereEntidad.id = params.idEntidad;
    }

    if (params.entidades && !params.idEntidad) {
      whereEntidad.id = {
        [Op.in]: params.entidades
      };
    }

    if (params.exclude) {
      query.where.id = {
        [Op.notIn]: Array.isArray(params.exclude) ? params.exclude : [params.exclude]
      };
    }

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

    query.include = [
      {
        through    : { attributes: [] },
        attributes : [
          'id',
          'nombre',
          'sigla'
        ],
        model : entidad,
        as    : 'entidades',
        where : whereEntidad
      }
    ];

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
