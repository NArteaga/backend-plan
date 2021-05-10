'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, id_rol: 1, id_permiso: 1 },
  { id: 2, id_rol: 1, id_permiso: 2 },
  { id: 3, id_rol: 1, id_permiso: 3 },
  { id: 4, id_rol: 1, id_permiso: 4 }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_rol_permiso', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_rol_permiso_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
