'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id    : util.pk,
    idEje : { // llave foranea de la tabla (estructura)
      type      : DataTypes.JSONB,
      allowNull : true,
      xlabel    : lang.t('fields.idEje'),
      field     : 'idEje'
    },
    nombre: {
      type      : DataTypes.STRING(200),
      allowNull : false,
      xlabel    : lang.t('fields.nombre'),
      field     : 'nombre'
    },
    codigo: {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.codigo'),
      field     : 'codigo'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Pilar = sequelize.define('pilar', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'planificacion_pilar'
  });

  return Pilar;
};
