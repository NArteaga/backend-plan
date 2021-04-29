module.exports = {
  title    : 'Representante',
  required : [
    'parIdZonaBarrio',
    'parIdCalleAvenida',
    'nombreZonaBarrio',
    'nombreCalleAvenida',
    'numeroDomicilio',
    'idMunicipio'
  ],
  type       : 'object',
  properties : {
    parIdZonaBarrio: {
      type: 'number'
    },
    parIdCalleAvenida: {
      type: 'number'
    },
    nombreZonaBarrio: {
      type      : 'string',
      minLength : 2
    },
    nombreCalleAvenida: {
      type      : 'string',
      minLength : 2
    },
    numeroDomicilio: {
      type      : 'string',
      minLength : 1
    },
    idMunicipio: {
      type: 'number'
    }
  }
};
