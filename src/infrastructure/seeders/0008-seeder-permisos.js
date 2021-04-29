'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { access: true, create: true, read: true, update: true, delete: true, csv: false, id_modulo: 1, id_rol: 1 },
  { access: true, create: true, read: true, update: true, delete: true, csv: false, id_modulo: 2, id_rol: 1 },
  { access: true, create: true, read: true, update: true, delete: true, csv: false, id_modulo: 3, id_rol: 1 },
  { access: true, create: true, read: true, update: true, delete: true, csv: false, id_modulo: 4, id_rol: 1 },
  { access: true, create: true, read: true, update: true, delete: true, csv: false, id_modulo: 5, id_rol: 1 }

];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_permisos', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_permisos_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },

  down (queryInterface, Sequelize) {}
};
