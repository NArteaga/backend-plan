'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  {
    id                 : 1,
    id_entidad         : 1,
    cargo              : 'CARGO',
    usuario            : 'admin',
    contrasena         : 'Developer',
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
    cargo              : 'CARGO',
    usuario            : 'jllusco',
    contrasena         : 'Developer',
    nombres            : 'Juan',
    primer_apellido    : 'Llusco',
    segundo_apellido   : 'Catacora',
    numero_documento   : '',
    correo_electronico : 'jllusco@gmail.com',
    celular            : '',
    estado             : 'ACTIVO'
  },
  {
    id                 : 3,
    id_entidad         : 1,
    cargo              : 'CARGO',
    usuario            : 'jmamani',
    contrasena         : 'Developer',
    nombres            : 'Juan',
    primer_apellido    : 'Mamani',
    segundo_apellido   : 'Mamani',
    numero_documento   : '',
    correo_electronico : 'jmamani@gmail.com',
    celular            : '',
    estado             : 'ACTIVO'
  },
  {
    id                 : 4,
    id_entidad         : 1,
    cargo              : 'CARGO',
    usuario            : 'itancara',
    contrasena         : 'Developer',
    nombres            : 'Ivan',
    primer_apellido    : 'Tancara',
    segundo_apellido   : 'Casilla',
    numero_documento   : '',
    correo_electronico : 'itancara@gmail.com',
    celular            : '',
    estado             : 'ACTIVO'
  },
  {
    id                 : 5,
    id_entidad         : 1,
    cargo              : 'CARGO',
    usuario            : 'jmendez',
    contrasena         : 'Developer',
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
    usuario            : 'jmendez',
    contrasena         : 'Developer',
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
