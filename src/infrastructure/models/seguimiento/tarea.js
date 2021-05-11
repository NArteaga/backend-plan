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
      xlabel    : lang.t('fields.codigo')
    },
    palabrasClave: {
      type      : DataTypes.STRING(250),
      allowNull : false,
      xlabel    : lang.t('fields.palabrasClave'),
      field     : 'palabras_clave'
    },
    fechaFinalizacion: {
      type      : DataTypes.DATE,
      allowNull : false,
      xlabel    : lang.t('fields.fechaFinalizacion'),
      field     : 'fecha_finalizacion'
    },
    finalizado: {
      type      : DataTypes.BOOLEAN,
      allowNull : false,
      xlabel    : lang.t('fields.finalizado'),
      field     : 'finalizado'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);
  // Agregando campos para el log fields = util.setTimestamps(fields);

  const Tarea = sequelize.define('tarea', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'tarea'
  });

  return Tarea;
};
