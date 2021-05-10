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
      filed     : 'id_entidad'
    },
    titulo: {
      type      : DataTypes.STRING(250),
      allowNull : false,
      xlabel    : lang.t('fields.grupo')
    },
    descripcion: {
      type   : DataTypes.TEXT,
      xlabel : lang.t('fields.nombre')
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

  const Tema = sequelize.define('tema', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'tema'
  });

  return Tema;
};
