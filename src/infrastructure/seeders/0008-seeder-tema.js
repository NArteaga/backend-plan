'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, id_entidad: 1, titulo: 'Tema 1', descripcion: 'Desdcripcion del tema 1', estado: 'ACTIVO' }
];
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tema', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "tema_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
