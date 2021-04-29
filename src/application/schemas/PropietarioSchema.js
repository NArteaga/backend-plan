const personaSchema = require('./PersonaSchema');
const direccionSchema = require('./DireccionSchema');
module.exports = {
  title    : 'Propietario',
  required : [
    'idEmpresa',
    'persona',
    'direccion'
  ],
  type       : 'object',
  properties : {
    idEmpresa: {
      type: 'number'
    },
    persona   : personaSchema,
    direccion : direccionSchema
  }
}
;
