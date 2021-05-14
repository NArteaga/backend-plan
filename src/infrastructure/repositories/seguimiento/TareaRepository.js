'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function tareaRepository (models, Sequelize) {
  const { tarea, etiqueta, tema } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idTema',
      'titulo',
      'fechaFinalizacion',
      'finalizado',
      'createdAt',
      'updatedAt',
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

    const etiquetaWhere = {};
    let requiredTag = false;
    if (params.idEtiqueta) {
      requiredTag = true;
      if (Array.isArray(params.idEtiqueta)) {
        etiquetaWhere.id = {
          [Op.in]: params.idEtiqueta
        };
      } else {
        etiquetaWhere.id = params.idEtiqueta;
      }
    }

    const whereTema = {};
    if (params.entidades) {
      whereTema.idEntidad = {
        [Op.in]: params.entidades
      };
    }

    query.include = [
      {
        model : tema,
        as    : 'tema',
        where : whereTema
      },
      {
        required : requiredTag,
        through  : { attributes: [] },
        model    : etiqueta,
        as       : 'etiquetas',
        where    : etiquetaWhere
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
