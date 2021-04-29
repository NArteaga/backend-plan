'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id     : util.pk,
    nombre : {
      type      : DataTypes.STRING(50),
      allowNull : false,
      xlabel    : lang.t('fields.nombre')
    },
    path: {
      type   : DataTypes.STRING(50),
      xlabel : lang.t('fields.path')
    },
    descripcion: {
      type   : DataTypes.TEXT,
      xlabel : lang.t('fields.descripcion')
    },
    estado: {
      type   : DataTypes.ENUM,
      values : ['ACTIVO', 'INACTIVO'],
      xlabel : lang.t('fields.estado'),
      field  : 'estado'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Rol = sequelize.define('rol', fields, {
    timestamps : false,
    tableName  : 'sys_rol'
  });

  return Rol;
};
