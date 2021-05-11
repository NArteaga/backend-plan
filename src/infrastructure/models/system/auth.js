'use strict';

const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id    : util.pk,
    state : {
      type      : DataTypes.STRING(100),
      allowNull : false,
      unique    : true
    },
    parametros: { // nonce
      type      : DataTypes.TEXT,
      allowNull : true
    },
    tokens: { // id_token, access_token, refresh_token
      type      : DataTypes.TEXT,
      allowNull : true
    },
    id_usuario: { // id_usuario
      type      : DataTypes.INTEGER,
      allowNull : true
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['INICIO', 'ACTIVO', 'ELIMINADO'],
      defaultValue : 'INICIO',
      allowNull    : false
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Auth = sequelize.define('auth', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'sys_auth'
  });

  return Auth;
};