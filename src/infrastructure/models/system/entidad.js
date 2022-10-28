'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id     : util.pk,
    nombre : {
      type      : DataTypes.STRING(400),
      allowNull : false,
      xlabel    : lang.t('fields.nombre')
    },
    departamento: {
      type      : DataTypes.STRING(100),
      allowNull : true,
      xlabel    : lang.t('fields.departamento')
    },
    provincia: {
      type      : DataTypes.STRING(100),
      allowNull : true,
      xlabel    : lang.t('fields.provincia')
    },
    municipio: {
      type      : DataTypes.STRING(100),
      allowNull : true,
      xlabel    : lang.t('fields.municipio')
    },
    direccion: {
      type   : DataTypes.TEXT,
      xlabel : lang.t('fields.direccion'),
      field  : 'direccion'
    },
    horario: {
      type   : DataTypes.TEXT,
      xlabel : lang.t('fields.horario'),
      field  : 'horario'
    },
    servicio: {
      type   : DataTypes.JSONB,
      xlabel : lang.t('fields.servicio'),
      field  : 'servicio'
    },
    email: {
      type      : DataTypes.TEXT,
      allowNull : false,
      xlabel    : lang.t('fields.email'),
      field     : 'email'
    },
    telefono: {
      type   : DataTypes.STRING(15),
      xlabel : lang.t('fields.telefono'),
      field  : 'telefono'
    },
    lenguas: {
      type   : DataTypes.JSONB,
      xlabel : lang.t('fields.lenguas'),
      field  : 'lenguas'
    },
    latitud: {
      type   : DataTypes.JSONB,
      xlabel : lang.t('fields.latitud'),
      field  : 'latitud'
    },
    longitud: {
      type   : DataTypes.JSONB,
      xlabel : lang.t('fields.longitud'),
      field  : 'longitud'
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
