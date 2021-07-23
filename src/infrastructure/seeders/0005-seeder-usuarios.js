'use strict';

const { setTimestampsSeeder } = require('../lib/util');
const { saltRounds } = require('../../common/config/auth');
const bcrypt = require('bcrypt');

// Datos de producción
let items = [
  {
    id                 : 1,
    id_entidad         : 1,
    cargo              : 'CARGO',
    usuario            : 'admin@yopmail.com',
    contrasena         : bcrypt.hashSync('Developer', saltRounds),
    nombres            : 'Admin',
    primer_apellido    : 'Admin',
    segundo_apellido   : 'Admin',
    numero_documento   : '',
    correo_electronico : 'admin@yopmail.com',
    celular            : '',
    estado             : 'ACTIVO'
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
