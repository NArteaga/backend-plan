'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id        : util.pk,
    idUsuario : {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idUsuario'),
      field     : 'id_usuario'
    },
    idRol: {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.idRol'),
      field     : 'id_rol'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const UsuarioRol = sequelize.define('usuario_rol', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'sys_usuario_rol'
  });

  return UsuarioRol;
};
