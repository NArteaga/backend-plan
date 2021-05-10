'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id        : util.pk,
    idUsuario : {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idUsuario'),
      field     : 'id_usuario'
    },
    idTarea: {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idTarea'),
      field     : 'id_tarea'
    },
    descripcion: {
      type      : DataTypes.TEXT,
      allowNull : false,
      xlabel    : lang.t('fields.descripcion')
    },
    rutaAdjunto: {
      type      : DataTypes.TEXT,
      allowNull : false,
      xlabel    : lang.t('fields.rutaAdjunto'),
      field     : 'ruta_adjunto'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);
  // Agregando campos para el log fields = util.setTimestamps(fields);

  const Comentario = sequelize.define('comentario', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'comentario'
  });

  return Comentario;
};
