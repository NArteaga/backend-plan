'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, id_usuario: 1, id_tarea: 1, id_tema: null, id_reunion: null, tipo: 'SISTEMA', descripcion: 'ha creado una nueva tarea', ruta_adjunto: null }
];
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('comentario', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "comentario_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
