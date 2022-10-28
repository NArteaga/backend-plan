'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: '745034da-06cb-4d98-8fee-4c982adfbb22',  nombre: 'MINISTERIO DE JUSTICIA ', email: 'min@gmail.com', servicio: '[]', lenguas: '[]',   direccion: 'Av. 16 de Julio NRO 2020',  telefono: '78745815',    estado: 'ACTIVO' },
  { id: '3f5faa14-cd56-465e-afd4-f81415859982',  nombre: 'MINISTERIO DE TRABAJO ', email: 'trabajo@gmail.com', servicio: '[]', lenguas: '[]',   direccion: 'Calle Onda Nro. 1145',  telefono: '60525634',    estado: 'ACTIVO' }
];

// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_entidad', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
        // logger.error(error)
      });
  },

  down (queryInterface, Sequelize) { }
};
