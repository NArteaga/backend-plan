'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: 1,  nombre: 'MINISTERIO DE JUSTICIA ', descripcion: 'MINISTERIO DE JUSTICIA Y TRANSPARENCIA INSTITUCIONAL', sigla: 'MJTI', web: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png', email: 'min@gmail.com',   direccion: 'Av. 16 de Julio NRO 2020',  telefono: '78745815',    estado: 'ACTIVO' , nivel: 1,  id_entidad: null },
  { id: 2,  nombre: 'MINISTERIO DE TRABAJO ', descripcion: 'MINISTERIO DE TRABAJO', sigla: 'MINTRA', web: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png', email: 'trabajo@gmail.com',   direccion: 'Calle Onda Nro. 1145',  telefono: '60525634',    estado: 'ACTIVO' , nivel: 1,  id_entidad: null }
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
