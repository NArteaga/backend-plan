'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, id_tema: 1, titulo: 'Tarea 1', palabras_clave: 'tarea,demo,prueba', fecha_finalizacion: '2021-05-31', finalizado: false }
];
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tarea', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "tarea_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
