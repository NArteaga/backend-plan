'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  {
    id                 : 1,
    usuario            : 'admin@gmail.com',
    contrasena         : 'Developer',
    nombres            : 'Admin',
    primer_apellido    : '',
    segundo_apellido   : '',
    numero_documento   : '',
    correo_electronico : 'admin@gmail.com',
    celular            : '',
    estado             : 'ACTIVO',
    id_rol             : 1
  }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_usuario', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_usuario_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
