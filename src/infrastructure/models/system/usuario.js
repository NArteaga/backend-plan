'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id      : util.pk,
    usuario : {
      type   : DataTypes.STRING(100),
      unique : true,
      xlabel : lang.t('fields.usuario')
    },
    contrasena: {
      type   : DataTypes.STRING(50),
      xlabel : lang.t('fields.usuario')
    },
    nombres: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.nombres'),
      field     : 'nombres'
    },
    primerApellido: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.primerApellido'),
      field     : 'primer_apellido'
    },
    segundoApellido: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.segundoApellido'),
      field     : 'segundo_apellido'
    },
    numeroDocumento: {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.numeroDocumento'),
      field     : 'numero_documento'
    },
    telefono: {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.telefono'),
      field     : 'telefono'
    },
    celular: {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.celular'),
      field     : 'celular'
    },
    correoElectronico: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.correoElectronico'),
      field     : 'correo_electronico'
    },
    foto: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.foto'),
      field     : 'foto'
    },
    idSucursal: {
      type      : DataTypes.INTEGER,
      allowNull : true,
      xlabel    : lang.t('fields.idSucursal'),
      field     : 'id_sucursal'
    },
    idRol: {
      type      : DataTypes.INTEGER,
      allowNull : true,
      xlabel    : lang.t('fields.idRol'),
      field     : 'id_rol'
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

  const User = sequelize.define('usuario', fields, {
    timestamps : false,
    tableName  : 'sys_usuario'
  });

  return User;
};
