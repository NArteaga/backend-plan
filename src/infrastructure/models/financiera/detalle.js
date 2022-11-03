'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id          : util.pk,
    idEjecucion : {
      type      : DataTypes.UUID,
      allowNull : true,
      xlabel    : lang.t('fields.idEjecucion'),
      field     : 'id_ejecucion'
    },
    idPresupuesto: {
      type      : DataTypes.UUID,
      allowNull : true,
      xlabel    : lang.t('fields.idPresupuesto'),
      field     : 'id_presupuesto'
    },
    descripcion: {
      type      : DataTypes.TEXT,
      xlabel    : lang.t('fields.descripcion'),
      field     : 'descripcion',
      allowNull : true
    },
    idUnidadMedida: {
      type      : DataTypes.UUID,
      allowNull : false,
      xlabel    : lang.t('fields.idUnidadMedida'),
      field     : 'id_unidad_medida'
    },
    cantidad: {
      type      : DataTypes.DECIMAL(10, 2),
      allowNull : false,
      xlabel    : lang.t('fields.cantidad'),
      field     : 'cantidad'
    },
    precioUnitario: {
      type      : DataTypes.DECIMAL(10, 2),
      allowNull : false,
      xlabel    : lang.t('fields.precioUnitario'),
      field     : 'precio_unitario'
    }
  };

  fields = util.setTimestamps(fields);

  const Pilar = sequelize.define('financiera_solicitud_detalle', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'financiera_solicitud_detalle'
  });

  return Pilar;
};
