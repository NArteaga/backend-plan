'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id    : util.pk,
    sigla : {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.sigla'),
      field     : 'sigla'
    },
    nombre: {
      type      : DataTypes.STRING(200),
      allowNull : false,
      xlabel    : lang.t('fields.nombre'),
      field     : 'nombre'
    }
  };

  fields = util.setTimestamps(fields);

  const Pilar = sequelize.define('financiera_organismo_financiador', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'financiera_organismo_financiador'
  });

  return Pilar;
};
