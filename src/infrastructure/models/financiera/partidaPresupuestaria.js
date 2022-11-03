'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id     : util.pk,
    codigo : {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.codigo'),
      field     : 'codigo'
    },
    idPartidaPadre: {
      type   : DataTypes.UUID,
      xlabel : lang.t('fields.idPartidaPadre'),
      field  : 'id_partida_padre'
    },
    nombre: {
      type      : DataTypes.STRING(200),
      allowNull : false,
      xlabel    : lang.t('fields.nombre'),
      field     : 'nombre'
    },
    tipo: {
      type      : DataTypes.ENUM,
      values    : ['GRUPO', 'PARTIDA'],
      xlabel    : lang.t('fields.tipo'),
      field     : 'tipo',
      allowNull : true
    }
  };

  fields = util.setTimestamps(fields);

  const Pilar = sequelize.define('financiera_partida_presupuestaria', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'financiera_partida_presupuestaria'
  });

  return Pilar;
};
