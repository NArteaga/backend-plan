'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id  : util.pk,
    nombre: {
      type      : DataTypes.STRING(200),
      allowNull : false,
      xlabel    : lang.t('fields.nombre'),
      field     : 'nombre'
    },
    departamento: {
      type      : DataTypes.STRING(200),
      allowNull : false,
      xlabel    : lang.t('fields.departamento'),
      field     : 'departamento'
    },
    provincia: {
      type      : DataTypes.STRING(200),
      allowNull : true,
      xlabel    : lang.t('fields.provincia'),
      field     : 'provincia'
    },
    municipio: {
      type      : DataTypes.STRING(200),
      allowNull : true,
      xlabel    : lang.t('fields.municipio'),
      field     : 'municipio'
    },
    direccion: {
      type      : DataTypes.TEXT,
      allowNull : false,
      xlabel    : lang.t('fields.direccion'),
      field     : 'direccion'
    },
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const RFInstitucion = sequelize.define('rfuncional_institucion', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'rfuncional_institucion'
  });

  return RFInstitucion;
};
