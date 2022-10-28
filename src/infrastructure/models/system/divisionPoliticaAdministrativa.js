'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id        : util.pk,
    codigoIne : {
      type   : DataTypes.INTEGER,
      xlabel : lang.t('fields.codigoIne'),
      field  : 'codigo_ine'
    },
    nivel: {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.nivel'),
      field     : 'nivel'
    },
    nombre: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.nombre'),
      field     : 'nombre'
    },
    latitud: {
      type   : DataTypes.DOUBLE,
      xlabel : lang.t('fields.latitud'),
      field  : 'latitud'
    },
    longitud: {
      type   : DataTypes.DOUBLE,
      xlabel : lang.t('fields.longitud'),
      field  : 'longitud'
    },
    idDpa: {
      type   : DataTypes.UUID,
      xlabel : lang.t('fields.idDpa'),
      field  : 'id_dpa'
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['ACTIVO', 'INACTIVO'],
      defaultValue : 'ACTIVO',
      allowNull    : false,
      xlabel       : lang.t('fields.estado'),
      field        : 'estado'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const divisionPoliticaAdministrativa = sequelize.define('divisionPoliticaAdministrativa', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'sys_division_politica_administrativa'
  });

  return divisionPoliticaAdministrativa;
};
