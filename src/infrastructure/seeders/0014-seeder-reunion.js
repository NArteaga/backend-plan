'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, id_entidad: 1, fecha_reunion: new Date(), cite: '10000', titulo: 'Titulo de la reunion', descripcion: 'Descripcion de la reunion', estado: 'ACTIVO' }
];
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('reunion', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "reunion_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
