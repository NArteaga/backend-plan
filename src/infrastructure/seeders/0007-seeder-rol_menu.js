'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, id_rol: 1, id_menu: 1 },
  { id: 2, id_rol: 1, id_menu: 2 },
  { id: 3, id_rol: 1, id_menu: 3 },
  { id: 4, id_rol: 1, id_menu: 4 },
  { id: 5, id_rol: 1, id_menu: 5 },
  { id: 6, id_rol: 1, id_menu: 6 },
  { id: 7, id_rol: 1, id_menu: 7 },

  { id: 8, id_rol: 2, id_menu: 1 },
  { id: 9, id_rol: 2, id_menu: 2 },
  { id: 10, id_rol: 2, id_menu: 3 },
  { id: 11, id_rol: 2, id_menu: 4 },

  { id: 12, id_rol: 3, id_menu: 1 },
  { id: 13, id_rol: 3, id_menu: 2 },
  { id: 14, id_rol: 3, id_menu: 3 },

  { id: 15, id_rol: 4, id_menu: 1 },
  { id: 16, id_rol: 4, id_menu: 3 },

  { id: 17, id_rol: 5, id_menu: 1 },
  { id: 18, id_rol: 5, id_menu: 2 },
  { id: 19, id_rol: 5, id_menu: 3 },

  { id: 20, id_rol: 6, id_menu: 1 },
  { id: 21, id_rol: 6, id_menu: 2 },
  { id: 22, id_rol: 6, id_menu: 3 },
  { id: 23, id_rol: 6, id_menu: 4 }

];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_rol_menu', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_rol_menu_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },

  down (queryInterface, Sequelize) {}

};
