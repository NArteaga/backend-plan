'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id  : util.pk,
    url : {
      type   : DataTypes.STRING(50),
      unique : true,
      xlabel : lang.t('fields.url')
    },
    ruta: {
      type   : DataTypes.STRING(50),
      unique : true,
      xlabel : lang.t('fields.ruta')
    },
    label: {
      type   : DataTypes.STRING(50),
      xlabel : lang.t('fields.label')
    },
    icono: {
      type   : DataTypes.STRING(30),
      xlabel : lang.t('fields.icono')
    },
    orden: {
      type      : DataTypes.INTEGER,
      unique    : true,
      allowNull : false,
      xlabel    : lang.t('fields.orden')
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['ACTIVO', 'INACTIVO'],
      defaultValue : 'ACTIVO',
      allowNull    : false,
      xlabel       : lang.t('fields.estado')
    },
    visible: {
      type         : DataTypes.BOOLEAN,
      allowNull    : false,
      xlabel       : lang.t('fields.visible'),
      defaultValue : true
    },
    idModulo: {
      type   : DataTypes.INTEGER,
      xlabel : lang.t('fields.idModulo'),
      field  : 'id_modulo'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Modulos = sequelize.define('modulos', fields, {
    timestamps : false,
    tableName  : 'modulos'
  });

  return Modulos;
};
