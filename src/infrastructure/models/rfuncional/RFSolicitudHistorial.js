'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id         : util.pk,
    justificacion: {
      type      : DataTypes.TEXT,
      allowNull : false,
      xlabel    : lang.t('fields.justificacion'),
      field     : 'justificacion'
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['INICIO', 'PENDIENTE', 'CERTIFICADO', 'CANCELADO', 'ANULADO'],
      defaultValue : 'INICIO',
      xlabel       : lang.t('fields.estado'),
      field        : 'estado'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const RFSolicitudHistorial = sequelize.define('rfuncional_solicitud_historial', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'rfuncional_solicitud_historial'
  });

  return RFSolicitudHistorial;
};
