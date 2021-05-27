'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function tareaRepository (models, Sequelize) {
  const { tarea, etiqueta, tema, entidad } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.subQuery = false;
    query.distinct = true;

    query.attributes = [
      'id',
      'idEntidad',
      'idTema',
      'titulo',
      'fechaFinalizacion',
      'finalizado',
      'createdAt',
      'updatedAt',
      'deletedAt',
      'comunicacion',
      [Sequelize.literal('(SELECT COUNT(*) FROM comentario WHERE comentario.id_tarea = tarea.id)'), 'numeroComentarios']
    ];

    query.where = {};

    if (params.eliminados) {
      query.paranoid = false;
      query.where.deletedAt = {
        [Op.not]: null
      };
    }

    query.include = [];

    if (params.exclude) {
      query.where.id = {
        [Op.notIn]: Array.isArray(params.exclude) ? params.exclude : [params.exclude]
      };
    }

    if (params.idTema) {
      query.where.idTema = params.idTema;
    }

    if (params.finalizado) {
      query.where.finalizado = params.finalizado;
    }

    if (params.comunicacion) {
      query.where.comunicacion = params.comunicacion;
    }

    if (params.fechaIni || params.fechaFin) {
      query.where.fechaFinalizacion = {
        [Op.gt]  : params.fechaIni || new Date('2000', '01', '01'),
        [Op.lte] : params.fechaFin || new Date()
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

    let whereTema = {};
    if (params.idEntidadTema) {
      whereTema.id = params.idEntidadTema;
    }

    if (params.entidadesTema && !params.idEntidadTema) {
      whereTema.id = {
        [Op.in]: params.entidades
      };
    }

    if (params.tema) {
      whereTema = {
        ...whereTema,
        [Op.or]: [
          {
            titulo: {
              [Op.iLike]: `%${params.tema}%`
            }
          },
          {
            descripcion: {
              [Op.iLike]: `%${params.tema}%`
            }
          }
        ]

      };
    }

    if (params.idEntidad) {
      query.where.idEntidad = params.idEntidad;
    }

    if (params.entidades && !params.idEntidad) {
      query.where.idEntidad = {
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
        model : entidad,
        as    : 'entidad'
      },
      {
        required : requiredTag,
        through  : { attributes: [] },
        model    : etiqueta,
        as       : 'etiquetas',
        where    : etiquetaWhere
      }
    ];

    const result = await tarea.findAndCountAll(query);
    return toJSON(result);
  }

  async function findByEntidad (params = {}) {
    const query = {};
    query.where = {};

    if (params.id) {
      query.where.id = params.id;
    }

    if (params.entidades) {
      query.where.idEntidad = {
        [Op.in]: params.entidades
      };
    }

    const result = await tarea.findOne(query);
    if (result) {
      return result.toJSON();
    }
    return null;
  }

  return {
    findByEntidad,
    findAll,
    findOne        : params => Repository.findOne(params, tarea),
    findById       : id => Repository.findById(id, tarea),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, tarea, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, tarea, t)
  };
};
