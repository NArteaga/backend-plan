'use strict';

const Repository = require('../Repository');
const { getQuery, toJSON } = require('../../lib/util');

module.exports = function responsableRepository (models, Sequelize) {
  const { operacion, estructura, entidad, cronograma, formulacion } = models;
  const Op = Sequelize.Op;

  async function calificaciones (params) {
    const query = `
    select tmp3.calificacion as calificacion, pe.nombre as tipo, se.nombre as entidad
    from (
      select sum(calificacion * (po.ponderacion / 100.00)) calificacion, po.id
      from (
        select sum(calificacion * (po.ponderacion / 100.00)) calificacion, po.id_operacion_padre id
        from (
          select sum(cast(tmp.ejecutado as float(12)) / po.meta * po.ponderacion) calificacion, po.id_operacion_padre id 
          from 
          (
            select id_operacion id, sum(coalesce (pc.cantidad_cumplida, 0)) ejecutado
            from planificacion_cronograma pc
            group by id_operacion
          ) tmp
          inner join planificacion_operacion po on (tmp.id = po.id)
          group by po.id_operacion_padre
        ) tmp1 inner join planificacion_operacion po on (tmp1.id = po.id)
        group by po.id_operacion_padre
      ) tmp2 inner join planificacion_operacion po on (tmp2.id = po.id)
      group by po.id
    ) tmp3 inner join planificacion_operacion po on (tmp3.id = po.id)
    inner join planificacion_estructura pe on (po.id_estructura = pe.id)
    inner join sys_entidad se on (po.id_entidad = se.id)
    where pe.id_gestion = '${params.idGestion}'
    order by se.nombre`;
    const [results] = await operacion.options.sequelize.query(query);
    return results || null;
  }

  async function findIn (params = {}) {
    const query = getQuery(params);
    query.where = {};
    query.attributes = [
      'id',
      'idFormulacion',
      'idEstructura',
      'idOperacionPadre',
      'codigo',
      'descripcion',
      'ponderacion',
      'tipoMeta',
      'meta',
      'fechaInicio',
      'fechaFin',
      'mediosVerificacion',
      'tareas',
      'bienServicioDemandado',
      'activo'
    ];
    query.include = [
      {
        required   : false,
        model      : formulacion,
        as         : 'formulacion',
        attributes : ['id', 'idGestion']
      },
      {
        attributes : ['id', 'cantidadProgramada', 'cantidadCumplida', 'mes', 'meta', 'observacion', 'fechaRegistroCumplimiento'],
        model      : cronograma,
        as         : 'cronograma'
      },
      {
        attributes : ['id', 'idGestion', 'nombre', 'nivel', 'sigla', 'editable', 'codigo', 'cronograma', 'codigoManual', 'areaRequerida'],
        model      : estructura,
        as         : 'estructura'
      },
      {
        attributes : ['id', 'nombre'],
        model      : entidad,
        as         : 'entidad',
        required   : false
      }
    ];
    query.where = {
      [Op.and]: [
        {
          idEstructura: {
            [Op.in]: params.idsEstructura
          }
        },
        {
          [Op.or]: [
            {
              idEntidad: params.idEntidad
            },
            {
              id: {
                [Op.in]: params.ids
              }
            }
          ]
        }
      ]
    };
    const result = await operacion.findAndCountAll(query);
    return toJSON(result);
  }
  async function findAll (params = {}) {
    const query = getQuery(params);
    query.where = {};
    query.attributes = [
      'id',
      'idFormulacion',
      'idEstructura',
      'idOperacionPadre',
      'codigo',
      'descripcion',
      'ponderacion',
      'tipoMeta',
      'meta',
      'fechaInicio',
      'fechaFin',
      'mediosVerificacion',
      'tareas',
      'bienServicioDemandado',
      'activo',
      'estado'
    ];
    query.include = [
      {
        required   : false,
        model      : formulacion,
        as         : 'formulacion',
        attributes : ['id', 'idGestion']
      },
      {
        attributes : ['id', 'cantidadProgramada', 'cantidadCumplida', 'mes', 'meta', 'observacion', 'fechaRegistroCumplimiento'],
        model      : cronograma,
        as         : 'cronograma'
      },
      {
        attributes : ['id', 'idGestion', 'nombre', 'nivel', 'sigla', 'editable', 'codigo', 'cronograma', 'codigoManual', 'areaRequerida'],
        model      : estructura,
        as         : 'estructura'
      },
      {
        attributes : ['id', 'nombre'],
        model      : entidad,
        as         : 'entidad',
        required   : false
      }
    ];
    if (params.idGestion) {
      query.include[0].where.idGestion = params.idGestion;
    }
    if (params.idFormulacion) {
      query.where.idFormulacion = params.idFormulacion;
    }
    if (params.idEstructura) {
      console.log(params.idEstructura);
      query.where.idEstructura = {
        [Op.in]: params.idEstructura.split(',')
      };
    }
    if (params.idOperacionPadre) {
      query.where.idOperacionPadre = params.idOperacionPadre;
    }
    if (params.idEntidad) {
      query.where.idEntidad = params.idEntidad;
    }
    if (params.codigo) {
      query.where.codigo = {
        [Op.iLike]: `%${params.codigo}%`
      };
    }
    if (params.mediosVerificacion) {
      query.where.mediosVerificacion = {
        [Op.iLike]: `%${params.mediosVerificacion}%`
      };
    }
    if (params.meta) {
      query.where.meta = {
        [Op.iLike]: `%${params.meta}%`
      };
    }
    if (params.tareas) {
      query.where.tareas = {
        [Op.iLike]: `%${params.tareas}%`
      };
    }
    if (params.descripcion) {
      query.where.descripcion = params.descripcion;
    }
    const result = await operacion.findAndCountAll(query);
    return toJSON(result);
  }
  async function findOne (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'idFormulacion',
      'idEstructura',
      'idOperacionPadre',
      'idEntidad',
      'codigo',
      'descripcion',
      'ponderacion',
      'tipoMeta',
      'meta',
      'fechaInicio',
      'fechaFin',
      'mediosVerificacion',
      'tareas',
      'bienServicioDemandado',
      'nroHijas',
      'nroHijasDesAsociadas',
      'activo',
      'estado',
      'createdAt'
    ];
    query.include = [
      {
        required   : false,
        model      : formulacion,
        as         : 'formulacion',
        attributes : ['id', 'idGestion']
      },
      {
        attributes : ['id', 'cantidadProgramada', 'cantidadCumplida', 'mes', 'meta', 'observacion', 'fechaRegistroCumplimiento'],
        model      : cronograma,
        as         : 'cronograma'
      },
      {
        attributes : ['id', 'idGestion', 'nombre', 'nivel', 'sigla', 'editable', 'codigo', 'cronograma', 'codigoManual', 'areaRequerida'],
        model      : estructura,
        as         : 'estructura'
      },
      {
        attributes : ['id', 'nombre'],
        model      : entidad,
        as         : 'entidad',
        required   : false
      }
    ];
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    const result = await operacion.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }
  function recuperarHijos (idPadre) {
    const query = {};
    query.attributes = [
      'id',
      'idFormulacion',
      'idEstructura',
      'idOperacionPadre',
      'codigo',
      'descripcion',
      'ponderacion',
      'tipoMeta',
      'meta',
      'fechaInicio',
      'fechaFin',
      'mediosVerificacion',
      'tareas',
      'bienServicioDemandado',
      'activo'
    ];
    query.where = {};
    query.where.id = idPadre;
    return operacion.findAndCountAll(query);
  }
  function sumarPonderacionPorEstructura (params = {}) {
    const where = {};
    if (params.idOperacionPadre) {
      where.idOperacionPadre = params.idOperacionPadre;
    }
    if (params.idEntidad) {
      where.idEntidad = params.idEntidad;
    }
    if (params.idEstructura) {
      where.idEstructura = params.idEstructura;
    }
    if (params.idOperacion) {
      where.id = {
        [Op.notIn]: Array.isArray(params.idOperacion) ? params.idOperacion : [params.idOperacion]
      };
    }
    return operacion.sum('ponderacion', { where: where });
  }
  function countOperaciones (params = {}) {
    const query = getQuery(params);
    query.where = {};
    if (params.idEstructura) {
      query.where.idEstructura = params.idEstructura;
    }
    if (params.idEntidad) {
      query.where.idEntidad = params.idEntidad;
    }
    if (params.idOperacionPadre) {
      query.where.idOperacionPadre = params.idOperacionPadre;
    }
    return operacion.count(query);
  }
  return {
    findIn,
    findOne,
    findAll,
    countOperaciones,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, operacion, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, operacion, t),
    recuperarHijos,
    calificaciones,
    sumarPonderacionPorEstructura
  };
};
