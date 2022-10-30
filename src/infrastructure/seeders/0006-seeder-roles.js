'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', nombre: 'ROL SUPER ADMIN', descripcion: 'Rol administrador.', estado: 'ACTIVO' },
  // Red Funcional
  {
    id: "b262ea52-ff10-4a86-8476-a910c25b079e",
    nombre: "RED FUNCIONAL",
    descripcion: "MIEMBROS DE LA RED FUNCIONAL",
    estado: "ACTIVO",
  },
];

// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_rol', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
        // logger.error(error)
      });
  },

  down (queryInterface, Sequelize) { }
};
