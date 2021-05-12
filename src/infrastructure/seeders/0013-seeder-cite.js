'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, id_entidad: 1, prefijo: 'MJTI', sufijo: 'RE', correlativo: 0 }
];
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cite', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "cite_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
