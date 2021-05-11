'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id        : util.pk,
    idEntidad : {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idEntidad'),
      field     : 'id_entidad'
    },
    titulo: {
      type      : DataTypes.STRING(250),
      allowNull : false,
      xlabel    : lang.t('fields.titulo')
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
  // Agregando campos para el log fields = util.setTimestamps(fields);

  const Reunion = sequelize.define('reunion', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'reunion'
  });

  return Reunion;
};
