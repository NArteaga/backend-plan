'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id          : util.pk,
    suscripcion : {
      type   : DataTypes.JSONB,
      xlabel : lang.t('fields.suscripcion'),
      field  : 'suscripcion'
    },
    idUsuario: {
      type      : DataTypes.INTEGER,
      allowNull : true,
      xlabel    : lang.t('fields.idUsuario'),
      field     : 'id_usuario'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Suscripcion = sequelize.define('suscripcion', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'sys_suscripcion'
  });

  return Suscripcion;
};
