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
  { id: 18, nombre: 'entidades:listarpor', descripcion: 'Permiso para listar entidad por id', estado: 'ACTIVO' },
  { id: 19, nombre: 'entidades:crear', descripcion: 'Permiso para crear entidade', estado: 'ACTIVO' },
  { id: 20, nombre: 'entidades:actualizar', descripcion: 'Permiso para actualizar entidade', estado: 'ACTIVO' },
  { id: 21, nombre: 'entidades:eliminar', descripcion: 'Permiso para eliminar entidade', estado: 'ACTIVO' },

  { id: 22, nombre: 'formulario:listar', descripcion: 'Permiso para listar formularios', estado: 'ACTIVO' },
  { id: 23, nombre: 'formulario:listarpor', descripcion: 'Permiso para listar formulario por id', estado: 'ACTIVO' },
  { id: 24, nombre: 'formulario:crear', descripcion: 'Permiso para crear formulario', estado: 'ACTIVO' },
  { id: 25, nombre: 'formulario:actualizar', descripcion: 'Permiso para actualizar formulario', estado: 'ACTIVO' },
  { id: 26, nombre: 'formulario:eliminar', descripcion: 'Permiso para eliminar formulario', estado: 'ACTIVO' },

  { id: 27, nombre: 'componente:listar', descripcion: 'Permiso para listar componentes', estado: 'ACTIVO' },
  { id: 28, nombre: 'componente:listarpor', descripcion: 'Permiso para listar componente por id', estado: 'ACTIVO' },
  { id: 29, nombre: 'componente:crear', descripcion: 'Permiso para crear componente', estado: 'ACTIVO' },
  { id: 30, nombre: 'componente:actualizar', descripcion: 'Permiso para actualizar componente', estado: 'ACTIVO' },
  { id: 31, nombre: 'componente:eliminar', descripcion: 'Permiso para eliminar componente', estado: 'ACTIVO' },

  { id: 32, nombre: 'cite:listar', descripcion: 'Permiso para listar cites', estado: 'ACTIVO' },
  { id: 33, nombre: 'cite:listarpor', descripcion: 'Permiso para listar cite por id', estado: 'ACTIVO' },
  { id: 34, nombre: 'cite:crear', descripcion: 'Permiso para crear cite', estado: 'ACTIVO' },
  { id: 35, nombre: 'cite:actualizar', descripcion: 'Permiso para actualizar cite', estado: 'ACTIVO' },
  { id: 36, nombre: 'cite:eliminar', descripcion: 'Permiso para eliminar cite', estado: 'ACTIVO' },
  { id: 37, nombre: 'cite:generacite', descripcion: 'Genera cite por Entidad', estado: 'ACTIVO' },

  { id: 38, nombre: 'entidadcomponente:listar', descripcion: 'Permiso para listar entidadcomponentes', estado: 'ACTIVO' },
  { id: 39, nombre: 'entidadcomponente:listarpor', descripcion: 'Permiso para listar entidadcomponente por id', estado: 'ACTIVO' },
  { id: 40, nombre: 'entidadcomponente:crear', descripcion: 'Permiso para crear entidadcomponente', estado: 'ACTIVO' },
  { id: 41, nombre: 'entidadcomponente:actualizar', descripcion: 'Permiso para actualizar entidadcomponente', estado: 'ACTIVO' },
  { id: 42, nombre: 'entidadcomponente:eliminar', descripcion: 'Permiso para eliminar entidadcomponente', estado: 'ACTIVO' },
  
  { id: 43, nombre: 'persona:personasegip', descripcion: 'Permiso para listar persona por CI', estado: 'ACTIVO' },

  { id: 44, nombre: 'formulariodatos:listar', descripcion: 'Permiso para listar formulariodatos por CI', estado: 'ACTIVO' },
  { id: 45, nombre: 'formulariodatos:listarpor', descripcion: 'Permiso para listar formulariodatos por id', estado: 'ACTIVO' },
  { id: 46, nombre: 'formulariodatos:crear', descripcion: 'Permiso para crear formulariodatos', estado: 'ACTIVO' },
  { id: 47, nombre: 'formulariodatos:actualizar', descripcion: 'Permiso para actualizar formulariodatos', estado: 'ACTIVO' },
  { id: 48, nombre: 'formulariodatos:eliminar', descripcion: 'Permiso para eliminar formulariodatos', estado: 'ACTIVO' },

  { id: 49, nombre: 'flujoplantilla:listar', descripcion: 'Permiso para listar flujoplantillas', estado: 'ACTIVO' },
  { id: 50, nombre: 'flujoplantilla:listarpor', descripcion: 'Permiso para listar flujoplantilla por id', estado: 'ACTIVO' },
  { id: 51, nombre: 'flujoplantilla:crear', descripcion: 'Permiso para crear flujoplantilla', estado: 'ACTIVO' },
  { id: 52, nombre: 'flujoplantilla:actualizar', descripcion: 'Permiso para actualizar flujoplantilla', estado: 'ACTIVO' },
  { id: 53, nombre: 'flujoplantilla:eliminar', descripcion: 'Permiso para eliminar flujoplantilla', estado: 'ACTIVO' },
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
