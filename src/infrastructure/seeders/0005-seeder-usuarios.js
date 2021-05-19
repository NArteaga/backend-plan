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
    usuario            : 'admin',
    contrasena         : bcrypt.hashSync('Developer', saltRounds),
    nombres            : 'Ivan',
    primer_apellido    : 'Ticona',
    segundo_apellido   : 'Castillo',
    numero_documento   : '',
    correo_electronico : 'admin@gmail.com',
    celular            : '',
    estado             : 'ACTIVO'
  },
  {
    id                 : 2,
    id_entidad         : 1,
    cargo              : 'MINISTRO (A)',
    usuario            : 'ivan.lima',
    contrasena         : bcrypt.hashSync('Developer', saltRounds),
    nombres            : 'IVAN MANOLO',
    primer_apellido    : 'LIMA',
    segundo_apellido   : 'MAGNE',
    numero_documento   : '',
    correo_electronico : 'ivan.lima@yopmail.com',
    celular            : '',
    estado             : 'ACTIVO'
  },
  {
    id                 : 3,
    id_entidad         : 8,
    cargo              : 'VICEMINISTRO (A) DE DEFENSA DE LOS DERECHOS DEL USUARIO Y DEL CONSUMIDOR',
    usuario            : 'jorge.silva',
    contrasena         : bcrypt.hashSync('Developer', saltRounds),
    nombres            : 'FELIPE JORGE',
    primer_apellido    : 'SILVA',
    segundo_apellido   : 'TRUJILLO',
    numero_documento   : '',
    correo_electronico : 'jorge.silva@yopmail.com',
    celular            : '',
    estado             : 'ACTIVO'
  },
  {
    id                 : 4,
    id_entidad         : 19,
    cargo              : 'DIRECTOR (A) GENERAL DE DEFENSA DE LOS DERECHOS DEL USUARIO Y CONSUMIDOR',
    usuario            : 'paola.vargas',
    contrasena         : bcrypt.hashSync('Developer', saltRounds),
    nombres            : 'PAOLA FELIPA',
    primer_apellido    : 'VARGAS',
    segundo_apellido   : 'SORIA',
    numero_documento   : '',
    correo_electronico : 'paola.vargas@yopmail.com',
    celular            : '',
    estado             : 'ACTIVO'
  },
  {
    id                 : 5,
    id_entidad         : 1,
    cargo              : 'CARGO',
    usuario            : 'jmendez',
    contrasena         : bcrypt.hashSync('Developer', saltRounds),
    nombres            : 'Juancho',
    primer_apellido    : 'Mendez',
    segundo_apellido   : 'Alaro',
    numero_documento   : '',
    correo_electronico : 'jmendez@gmail.com',
    celular            : '',
    estado             : 'ACTIVO'
  },
  {
    id                 : 6,
    id_entidad         : 1,
    cargo              : 'CARGO',
    usuario            : 'jquisbert',
    contrasena         : bcrypt.hashSync('Developer', saltRounds),
    nombres            : 'Juanjo',
    primer_apellido    : 'Quisbert',
    segundo_apellido   : 'Argandoña',
    numero_documento   : '',
    correo_electronico : 'jmendez@gmail.com',
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
