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
  { id: 20, id_rol: 1, id_permiso: 20 },
  { id: 21, id_rol: 1, id_permiso: 21 },
  { id: 22, id_rol: 1, id_permiso: 22 },
  { id: 23, id_rol: 1, id_permiso: 23 },
  { id: 24, id_rol: 1, id_permiso: 24 },
  { id: 25, id_rol: 1, id_permiso: 25 },
  { id: 26, id_rol: 1, id_permiso: 26 },
  { id: 27, id_rol: 1, id_permiso: 27 },
  { id: 28, id_rol: 1, id_permiso: 29 },
  { id: 29, id_rol: 1, id_permiso: 30 },
  { id: 30, id_rol: 1, id_permiso: 31 },
  { id: 31, id_rol: 1, id_permiso: 32 },
  { id: 32, id_rol: 1, id_permiso: 33 },
  { id: 33, id_rol: 1, id_permiso: 34 },
  { id: 34, id_rol: 1, id_permiso: 35 },
  { id: 35, id_rol: 1, id_permiso: 36 },
  { id: 36, id_rol: 1, id_permiso: 37 },
  { id: 37, id_rol: 1, id_permiso: 38 },
  { id: 38, id_rol: 1, id_permiso: 39 },
  { id: 39, id_rol: 1, id_permiso: 40 },
  { id: 40, id_rol: 1, id_permiso: 41 },

  { id: 41, id_rol: 2, id_permiso: 17 },
  { id: 42, id_rol: 2, id_permiso: 18 },
  { id: 43, id_rol: 2, id_permiso: 19 },
  { id: 44, id_rol: 2, id_permiso: 20 },
  { id: 45, id_rol: 2, id_permiso: 21 },
  { id: 46, id_rol: 2, id_permiso: 22 },
  { id: 47, id_rol: 2, id_permiso: 27 },
  { id: 48, id_rol: 2, id_permiso: 28 },
  { id: 49, id_rol: 2, id_permiso: 29 },
  { id: 50, id_rol: 2, id_permiso: 30 },
  { id: 51, id_rol: 2, id_permiso: 31 },
  { id: 52, id_rol: 2, id_permiso: 32 },
  { id: 53, id_rol: 2, id_permiso: 33 },
  { id: 54, id_rol: 2, id_permiso: 34 },
  { id: 55, id_rol: 2, id_permiso: 35 },
  { id: 56, id_rol: 2, id_permiso: 36 },
  { id: 57, id_rol: 2, id_permiso: 37 },
  { id: 58, id_rol: 2, id_permiso: 38 },
  { id: 59, id_rol: 2, id_permiso: 39 },
  { id: 60, id_rol: 2, id_permiso: 40 },
  { id: 61, id_rol: 2, id_permiso: 41 },

  { id: 62, id_rol: 3, id_permiso: 22 },
  { id: 63, id_rol: 3, id_permiso: 27 },
  { id: 64, id_rol: 3, id_permiso: 28 },
  { id: 65, id_rol: 3, id_permiso: 29 },
  { id: 66, id_rol: 3, id_permiso: 30 },
  { id: 67, id_rol: 3, id_permiso: 31 },
  { id: 68, id_rol: 3, id_permiso: 32 },
  { id: 69, id_rol: 3, id_permiso: 33 },
  { id: 70, id_rol: 3, id_permiso: 34 },
  { id: 71, id_rol: 3, id_permiso: 35 },
  { id: 72, id_rol: 3, id_permiso: 36 },
  { id: 73, id_rol: 3, id_permiso: 37 },
  { id: 74, id_rol: 3, id_permiso: 38 },
  { id: 75, id_rol: 3, id_permiso: 39 },
  { id: 76, id_rol: 3, id_permiso: 40 },
  { id: 77, id_rol: 3, id_permiso: 41 },

  { id: 78, id_rol: 4, id_permiso: 22 },
  { id: 79, id_rol: 4, id_permiso: 27 },
  { id: 80, id_rol: 4, id_permiso: 28 },
  { id: 81, id_rol: 4, id_permiso: 29 },
  { id: 82, id_rol: 4, id_permiso: 30 },
  { id: 83, id_rol: 4, id_permiso: 31 },
  { id: 84, id_rol: 4, id_permiso: 32 },
  { id: 85, id_rol: 4, id_permiso: 33 },
  { id: 86, id_rol: 4, id_permiso: 34 },
  { id: 87, id_rol: 4, id_permiso: 35 },
  { id: 88, id_rol: 4, id_permiso: 36 },
  { id: 89, id_rol: 4, id_permiso: 37 },
  { id: 90, id_rol: 4, id_permiso: 38 },
  { id: 91, id_rol: 4, id_permiso: 39 },
  { id: 92, id_rol: 4, id_permiso: 40 },
  { id: 93, id_rol: 4, id_permiso: 41 },

  { id: 94, id_rol: 5, id_permiso: 22 },
  { id: 95, id_rol: 5, id_permiso: 27 },
  { id: 96, id_rol: 5, id_permiso: 28 },
  { id: 97, id_rol: 5, id_permiso: 29 },
  { id: 98, id_rol: 5, id_permiso: 30 },
  { id: 99, id_rol: 5, id_permiso: 31 },
  { id: 100, id_rol: 5, id_permiso: 32 },
  { id: 101, id_rol: 5, id_permiso: 33 },
  { id: 102, id_rol: 5, id_permiso: 34 },
  { id: 103, id_rol: 5, id_permiso: 35 },
  { id: 104, id_rol: 5, id_permiso: 36 },
  { id: 105, id_rol: 5, id_permiso: 37 },
  { id: 106, id_rol: 5, id_permiso: 38 },
  { id: 107, id_rol: 5, id_permiso: 39 },
  { id: 108, id_rol: 5, id_permiso: 40 },
  { id: 109, id_rol: 5, id_permiso: 41 }
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
