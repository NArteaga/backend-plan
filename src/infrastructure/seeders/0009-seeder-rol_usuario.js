'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: '556f20d7-8db4-437c-9606-27ae81aff072', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_usuario: '7171272e-b31b-4c34-9220-9f535c958c5c' },
  { id: '556f20d7-8db4-437c-9606-27ae81aff073', id_rol: 'b262ea52-ff10-4a86-8476-a910c25b079e', id_usuario: '67814739-4c21-4ab9-83b9-6d3ebfa0c7ef' },
];
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_rol_usuario', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
