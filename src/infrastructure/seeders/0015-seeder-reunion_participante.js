'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, id_reunion: 1, id_usuario: 1 },
  { id: 2, id_reunion: 1, id_usuario: 2 }
];
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('reunion_participante', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "reunion_participante_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
