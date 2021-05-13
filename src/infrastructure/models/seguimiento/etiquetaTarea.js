'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id         : util.pk,
    idEtiqueta : {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idEtiqueta'),
      field     : 'id_etiqueta'
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

  const EtiquetaTarea = sequelize.define('etiqueta_tarea', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'etiqueta_tarea'
  });

  return EtiquetaTarea;
};
