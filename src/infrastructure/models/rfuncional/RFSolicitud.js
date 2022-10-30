'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id        : util.pk,
    nombre: {
      type   : DataTypes.STRING(500),
      xlabel : lang.t('fields.nombre'),
      field  : 'nombre'
    },
    fechaSolicitud: {
      type      : DataTypes.DATEONLY,
      allowNull : false,
      xlabel    : lang.t('fields.fechaSolicitud'),
      field     : 'fecha_solicitud',
      get       : function () {
        if (this.getDataValue('fechaSolicitud')) {
          return moment(this.getDataValue('fechaSolicitud')).format('DD-MM-YYYY');
        }
        return null;
      }
    },
    departamento: {
      type      : DataTypes.STRING(200),
      allowNull : false,
      xlabel    : lang.t('fields.departamento'),
      field     : 'departamento'
    },
    latitud: {
      type   : DataTypes.DOUBLE,
      xlabel : lang.t('fields.latitud'),
      field  : 'latitud'
    },
    longitud: {
      type   : DataTypes.DOUBLE,
      xlabel : lang.t('fields.longitud'),
      field  : 'longitud'
    },
    direccion: {
      type      : DataTypes.TEXT,
      allowNull : false,
      xlabel    : lang.t('fields.direccion'),
      field     : 'direccion'
    },
    servicios: {
      type      : DataTypes.TEXT,
      allowNull : false,
      xlabel    : lang.t('fields.servicios'),
      field     : 'servicios'
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['INICIO', 'PENDIENTE', 'CERTIFICADO', 'CANCELADO', 'ANULADO', 'RECHAZADO', 'VERIFICADO'],
      defaultValue : 'INICIO',
      xlabel       : lang.t('fields.estado'),
      field        : 'estado'
    },
    citeSaj: {
      type      : DataTypes.STRING(200),
      allowNull : false,
      xlabel    : lang.t('fields.citeSaj'),
      field     : 'cite_saj'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const RFSolicitud = sequelize.define('rfuncional_solicitud', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'rfuncional_solicitud'
  });

  return RFSolicitud;
};
