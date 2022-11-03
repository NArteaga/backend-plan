'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id       : util.pk,
    objetivo : {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.objetivo'),
      field     : 'objetivo'
    },
    montoTotal: {
      type   : DataTypes.DECIMAL(10, 2),
      xlabel : lang.t('fields.montoTotal'),
      field  : 'monto_total'
    }
  };

  fields = util.setTimestamps(fields);

  const Pilar = sequelize.define('financiera_ejecutado', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'financiera_ejecutado'
  });

  return Pilar;
};
