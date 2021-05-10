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
    idTema: {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idTema'),
      filed     : 'id_tema'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);
  // Agregando campos para el log fields = util.setTimestamps(fields);

  const TemaEntidad = sequelize.define('tema_entidad', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'tema_entidad'
  });

  return TemaEntidad;
};
