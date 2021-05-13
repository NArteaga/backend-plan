'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id     : util.pk,
    nombre : {
      type   : DataTypes.STRING(100),
      unique : true,
      xlabel : lang.t('fields.usuario')
    },
    sigla: {
      type   : DataTypes.STRING(50),
      xlabel : lang.t('fields.sigla')
    },
    direccion: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.direccion'),
      field     : 'direccion'
    },
    telefono: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.telefono'),
      field     : 'telefono'
    },
    urlLogo: {
      type      : DataTypes.TEXT,
      allowNull : false,
      xlabel    : lang.t('fields.urlLogo'),
      field     : 'url_logo'
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['ACTIVO', 'INACTIVO'],
      defaultValue : 'ACTIVO',
      allowNull    : false,
      xlabel       : lang.t('fields.estado'),
      field        : 'estado'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Entidad = sequelize.define('entidad', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'sys_entidad'
  });

  return Entidad;
};
