
module.exports = {
  title    : 'Tema',
  required : [
    'titulo',
    'descripcion',
    'estado'
  ],
  type       : 'object',
  properties : {
    titulo: {
      type: 'string'
    },
    descripcion: {
      type: 'string'
    },
    estado: {
      type: 'string'
    }
  }
};
