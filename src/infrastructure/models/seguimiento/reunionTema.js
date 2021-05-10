'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id        : util.pk,
    idReunion : {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idReunion'),
      filed     : 'id_reunion'
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

  const ReunionTema = sequelize.define('reunion_tema', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'reunion_tema'
  });

  return ReunionTema;
};
