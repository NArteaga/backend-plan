'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: 1, id_entidad: 1, nombre: 'ROL SUPER ADMIN', descripcion: 'Rol administrador.', estado: 'ACTIVO' }
];

// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_rol', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_rol_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
        // logger.error(error)
      });
  },

  down (queryInterface, Sequelize) { }
};
