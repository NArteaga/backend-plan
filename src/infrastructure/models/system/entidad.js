'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id        : util.pk,
    idEntidad : {
      type      : DataTypes.INTEGER,
      allowNull : true,
      xlabel    : lang.t('fields.idEntidad'),
      field     : 'id_entidad'
    },
    nivel: {
      type         : DataTypes.INTEGER,
      allowNull    : false,
      defaultValue : 0,
      xlabel       : lang.t('fields.nivel'),
      field        : 'nivel'
    },
    nombre: {
      type      : DataTypes.STRING(250),
      allowNull : false,
      xlabel    : lang.t('fields.nombre')
    },
    sigla: {
      type      : DataTypes.STRING(50),
      allowNull : false,
      xlabel    : lang.t('fields.sigla')
    },
    direccion: {
      type   : DataTypes.TEXT,
      xlabel : lang.t('fields.direccion'),
      field  : 'direccion'
    },
    telefono: {
      type   : DataTypes.STRING(15),
      xlabel : lang.t('fields.telefono'),
      field  : 'telefono'
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
