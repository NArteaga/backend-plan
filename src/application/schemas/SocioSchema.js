const personaSchema = require('./PersonaSchema');
const direccionSchema = require('./DireccionSchema');
module.exports = {
  title    : 'Socio',
  required : [
    'idEmpresa',
    'parIdSubtipoConformacion'
  ],
  type       : 'object',
  properties : {
    idEmpresa: {
      type: 'number'
    },
    // participacionPorcentual: {
    //   type: 'string'
    // },
    rol: {
      type: 'string'
    },
    direccionResumida: {
      type: 'string'
    },
    persona   : personaSchema,
    direccion : direccionSchema
  }
};
