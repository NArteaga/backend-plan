'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id     : util.pk,
    idTema : {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idTema'),
      field     : 'id_tema'
    },
    titulo: {
      type      : DataTypes.STRING(250),
      allowNull : false,
      xlabel    : lang.t('fields.grupo')
    },
    color: {
      type   : DataTypes.STRING(250),
      xlabel : lang.t('fields.color')
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

  const Categoria = sequelize.define('categoria', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'categoria'
  });

  return Categoria;
};
