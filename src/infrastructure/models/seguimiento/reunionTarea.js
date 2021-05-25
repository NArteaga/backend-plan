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
    idTarea: {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idTarea'),
      field     : 'id_tarea'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);
  // Agregando campos para el log fields = util.setTimestamps(fields);

  const ReunionTarea = sequelize.define('reunion_tarea', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'reunion_tarea'
  });

  return ReunionTarea;
};
