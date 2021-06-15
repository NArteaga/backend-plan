'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, id_rol: 1, id_permiso: 1 },
  { id: 2, id_rol: 1, id_permiso: 2 },
  { id: 3, id_rol: 1, id_permiso: 3 },
  { id: 4, id_rol: 1, id_permiso: 4 },
  { id: 5, id_rol: 1, id_permiso: 5 },
  { id: 6, id_rol: 1, id_permiso: 6 },
  { id: 7, id_rol: 1, id_permiso: 7 },
  { id: 8, id_rol: 1, id_permiso: 8 },
  { id: 9, id_rol: 1, id_permiso: 9 },
  { id: 10, id_rol: 1, id_permiso: 10 },
  { id: 11, id_rol: 1, id_permiso: 11 },
  { id: 12, id_rol: 1, id_permiso: 12 },
  { id: 13, id_rol: 1, id_permiso: 13 },
  { id: 14, id_rol: 1, id_permiso: 14 },
  { id: 15, id_rol: 1, id_permiso: 15 },
  { id: 16, id_rol: 1, id_permiso: 16 },
  { id: 17, id_rol: 1, id_permiso: 17 },
  { id: 18, id_rol: 1, id_permiso: 18 },
  { id: 19, id_rol: 1, id_permiso: 19 },
  { id: 20, id_rol: 1, id_permiso: 20 }
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
