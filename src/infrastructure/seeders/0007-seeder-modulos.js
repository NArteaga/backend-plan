'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, label: 'Dashboard', url: 'dashboard', ruta: 'dashboard', icono: 'dashboard', orden: 1, id_modulo: null, estado: 'ACTIVO', visible: true },
  { id: 2, label: 'Usuarios', url: 'usuario', ruta: 'usuarios', icono: 'people', orden: 2, id_modulo: null, estado: 'ACTIVO', visible: true },
  { id: 3, label: 'Roles', url: 'rol', ruta: 'roles', icono: 'people_alt', orden: 3, id_modulo: null, estado: 'ACTIVO', visible: true },
  { id: 4, label: 'Modulos y permiso', url: 'modulo', ruta: 'modulos', icono: 'security', orden: 4, id_modulo: null, estado: 'ACTIVO', visible: true },
  { id: 5, label: 'Parametros', url: 'parametro', ruta: 'parametros', icono: 'settings', orden: 5, id_modulo: null, estado: 'ACTIVO', visible: true }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('modulos', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "modulos_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },

  down (queryInterface, Sequelize) {}
};
