'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, nombre: 'usuarios:crear', descripcion: 'Permiso para crear usuarios por entidad', estado: 'ACTIVO' },
  { id: 2, nombre: 'usuarios:listar', descripcion: 'Permiso para leer usuarios por entidad', estado: 'ACTIVO' },
  { id: 3, nombre: 'usuarios:actualizar', descripcion: 'Permiso para actualizar usuarios por entidad', estado: 'ACTIVO' },
  { id: 4, nombre: 'usuarios:eliminar', descripcion: 'Permiso para eliminar usuarios por entidad', estado: 'ACTIVO' },

  { id: 5, nombre: 'menus:listar', descripcion: 'Permiso para listar menus', estado: 'ACTIVO' },
  { id: 6, nombre: 'menus:crear', descripcion: 'Permiso para crear menus', estado: 'ACTIVO' },
  { id: 7, nombre: 'menus:actualizar', descripcion: 'Permiso para actualizar menus', estado: 'ACTIVO' },
  { id: 8, nombre: 'menus:eliminar', descripcion: 'Permiso para eliminar menus', estado: 'ACTIVO' },

  { id: 9, nombre: 'roles:listar', descripcion: 'Permiso para listar roles', estado: 'ACTIVO' },
  { id: 10, nombre: 'roles:crear', descripcion: 'Permiso para crear roles', estado: 'ACTIVO' },
  { id: 11, nombre: 'roles:actualizar', descripcion: 'Permiso para actualizar roles', estado: 'ACTIVO' },
  { id: 12, nombre: 'roles:eliminar', descripcion: 'Permiso para eliminar roles', estado: 'ACTIVO' },

  { id: 13, nombre: 'permisos:listar', descripcion: 'Permiso para listar permisos', estado: 'ACTIVO' },
  { id: 14, nombre: 'permisos:crear', descripcion: 'Permiso para crear permisos', estado: 'ACTIVO' },
  { id: 15, nombre: 'permisos:actualizar', descripcion: 'Permiso para actualizar permisos', estado: 'ACTIVO' },
  { id: 16, nombre: 'permisos:eliminar', descripcion: 'Permiso para eliminar permisos', estado: 'ACTIVO' },

  { id: 17, nombre: 'entidades:listar', descripcion: 'Permiso para listar entidades', estado: 'ACTIVO' },
  { id: 18, nombre: 'entidades:crear', descripcion: 'Permiso para crear entidades', estado: 'ACTIVO' },
  { id: 19, nombre: 'entidades:actualizar', descripcion: 'Permiso para actualizar entidades', estado: 'ACTIVO' },
  { id: 20, nombre: 'entidades:eliminar', descripcion: 'Permiso para eliminar entidades', estado: 'ACTIVO' }
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
