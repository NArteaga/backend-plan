'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, nombre: 'Inicio', ruta: 'inicio', icono: 'home', orden: 1, id_menu: null, estado: 'ACTIVO'  },
  { id: 2, nombre: 'Roles', ruta: 'roles', icono: 'shield', orden: 4, id_menu: null, estado: 'ACTIVO'  },
  { id: 3, nombre: 'Usuarios', ruta: 'usuarios', icono: 'people', orden: 5, id_menu: null, estado: 'ACTIVO'  },
  { id: 4, nombre: 'Menus', ruta: 'menus', icono: 'menu', orden: 6, id_menu: null, estado: 'ACTIVO'  }

];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_menu', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_menu_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },

  down (queryInterface, Sequelize) {}
};
