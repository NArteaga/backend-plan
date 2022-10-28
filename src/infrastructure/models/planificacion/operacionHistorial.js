'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id          : util.pk,
    idOperacion : {
      type   : DataTypes.UUID,
      xlabel : lang.t('fields.idOperacion'),
      field  : 'id_operacion'
    },
    versionInicial: {
      type   : DataTypes.JSONB,
      xlabel : lang.t('fields.versionInicial'),
      field  : 'version_inicial'
    },
    versionFinal: {
      type   : DataTypes.JSONB,
      xlabel : lang.t('fields.versionFinal'),
      field  : 'version_final'
    },
    observaciones: {
      type   : DataTypes.STRING(200),
      xlabel : lang.t('fields.observaciones'),
      field  : 'observaciones'
    }
  };
  fields = util.setTimestamps(fields);

  const OperacionHistorial = sequelize.define('operacion_historial', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'planificacion_operacion_historial'
  });

  return OperacionHistorial;
};
