'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id     : util.pk,
    codigo : {
      type      : DataTypes.STRING(25),
      allowNull : false,
      xlabel    : lang.t('fields.codigo')
    },
    grupo: {
      type      : DataTypes.STRING(250),
      allowNull : false,
      xlabel    : lang.t('fields.grupo')
    },
    nombre: {
      type   : DataTypes.STRING(1000),
      xlabel : lang.t('fields.nombre')
    },
    descripcion: {
      type   : DataTypes.STRING(1000),
      xlabel : lang.t('fields.descripcion')
    },
    otros: {
      type   : DataTypes.TEXT,
      xlabel : lang.t('fields.otros'),
      field  : 'otros'
    },
    fidParametro: {
      type      : DataTypes.INTEGER,
      allowNull : true,
      xlabel    : lang.t('fields.fidParametro'),
      field     : 'fid_parametro'
    },
    estado: {
      type      : DataTypes.STRING(50),
      allowNull : false,
      xlabel    : lang.t('fields.estado')
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);
  // Agregando campos para el log fields = util.setTimestamps(fields);

  const Parametro = sequelize.define('parametro', fields, {
    timestamps : false,
    tableName  : 'parametro'
  });

  return Parametro;
};
