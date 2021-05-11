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
      field     : 'id_reunion'
    },
    idUsuario: {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idUsuario'),
      field     : 'id_usuario'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);
  // Agregando campos para el log fields = util.setTimestamps(fields);

  const ReunionParticipante = sequelize.define('reunion_participante', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'reunion_participante'
  });

  return ReunionParticipante;
};
