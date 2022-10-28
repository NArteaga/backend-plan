'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id            : util.pk,
    idFormulacion : {
      type      : DataTypes.UUID,
      allowNull : true,
      xlabel    : lang.t('fields.idFormulacion'),
      field     : 'id_formulacion'
    },
    idEntidad: {
      allowNull : true,
      type      : DataTypes.UUID,
      xlabel    : lang.t('fields.idEntidad'),
      field     : 'id_entidad'
    },
    idEstructura: {
      allowNull : true,
      type      : DataTypes.UUID,
      xlabel    : lang.t('fields.idEstructura'),
      field     : 'id_estructura'
    },
    idOperacionPadre: {
      allowNull : true,
      type      : DataTypes.UUID,
      xlabel    : lang.t('fields.idOperacionPadre'),
      field     : 'id_operacion_padre'
    },
    codigo: {
      type   : DataTypes.STRING(200),
      xlabel : lang.t('fields.codigo'),
      field  : 'codigo'
    },
    descripcion: {
      type   : DataTypes.TEXT,
      xlabel : lang.t('fields.descripcion'),
      field  : 'descripcion'
    },
    ponderacion: {
      type   : DataTypes.INTEGER,
      xlabel : lang.t('fields.ponderacion'),
      field  : 'ponderacion'
    },
    nroHijas: {
      allowNull    : true,
      type         : DataTypes.INTEGER,
      xlabel       : lang.t('fields.nroHijas'),
      field        : 'nro_hijas',
      defaultValue : 0
    },
    nroHijasDesAsociadas: {
      allowNull : true,
      type      : DataTypes.JSONB,
      xlabel    : lang.t('fields.nroHijasDesAsociadas'),
      field     : 'nro_hijas_desasociadas'
    },
    tipoMeta: {
      type   : DataTypes.ENUM,
      values : ['NUMERICO', 'PORCENTUAL'],
      xlabel : lang.t('fields.tipoMeta'),
      field  : 'tipo_meta'
    },
    meta: {
      type   : DataTypes.INTEGER,
      xlabel : lang.t('fields.meta'),
      field  : 'meta'
    },
    fechaInicio: {
      type   : DataTypes.DATEONLY,
      xlabel : lang.t('fields.fechaInicio'),
      field  : 'fecha_inicio',
      set    : function (value) {
        const fechaParseada = moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
        this.setDataValue('fechaInicio', fechaParseada);
      },
      get: function () {
        if (this.getDataValue('fechaInicio')) {
          return moment(this.getDataValue('fechaInicio')).format('DD/MM/YYYY');
        }
        return null;
      }
    },
    fechaFin: {
      type   : DataTypes.DATEONLY,
      xlabel : lang.t('fields.fechaFin'),
      field  : 'fecha_fin',
      set    : function (value) {
        const fechaParseada = moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
        this.setDataValue('fechaFin', fechaParseada);
      },
      get: function () {
        if (this.getDataValue('fechaFin')) {
          return moment(this.getDataValue('fechaFin')).format('DD/MM/YYYY');
        }
        return null;
      }
    },
    mediosVerificacion: {
      allowNull    : true,
      type         : DataTypes.JSONB,
      defaultValue : [],
      xlabel       : lang.t('fields.mediosVerificacion'),
      field        : 'medios_verificacion'
    },
    bienServicioDemandado: {
      allowNull    : true,
      type         : DataTypes.JSONB,
      defaultValue : [],
      xlabel       : lang.t('fields.bienServicioDemandado'),
      field        : 'bien_servicio_demandado'
    },
    tareas: {
      allowNull    : true,
      type         : DataTypes.JSONB,
      defaultValue : [],
      xlabel       : lang.t('fields.tareas'),
      field        : 'tareas'
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['REGISTRADO', 'MODIFICADO', 'ELIMINADO'],
      defaultValue : 'REGISTRADO',
      xlabel       : lang.t('fields.estado'),
      field        : 'estado'
    },
    activo: {
      type         : DataTypes.BOOLEAN,
      defaultValue : true,
      xlabel       : lang.t('fields.activo'),
      field        : 'activo'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Operacion = sequelize.define('operacion', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'planificacion_operacion'
  });

  return Operacion;
};
