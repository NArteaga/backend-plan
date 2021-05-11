'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id          : util.pk,
    idCategoria : {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idCategoria'),
      field     : 'id_categoria'
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

  const CategoriaTarea = sequelize.define('categoria_tarea', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'categoria_tarea'
  });

  return CategoriaTarea;
};
