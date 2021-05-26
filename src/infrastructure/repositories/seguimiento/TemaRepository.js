'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function temaRepository (models, Sequelize) {
  const { tema, temaEntidad, entidad, etiqueta, tarea } = models;
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
      // [Sequelize.literal('(SELECT se.id  FROM sys_entidad se INNER JOIN tema_entidad AS te ON te.id_entidad = se.id WHERE te.id_tema = tema.id)'), 'entidadesCompletas']
    ];

    query.where = {};

    const whereEntidad = {};

    if (params.idEntidad) {
      whereEntidad.idEntidad = params.idEntidad;
    }

    if (params.entidades && !params.idEntidad) {
      whereEntidad.idEntidad = {
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
        required   : true, // 1. just to make sure not making inner join
        through    : { attributes: [] },
        attributes : [
          'id',
          'nivel',
          'sigla',
          'nombre'
        ],
        model : entidad,
        as    : 'entidades'
      },
      {
        required : true,
        model    : temaEntidad,
        as       : 'temaEntidades',
        where    : whereEntidad
      }
    ];

    return tema.findAndCountAll(query);
  }

  async function findAllTareas (params = {}) {
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
      'comunicacion',
      [Sequelize.literal('(SELECT COUNT(*) FROM comentario WHERE comentario.id_tarea = tarea.id)'), 'numeroComentarios']
    ];

    query.where = {};

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

    if (params.idEntidad) {
      query.where.idEntidad = params.idEntidad;
    }

    query.include = [
      {
        model : tema,
        as    : 'tema'
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

  async function findOne (params = {}) {
    const query = {};
    query.where = {};

    const whereEntidad = {};

    if (params.id) {
      query.where.id = params.id;
    }
    if (params.entidades) {
      whereEntidad.idEntidad = {
        [Op.in]: params.entidades
      };
    }

    query.include = [
      {
        required   : true, // 1. just to make sure not making inner join
        through    : { attributes: [] },
        attributes : [
          'id',
          'nivel',
          'sigla',
          'nombre'
        ],
        model : entidad,
        as    : 'entidades'
      },
      {
        required : true,
        model    : temaEntidad,
        as       : 'temaEntidades',
        where    : whereEntidad
      }
    ];

    const result = await tema.findOne(query);
    if (result) {
      return result.toJSON();
    }
    return null;
  }

  return {
    findAllTareas,
    findAll,
    findOne,
    findById       : id => Repository.findById(id, tema),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, tema, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, tema, t)
  };
};
