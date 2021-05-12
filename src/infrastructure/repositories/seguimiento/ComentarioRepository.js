'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function comentarioRepository (models, Sequelize) {
  const { comentario, usuario, tarea, tema, reunion } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idUsuario',
      'idTarea',
      'idTema',
      'idReunion',
      'descripcion',
      'rutaAdjunto',
      'createdAt'
    ];
    query.where = {};
    query.include = [
      {
        attributes: [
          'id',
          'usuario',
          'nombres',
          'primerApellido',
          'segundoApellido'
        ],
        model : usuario,
        as    : 'usuario'
      },
      {
        attributes: [
          'id',
          'idTema',
          'titulo',
          'palabrasClave',
          'fechaFinalizacion',
          'finalizado'
        ],
        model : tarea,
        as    : 'tarea'
      },
      {
        attributes: [
          'id',
          'idEntidad',
          'titulo',
          'descripcion',
          'estado'
        ],
        model : tema,
        as    : 'tema'
      },
      {
        attributes: [
          'id',
          'titulo',
          'descripcion',
          'estado'
        ],
        model : reunion,
        as    : 'reunion'
      }
    ];

    if (params.idTarea) {
      query.where.idTarea = params.idTarea;
    }

    return comentario.findAndCountAll(query);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, comentario),
    findById       : id => Repository.findById(id, comentario),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, comentario, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, comentario, t)
  };
};
