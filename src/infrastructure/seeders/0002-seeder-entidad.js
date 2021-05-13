'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: 1, nombre: 'Ministerio de justicia y Transparencia Institucional', sigla: 'MJTI', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png', telefono: '78745815', estado: 'ACTIVO' }
];

// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_entidad', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_entidad_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
        // logger.error(error)
      });
  },

  down (queryInterface, Sequelize) { }
};
