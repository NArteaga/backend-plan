'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id        : util.pk,
    idGestion : {
      type      : DataTypes.UUID,
      allowNull : false,
      xlabel    : lang.t('fields.idGestion'),
      field     : 'id_gestion'
    },
    descripcion: {
      type   : DataTypes.TEXT,
      xlabel : lang.t('fields.descripcion'),
      field  : 'descripcion'
    },
    tipo: {
      type   : DataTypes.ENUM,
      values : ['MENSUAL', 'TRIMESTRAL', 'SEMESTRAL', 'ANUAL', 'ESPECIFICO'],
      xlabel : lang.t('fields.tipo'),
      field  : 'tipo'
    },
    fechaInicio: {
      type   : DataTypes.DATE,
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
      type   : DataTypes.DATE,
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
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Seguimiento = sequelize.define('seguimiento', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'planificacion_seguimiento'
  });

  return Seguimiento;
};
