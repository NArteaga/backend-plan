'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id        : util.pk,
    idEntidad : { // llave foranea de la tabla (unidad_organizacional)
      type      : DataTypes.UUID,
      allowNull : false,
      xlabel    : lang.t('fields.idEntidad'),
      field     : 'id_entidad'
    },
    idGestion: {
      type      : DataTypes.UUID,
      allowNull : false,
      xlabel    : lang.t('fields.idGestion'),
      field     : 'id_gestion'
    },
    idSeguimiento: { // llave foranea de la tabla (seguimiento)
      type      : DataTypes.UUID,
      allowNull : true,
      xlabel    : lang.t('fields.idSeguimiento'),
      field     : 'id_seguimiento'
    },
    tipo: {
      type   : DataTypes.ENUM,
      values : ['FORMULACION', 'SEGUIMIENTO', 'REFORMULACION'],
      xlabel : lang.t('fields.tipo'),
      field  : 'tipo'
    },
    idUsuarioRevisor: { // llave foranea de la tabla (usuario)
      type      : DataTypes.UUID,
      allowNull : true,
      xlabel    : lang.t('fields.idUsuarioRevisor'),
      field     : 'id_usuario_revisor'
    },
    idUsuarioValidador: { // llave foranea de la tabla (usuario)
      type      : DataTypes.UUID,
      allowNull : true,
      xlabel    : lang.t('fields.idUsuarioValidador'),
      field     : 'id_usuario_validador'
    },
    validado: {
      type      : DataTypes.BOOLEAN,
      allowNull : true,
      xlabel    : lang.t('fields.validado'),
      field     : 'validado'
    },
    fechaElaboracion: {
      type   : DataTypes.DATE,
      xlabel : lang.t('fields.fechaElaboracion'),
      field  : 'fecha_elaboracion',
      set    : function (value) {
        const fechaParseada = moment(value).format('YYYY-MM-DD HH:mm:ss');
        this.setDataValue('fechaElaboracion', fechaParseada);
      },
      get: function () {
        if (this.getDataValue('fechaElaboracion')) {
          return moment(this.getDataValue('fechaElaboracion')).format('DD-MM-YYYY');
        }
        return null;
      }
    },
    fechaRevision: {
      type   : DataTypes.DATE,
      xlabel : lang.t('fields.fechaRevision'),
      field  : 'fecha_revision',
      set    : function (value) {
        const fechaParseada = moment(value).format('YYYY-MM-DD HH:mm:ss');
        this.setDataValue('fechaRevision', fechaParseada);
      },
      get: function () {
        if (this.getDataValue('fechaRevision')) {
          return moment(this.getDataValue('fechaRevision')).format('DD-MM-YYYY');
        }
        return null;
      }
    },
    fechaValidacion: {
      type   : DataTypes.DATE,
      xlabel : lang.t('fields.fechaValidacion'),
      field  : 'fecha_validacion',
      set    : function (value) {
        const fechaParseada = moment(value).format('YYYY-MM-DD HH:mm:ss');
        this.setDataValue('fechaValidacion', fechaParseada);
      },
      get: function () {
        if (this.getDataValue('fechaValidacion')) {
          return moment(this.getDataValue('fechaValidacion')).format('DD-MM-YYYY');
        }
        return null;
      }
    },
    observacion: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.observacion'),
      field     : 'observacion'
    },
    fechaInicio: {
      type      : DataTypes.DATEONLY,
      allowNull : true,
      xlabel    : lang.t('fields.fechaInicio'),
      field     : 'fecha_inicio',
      set       : function (value) {
        const fechaParseada = moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
        this.setDataValue('fechaInicio', fechaParseada);
      },
      get: function () {
        if (this.getDataValue('fechaInicio')) {
          return moment(this.getDataValue('fechaInicio')).format('DD/MM/YYYY');
        }
        return null;
      }
    },
    fechaFin: {
      type      : DataTypes.DATEONLY,
      allowNull : true,
      xlabel    : lang.t('fields.fechaFin'),
      field     : 'fecha_fin',
      set       : function (value) {
        const fechaParseada = moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
        this.setDataValue('fechaFin', fechaParseada);
      },
      get: function () {
        if (this.getDataValue('fechaFin')) {
          return moment(this.getDataValue('fechaFin')).format('DD/MM/YYYY');
        }
        return null;
      }
    },
    archivoAdjunto: {
      type      : DataTypes.STRING(180),
      allowNull : true,
      xlabel    : 'Archivo adjunto',
      field     : 'archivo_adjunto'
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['ACTIVO', 'INACTIVO'],
      defaultValue : 'INACTIVO',
      xlabel       : lang.t('fields.estado'),
      field        : 'estado'
    },
    etapa: {
      type         : DataTypes.ENUM,
      values       : ['EN PROCESO', 'POR REVISAR', 'POR APROBAR', 'POR VALIDAR', 'POR FIRMAR', 'CONCLUIDO', 'OBSERVADO'],
      defaultValue : 'EN PROCESO',
      xlabel       : lang.t('fields.etapa'),
      field        : 'etapa'
    }
  };
  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Formulacion = sequelize.define('formulacion', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'planificacion_formulacion'
  });

  return Formulacion;
};
