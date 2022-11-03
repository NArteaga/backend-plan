'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id                      : util.pk,
    idPartidaPresupuestaria : {
      type      : DataTypes.UUID,
      allowNull : true,
      xlabel    : lang.t('fields.idPartidaPresupuestaria'),
      field     : 'id_partida_presupuestaria'
    },
    idOrganismoFinanciador: {
      type      : DataTypes.UUID,
      allowNull : true,
      xlabel    : lang.t('fields.idOrganismoFinanciador'),
      field     : 'id_organismo_financiador'
    },
    idOperacion: {
      type      : DataTypes.UUID,
      allowNull : true,
      xlabel    : lang.t('fields.idOperacion'),
      field     : 'id_operacion'
    },
    descripcion: {
      type      : DataTypes.TEXT,
      xlabel    : lang.t('fields.descripcion'),
      field     : 'descripcion',
      allowNull : true
    },
    montoInicial: {
      type      : DataTypes.DECIMAL(10, 2),
      allowNull : false,
      xlabel    : lang.t('fields.montoInicial'),
      field     : 'monto_inicial'
    },
    montoOficial: {
      type      : DataTypes.DECIMAL(10, 2),
      allowNull : false,
      xlabel    : lang.t('fields.montoOficial'),
      field     : 'monto_oficial'
    }
  };

  fields = util.setTimestamps(fields);

  const Pilar = sequelize.define('financiera_presupuesto', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'financiera_presupuesto'
  });

  return Pilar;
};
