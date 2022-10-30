'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id                : util.pk,
    idEstructuraPadre : {
      type      : DataTypes.JSONB,
      allowNull : true,
      xlabel    : lang.t('fields.idEstructuraPadre'),
      field     : 'id_estructura_padre'
    },
    nombre: {
      type      : DataTypes.STRING(512),
      allowNull : false,
      xlabel    : lang.t('fields.nombre'),
      field     : 'nombre'
    },
    nivel: {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.nivel'),
      field     : 'nivel'
    },
    sigla: {
      type      : DataTypes.STRING(50),
      allowNull : false,
      xlabel    : lang.t('fields.sigla'),
      field     : 'sigla'
    },
    created: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.created'),
      allowNull    : false,
      defaultValue : false,
      field        : 'created'
    },
    editable: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.editable'),
      allowNull    : false,
      defaultValue : false,
      field        : 'editable'
    },
    cronograma: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.cronograma'),
      allowNull    : false,
      defaultValue : false,
      field        : 'crononograma'
    },
    eje: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.eje'),
      allowNull    : false,
      defaultValue : false,
      field        : 'eje'
    },
    pilar: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.pilar'),
      allowNull    : false,
      defaultValue : false,
      field        : 'pilar'
    },
    lineamientos: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.lineamientos'),
      allowNull    : false,
      defaultValue : false,
      field        : 'lineamientos'
    },
    objetivo: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.objetivo'),
      allowNull    : false,
      defaultValue : false,
      field        : 'objetivo'
    },
    accion: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.accion'),
      allowNull    : false,
      defaultValue : false,
      field        : 'accion'
    },
    codigo: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.codigo'),
      allowNull    : false,
      defaultValue : false,
      field        : 'codigo'
    },
    codigoManual: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.codigoManual'),
      allowNull    : false,
      defaultValue : false,
      field        : 'codigo_manual'
    },
    areaRequerida: {
      type         : DataTypes.BOOLEAN,
      xlabel       : lang.t('fields.areaRequerida'),
      allowNull    : false,
      defaultValue : true,
      field        : 'area_requerida'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Estructura = sequelize.define('estructura', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'planificacion_estructura'
  });

  return Estructura;
};
