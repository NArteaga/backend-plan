'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id      : util.pk,
    gestion : {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.gestion'),
      field     : 'gestion'
    },
    descripcion: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.descripcion'),
      field     : 'descripcion'
    },
    ejecutando: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.ejecutando'),
      defaultValue : false,
      field        : 'ejecutando',
      allowNull    : true
    },
    etapa: {
      type      : DataTypes.ENUM,
      values    : ['FORMULACION', 'SEGUIMIENTO', 'EJECUCION'],
      xlabel    : lang.t('fields.etapa'),
      field     : 'etapa',
      allowNull : true
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['ACTIVO', 'INACTIVO'],
      defaultValue : 'INACTIVO',
      xlabel       : lang.t('fields.estado'),
      field        : 'estado'
    },
    fechaInicio: {
      type      : DataTypes.DATEONLY,
      allowNull : true,
      xlabel    : lang.t('fields.fechaInicio'),
      field     : 'fecha_inicio',
      get       : function () {
        if (this.getDataValue('fechaInicio')) {
          return moment(this.getDataValue('fechaInicio')).format('DD-MM-YYYY');
        }
        return null;
      },
      set: function (value) {
        const fechaParseada = moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
        this.setDataValue('fechaInicio', fechaParseada);
      }
    },
    fechaFin: {
      type      : DataTypes.DATEONLY,
      allowNull : true,
      xlabel    : lang.t('fields.fechaFin'),
      field     : 'fecha_fin',
      get       : function () {
        if (this.getDataValue('fechaFin')) {
          return moment(this.getDataValue('fechaFin')).format('DD-MM-YYYY');
        }
        return null;
      },
      set: function (value) {
        const fechaParseada = moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
        this.setDataValue('fechaFin', fechaParseada);
      }
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Gestion = sequelize.define('gestion', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'planificacion_gestion'
  });

  return Gestion;
};
