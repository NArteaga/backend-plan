const direccionSchema = require('./DireccionSchema');

module.exports = {
  title    : 'Establecimiento',
  required : [
    'idEmpresa',
    'parIdTipoEstablecimiento',
    'sindicato',
    'comiteMixto',
    // 'codigoEstablecimiento',
    'nombreEstablecimiento',
    // 'telefono',
    'celular',
    // 'fax',
    // 'fechaCreacionEstablecimiento',
    // 'estado',
    'direccion'
  ],
  type       : 'object',
  properties : {
    idEmpresa: {
      type: 'number'
    },
    parIdTipoEstablecimiento: {
      type: 'number'
    },
    sindicato: {
      type: 'boolean'
    },
    comiteMixto: {
      type: 'boolean'
    },
    // codigoEstablecimiento: {
    //   type: 'string'
    // },
    nombreEstablecimiento: {
      type: 'string'
    },
    // telefono: {
    //   type: 'string'
    // },
    celular: {
      type: 'string'
    },
    fax: {
      type: 'string'
    },
    // fechaCreacionEstablecimiento: {
    //   type: 'string'
    // },
    // estado: {
    //   type: 'string'
    // },
    direccion: direccionSchema
  }
};
