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
    prefijo: {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.prefijo'),
      field     : 'prefijo'
    },
    sufijo: {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.sufijo'),
      field     : 'sufijo'
    },
    correlativo: {
      type      : DataTypes.INTEGER,
      allowNull : false,
      default   : 0,
      xlabel    : lang.t('fields.correlativo'),
      field     : 'correlativo'
    }

  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Cite = sequelize.define('cite', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'cite'
  });

  return Cite;
};
