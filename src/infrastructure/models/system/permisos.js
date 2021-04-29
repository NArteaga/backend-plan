'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id     : util.pk,
    access : {
      type         : DataTypes.BOOLEAN,
      allowNull    : false,
      xlabel       : lang.t('fields.access'),
      defaultValue : true
    },
    create: {
      type         : DataTypes.BOOLEAN,
      allowNull    : false,
      xlabel       : lang.t('fields.create'),
      defaultValue : false
    },
    read: {
      type         : DataTypes.BOOLEAN,
      allowNull    : false,
      xlabel       : lang.t('fields.read'),
      defaultValue : false
    },
    update: {
      type         : DataTypes.BOOLEAN,
      allowNull    : false,
      xlabel       : lang.t('fields.update'),
      defaultValue : false
    },
    delete: {
      type         : DataTypes.BOOLEAN,
      allowNull    : false,
      xlabel       : lang.t('fields.delete'),
      defaultValue : false
    },
    csv: {
      type         : DataTypes.BOOLEAN,
      allowNull    : false,
      xlabel       : lang.t('fields.csv'),
      defaultValue : false
    },
    idRol: {
      type   : DataTypes.INTEGER,
      xlabel : lang.t('fields.idRol'),
      field  : 'id_rol'
    },
    idModulo: {
      type   : DataTypes.INTEGER,
      xlabel : lang.t('fields.idModulo'),
      field  : 'id_modulo'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Permisos = sequelize.define('permisos', fields, {
    timestamps : false,
    tableName  : 'sys_permisos'
  });

  return Permisos;
};
