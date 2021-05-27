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

  { id: 17, nombre: 'reuniones:listar', descripcion: 'Permiso para listar reuniones', estado: 'ACTIVO' },
  { id: 18, nombre: 'reuniones:crear', descripcion: 'Permiso para crear reuniones', estado: 'ACTIVO' },
  { id: 19, nombre: 'reuniones:actualizar', descripcion: 'Permiso para actualizar reuniones', estado: 'ACTIVO' },
  { id: 20, nombre: 'reuniones:eliminar', descripcion: 'Permiso para eliminar reuniones', estado: 'ACTIVO' },
  { id: 21, nombre: 'reuniones:generarPdf', descripcion: 'Permiso para generar el pdf de una reuniones', estado: 'ACTIVO' },

  { id: 22, nombre: 'entidades:listar', descripcion: 'Permiso para listar entidades', estado: 'ACTIVO' },
  { id: 23, nombre: 'entidades:crear', descripcion: 'Permiso para crear entidades', estado: 'ACTIVO' },
  { id: 24, nombre: 'entidades:actualizar', descripcion: 'Permiso para actualizar entidades', estado: 'ACTIVO' },
  { id: 25, nombre: 'entidades:eliminar', descripcion: 'Permiso para eliminar entidades', estado: 'ACTIVO' },
  { id: 26, nombre: 'entidades:sinFiltros', descripcion: 'Permiso para listar sin filtros entidades', estado: 'ACTIVO' },

  { id: 27, nombre: 'temas:listar', descripcion: 'Permiso para listar temas', estado: 'ACTIVO' },
  { id: 28, nombre: 'temas:crear', descripcion: 'Permiso para crear temas', estado: 'ACTIVO' },
  { id: 29, nombre: 'temas:actualizar', descripcion: 'Permiso para actualizar temas', estado: 'ACTIVO' },
  { id: 30, nombre: 'temas:eliminar', descripcion: 'Permiso para eliminar temas', estado: 'ACTIVO' },
  { id: 31, nombre: 'temas:sinFiltros', descripcion: 'Permiso para listar sin filtros temas', estado: 'ACTIVO' },

  { id: 32, nombre: 'etiquetas:listar', descripcion: 'Permiso para listar etiquetas', estado: 'ACTIVO' },
  { id: 33, nombre: 'etiquetas:crear', descripcion: 'Permiso para crear etiquetas', estado: 'ACTIVO' },
  { id: 34, nombre: 'etiquetas:actualizar', descripcion: 'Permiso para actualizar etiquetas', estado: 'ACTIVO' },
  { id: 35, nombre: 'etiquetas:eliminar', descripcion: 'Permiso para eliminar etiquetas', estado: 'ACTIVO' },
  { id: 36, nombre: 'etiquetas:sinFiltros', descripcion: 'Permiso para listar sin filtros etiquetas', estado: 'ACTIVO' },

  { id: 37, nombre: 'acciones:listar', descripcion: 'Permiso para listar acciones', estado: 'ACTIVO' },
  { id: 38, nombre: 'acciones:crear', descripcion: 'Permiso para crear acciones', estado: 'ACTIVO' },
  { id: 39, nombre: 'acciones:actualizar', descripcion: 'Permiso para actualizar acciones', estado: 'ACTIVO' },
  { id: 40, nombre: 'acciones:eliminar', descripcion: 'Permiso para eliminar acciones', estado: 'ACTIVO' },
  { id: 41, nombre: 'acciones:sinFiltros', descripcion: 'Permiso para listar sin filtros acciones', estado: 'ACTIVO' },

  { id: 42, nombre: 'tareas:eliminadas', descripcion: 'Permiso para listar las acciones eliminadas', estado: 'ACTIVO' }

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
