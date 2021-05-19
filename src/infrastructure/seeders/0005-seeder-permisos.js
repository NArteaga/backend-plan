'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  {id:1, nombre: 'usuario:crear', descripcion: 'Permiso para crear usuarios por entidad', estado: 'ACTIVO' },
  {id:2, nombre: 'usuario:leer', descripcion: 'Permiso para leer usuarios por entidad', estado: 'ACTIVO' },
  {id:3, nombre: 'usuario:actualizar', descripcion: 'Permiso para actualizar usuarios por entidad', estado: 'ACTIVO' },
  {id:4, nombre: 'usuario:eliminar', descripcion: 'Permiso para eliminar usuarios por entidad', estado: 'ACTIVO' }

];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_permiso', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_permiso_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },

  down (queryInterface, Sequelize) {}
};
