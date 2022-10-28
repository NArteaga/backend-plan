'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  {
    id           : 'ba67c95a-574d-48ac-acf1-909b8e26ac52',
    gestion      : 2022,
    descripcion  : null,
    ejecutando   : true,
    etapa        : null,
    estado       : 'ACTIVO',
    fecha_inicio : null,
    fecha_fin    : null
  }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('planificacion_gestion', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },

  down (queryInterface, Sequelize) {}

};
