
module.exports = {
  title    : 'Actividad',
  required : [
    'idCaeb',
    'principal',
    'fechaInicioActividad',
    'fechaFinActividad',
    'fechaFinActividadCaeb',
    'idEmpresa'
  ],
  type       : 'object',
  properties : {
    idCaeb: {
      type: 'number'
    },
    principal: {
      type: 'boolean'
    },
    fechaInicioActividad: {
      type: 'string'
    },
    fechaFinActividad: {
      type: 'string'
    },
    fechaFinActividadCaeb: {
      type: 'string'
    },
    idEmpresa: {
      type: 'number'
    }
  }
};
