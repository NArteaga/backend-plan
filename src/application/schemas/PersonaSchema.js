module.exports = {
  title    : 'Representante',
  required : [
    'numeroDocumento',
    // 'fechaNacimiento',
    // 'nombres',
    'parIdTipoDocumento',
    'parIdTipoPersona'
  ],
  type       : 'object',
  properties : {
    parIdTipoDocumento: {
      type: 'number'
    },
    parIdTipoPersona: {
      type: 'number'
    },
    numeroDocumento: {
      type      : 'string',
      minLength : 7
    },
    // fechaNacimiento: {
    //   type: 'string'
    // },
    // nombres: {
    //   type      : 'string',
    //   minLength : 2
    // },
    // primerApellido: {
    //   type: 'string'
    // },
    // segundoApellido: {
    //   type: 'string'
    // }
  }
}
;
