'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, id_rol: 1, id_usuario: 1 },

  { id: 2, id_rol: 4, id_usuario: 2 },
  { id: 3, id_rol: 4, id_usuario: 3 },
  { id: 4, id_rol: 4, id_usuario: 4 },
  { id: 5, id_rol: 4, id_usuario: 5 },
  { id: 6, id_rol: 4, id_usuario: 6 },
  { id: 7, id_rol: 4, id_usuario: 7 },
  { id: 8, id_rol: 4, id_usuario: 8 },
  { id: 9, id_rol: 4, id_usuario: 9 },
  { id: 10, id_rol: 4, id_usuario: 10 },
  { id: 11, id_rol: 4, id_usuario: 11 },
  { id: 12, id_rol: 4, id_usuario: 12 },
  { id: 13, id_rol: 4, id_usuario: 13 },
  { id: 14, id_rol: 4, id_usuario: 14 },
  { id: 15, id_rol: 4, id_usuario: 15 },
  { id: 16, id_rol: 4, id_usuario: 16 },

  { id: 17, id_rol: 2, id_usuario: 17 },
  { id: 18, id_rol: 3, id_usuario: 18 },
  { id: 19, id_rol: 3, id_usuario: 19 },
  { id: 20, id_rol: 3, id_usuario: 20 },
  { id: 21, id_rol: 3, id_usuario: 21 },
  { id: 22, id_rol: 4, id_usuario: 22 }
];
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_rol_usuario', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_rol_usuario_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
