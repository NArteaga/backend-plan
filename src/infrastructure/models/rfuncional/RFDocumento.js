'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id         : util.pk,
    nombre: {
      type      : DataTypes.STRING(150),
      allowNull : false,
      xlabel    : lang.t('fields.nombre'),
      field     : 'nombre'
    },
    ruta: {
      type   : DataTypes.STRING(200),
      xlabel : lang.t('fields.ruta'),
      field  : 'ruta'
    },
    hash: {
      type   : DataTypes.STRING(200),
      xlabel : lang.t('fields.hash'),
      field  : 'hash'
    },
    fechaDocumento: {
      type   : DataTypes.DATEONLY,
      xlabel : lang.t('fields.fechaDocumento'),
      field  : 'fechaDocumento'
    },
    tipo: {
      type         : DataTypes.ENUM,
      values       : ['ADJUNTO', 'CERTIFICADO', 'DECLARACION JURADA', 'CONTRATO'],
      defaultValue : 'ADJUNTO',
      xlabel       : lang.t('fields.tipo'),
      field        : 'tipo'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const RFDocumento = sequelize.define('rfuncional_documento', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'rfuncional_documento'
  });

  return RFDocumento;
};
