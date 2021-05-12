'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function tareaRepository (models, Sequelize) {
  const { tarea, categoriaTarea, categoria } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idTema',
      'palabrasClave',
      'titulo',
      'fechaFinalizacion',
      'finalizado',
      [Sequelize.literal('(SELECT COUNT(*) FROM comentario WHERE comentario.id_tarea = tarea.id)'), 'numeroComentarios']
    ];
    query.where = {};
    query.include = [];

    if (params.idTema) {
      query.where.idTema = params.idTema;
    }

    if (params.finalizado) {
      query.where.finalizado = params.finalizado;
    }

    if (params.fechaIni || params.fechaFin) {
      query.where.fechaFinalizacion = {
        [Op.gt] : params.fechaIni || new Date('2000', '01', '01'),
        [Op.lt] : params.fechaFin || new Date()
      };
    }

    if (params.titulo) {
      query.where.titulo = {
        [Op.iLike]: `%${params.titulo}%`
      };
    }

    if (params.palabrasClave) {
      query.where.palabrasClave = {
        [Op.iLike]: `%${params.palabrasClave}%`
      };
    }

    const categoriaWhere = {};
    if (params.idCategoria) {
      if (Array.isArray(params.idCategoria)) {
        categoriaWhere.idCategoria = {
          [Op.in]: params.idCategoria
        };
      } else {
        categoriaWhere.idCategoria = params.idCategoria;
      }
    }

    query.include = [
      {
        through : { attributes: [] },
        model   : categoria,
        as      : 'categorias'
      }
    ];

    return tarea.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, tarea),
    findById       : id => Repository.findById(id, tarea),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, tarea, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, tarea, t)
  };
};
