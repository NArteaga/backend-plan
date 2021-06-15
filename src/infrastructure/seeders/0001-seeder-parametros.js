'use strict';

const { setTimestampsSeeder } = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, grupo: 'CONFIG', codigo: 'TK', nombre: 'TIEMPO DEL TOKEN', descripcion: '240', estado: 'ACTIVO' },

  // Tipo de documento
  { id: 4, grupo: 'TIPO_DOCUMENTO', codigo: 'CIEXT', nombre: 'CEDULA DE IDENTIDAD DE EXTRANJERO', estado: 'ACTIVO' },
  { id: 5, grupo: 'TIPO_DOCUMENTO', codigo: 'CI', nombre: 'CEDULA DE IDENTIDAD', estado: 'ACTIVO' },
  { id: 6, grupo: 'TIPO_DOCUMENTO', codigo: 'PAS', nombre: 'PASAPORTE', estado: 'ACTIVO' },
  { id: 7, grupo: 'TIPO_DOCUMENTO', codigo: 'NIT', nombre: 'NUMERO DE IDENTIFICACION TRIBUTARIO', estado: 'ACTIVO' },
  { id: 8, grupo: 'TIPO_DOCUMENTO', codigo: 'NITE', nombre: 'NUMERO DE IDENTIFICACION TRIBUTARIA EXTRANJERA', estado: 'ACTIVO' }

];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_parametro', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_parametro_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
