
module.exports = {
  title    : 'Empresa',
  required : [
    'parIdTipoUnidadEconomica',
    'parIdRegimen'
  ],
  type       : 'object',
  properties : {
    parIdTipoUnidadEconomica: {
      type: 'number'
    },
    parIdRegimen: {
      type: 'number'
    }
  }
};
