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
    id_entidad         : 2,
    cargo              : 'DIRECTOR (A) GENERAL DE ASUNTOS ADMINISTRATIVOS',
    usuario            : 'jorge.lopez',
    contrasena         : bcrypt.hashSync('2685150', saltRounds),
    nombres            : 'JORGE VALENTIN',
    primer_apellido    : 'LOPEZ',
    segundo_apellido   : 'ARENAS',
    numero_documento   : '2685150',
    telefono           : '70622799',
    correo_electronico : 'jorge.lopez@justicia.gob.bo',
    celular            : '70622799',
    estado             : 'ACTIVO'
  },
  {
    id                 : 3,
    id_entidad         : 3,
    cargo              : 'DIRECTOR (A) GENERAL DE ASUNTOS JURIDICOS',
    usuario            : 'martha.huanca',
    contrasena         : bcrypt.hashSync('4800403', saltRounds),
    nombres            : 'MARTHA PAULA',
    primer_apellido    : 'HUANCA',
    segundo_apellido   : 'HILARI',
    numero_documento   : '4800403',
    correo_electronico : 'martha.huanca@justicia.gob.bo',
    celular            : '71558431',
    estado             : 'ACTIVO'
  },
  {
    id                 : 4,
    id_entidad         : 19,
    cargo              : 'DIRECTOR (A) GENERAL DE DEFENSA DE LOS DERECHOS DEL USUARIO Y CONSUMIDOR',
    usuario            : 'paola.soria',
    contrasena         : bcrypt.hashSync('4766295', saltRounds),
    nombres            : 'PAOLA FELIPA',
    primer_apellido    : 'SORIA',
    segundo_apellido   : 'VARGAS',
    numero_documento   : '4766295',
    correo_electronico : 'paola.soria@justicia.gob.bo',
    celular            : '78814201',
    estado             : 'ACTIVO'
  },
  {
    id                 : 5,
    id_entidad         : 11,
    cargo              : 'DIRECTOR (A) GENERAL DE DESARROLLO CONSTITUCIONAL',
    usuario            : 'franz.chavez',
    contrasena         : bcrypt.hashSync('486415', saltRounds),
    nombres            : 'FRANZ JAIME',
    primer_apellido    : 'CHAVEZ',
    segundo_apellido   : 'SANDY',
    numero_documento   : '486415',
    correo_electronico : 'franz.chavez@justicia.gob.bo',
    celular            : '71904567',
    estado             : 'ACTIVO'
  },
  {
    id                 : 6,
    id_entidad         : 14,
    cargo              : 'DIRECTOR (A) GENERAL DE JUSTICIA INDIGENA ORIGINARIO CAMPESINA',
    usuario            : 'martin.canaza',
    contrasena         : bcrypt.hashSync('6131544', saltRounds),
    nombres            : 'MARTIN EDDY',
    primer_apellido    : 'CANAZA',
    segundo_apellido   : 'BARRENOZO',
    numero_documento   : '6131544',
    correo_electronico : 'martin.canaza@justicia.gob.bo',
    celular            : '73536636',
    estado             : 'ACTIVO'
  },
  {
    id                 : 7,
    id_entidad         : 12,
    cargo              : 'DIRECTOR (A) GENERAL DE JUSTICIA Y DERECHOS FUNDAMENTALES',
    usuario            : 'marco.gonzales',
    contrasena         : bcrypt.hashSync('2280504', saltRounds),
    nombres            : 'MARCO ANTONIO',
    primer_apellido    : 'GONZALES',
    segundo_apellido   : 'ANGULO',
    numero_documento   : '2280504',
    correo_electronico : 'marco.gonzales@justicia.gob.bo',
    celular            : '76566600',
    estado             : 'ACTIVO'
  },
  {
    id                 : 8,
    id_entidad         : 15,
    cargo              : 'DIRECTOR (A) GENERAL DE NIÑEZ Y PERSONAS ADULTAS MAYORES',
    usuario            : 'nancy.duran',
    contrasena         : bcrypt.hashSync('3333962', saltRounds),
    nombres            : 'NANCY NINOSKA',
    primer_apellido    : 'DURAN',
    segundo_apellido   : 'BURGOA',
    numero_documento   : '3333962',
    correo_electronico : 'nancy.duran@justicia.gob.bo',
    celular            : '70514476',
    estado             : 'ACTIVO'
  },
  {
    id                 : 9,
    id_entidad         : 16,
    cargo              : 'DIRECTOR (A) GENERAL DE PERSONAS CON DISCAPACIDAD',
    usuario            : 'sonia.zaconeta',
    contrasena         : bcrypt.hashSync('2721838', saltRounds),
    nombres            : 'SONIA ROXANA',
    primer_apellido    : 'ZACONETA',
    segundo_apellido   : 'MOLINA',
    numero_documento   : '2721838',
    telefono           : '2725086',
    correo_electronico : 'roxana.zaconeta@justicia.gob.bo',
    celular            : '79987127  /  73066251',
    estado             : 'ACTIVO'
  },
  {
    id                 : 10,
    id_entidad         : 4,
    cargo              : 'DIRECTOR (A) GENERAL DE PLANIFICACION',
    usuario            : 'juan.salmon',
    contrasena         : bcrypt.hashSync('3445374', saltRounds),
    nombres            : 'JUAN JOSE',
    primer_apellido    : 'SALMON',
    segundo_apellido   : 'BURGOS',
    numero_documento   : '3445374',
    correo_electronico : 'juan.salmon@justicia.gob.bo',
    celular            : '76752275',
    estado             : 'ACTIVO'
  },
  {
    id                 : 11,
    id_entidad         : 17,
    cargo              : 'DIRECTOR (A) GENERAL DE PREVENCION Y ELIMINACION DE TODA FORMA DE VIOLENCIA EN RAZON DE GENERO Y GENERACIONAL',
    usuario            : 'claudia.pena',
    contrasena         : bcrypt.hashSync('3270040', saltRounds),
    nombres            : 'CLAUDIA STACY',
    primer_apellido    : 'PEÑA',
    segundo_apellido   : 'CLAROS',
    numero_documento   : '3270040',
    telefono           : ' ninguno',
    correo_electronico : 'claudia.pena@justicia.gob.bo',
    celular            : '79675777',
    estado             : 'ACTIVO'
  },
  {
    id                 : 12,
    id_entidad         : 18,
    cargo              : 'DIRECTOR (A) PLURINACIONAL DE LA JUVENTUD',
    usuario            : 'kely.aruquipa',
    contrasena         : bcrypt.hashSync('7308960', saltRounds),
    nombres            : 'KELY MANUELA',
    primer_apellido    : 'ARUQUIPA',
    segundo_apellido   : 'ARELLANO',
    numero_documento   : '7308960',
    correo_electronico : 'kely.aruquipa@justicia.gob.bo',
    celular            : '72491407',
    estado             : 'ACTIVO'
  },
  {
    id                 : 13,
    id_entidad         : 10,
    cargo              : 'DIRECTOR GENERAL DE DERECHO INTERNACIONAL',
    usuario            : 'sydney.morales',
    contrasena         : bcrypt.hashSync('5075409', saltRounds),
    nombres            : 'SYDNEY EDSON',
    primer_apellido    : 'MORALES',
    segundo_apellido   : 'MEDINA',
    numero_documento   : '5075409',
    correo_electronico : 'sydney.morales@justicia.gob.bo',
    celular            : '77792820',
    estado             : 'ACTIVO'
  },
  {
    id                 : 14,
    id_entidad         : 20,
    cargo              : 'DIRECTOR GENERAL DE LUCHA CONTRA LA CORRUPCION',
    usuario            : 'luis.choque',
    contrasena         : bcrypt.hashSync('9947894', saltRounds),
    nombres            : 'LUIS ANTONIO',
    primer_apellido    : 'CHOQUE',
    segundo_apellido   : 'GUTIERREZ',
    numero_documento   : '9947894',
    correo_electronico : 'luis.choque@justicia.gob.bo',
    celular            : '77743659',
    estado             : 'ACTIVO'
  },
  {
    id                 : 15,
    id_entidad         : 21,
    cargo              : 'DIRECTOR GENERAL DE PREVENCION, PROMOCION DE ETICA Y TRANSPARENCIA',
    usuario            : 'yesenia.bustillos',
    contrasena         : bcrypt.hashSync('8301310', saltRounds),
    nombres            : 'YESENIA CINTHIA',
    primer_apellido    : 'BUSTILLOS',
    segundo_apellido   : 'ANDRADE',
    numero_documento   : '8301310',
    correo_electronico : 'yesenia.bustillos@justicia.gob.bo',
    celular            : '70550895',
    estado             : 'ACTIVO'
  },
  {
    id                 : 16,
    id_entidad         : 13,
    cargo              : 'DIRECTOR GENERAL DE REGISTRO PUBLICO DE LA ABOGACIA',
    usuario            : 'roberto.guzman',
    contrasena         : bcrypt.hashSync('3008714', saltRounds),
    nombres            : 'ROBERTO ALVARO',
    primer_apellido    : 'GUZMAN',
    segundo_apellido   : 'DURAN',
    numero_documento   : '3008714',
    correo_electronico : 'roberto.guzman@justicia.gob.bo',
    celular            : '67338780',
    estado             : 'ACTIVO'
  },
  {
    id                 : 17,
    id_entidad         : 1,
    cargo              : 'MINISTRO (A)',
    usuario            : 'ivan.lima',
    contrasena         : bcrypt.hashSync('4282344', saltRounds),
    nombres            : 'IVAN MANOLO',
    primer_apellido    : 'LIMA',
    segundo_apellido   : 'MAGNE',
    numero_documento   : '4282344',
    telefono           : '--',
    correo_electronico : 'ivan.lima@justicia.gob.bo',
    celular            : '71548825',
    estado             : 'ACTIVO'
  },
  {
    id                 : 18,
    id_entidad         : 7,
    cargo              : 'VICEMINISTRA (O) DE IGUALDAD DE OPORTUNIDADES',
    usuario            : 'miriam.huacani',
    contrasena         : bcrypt.hashSync('6889783', saltRounds),
    nombres            : 'MIRIAM JULIETA',
    primer_apellido    : 'HUACANI',
    segundo_apellido   : 'ZAPANA',
    numero_documento   : '6889783',
    correo_electronico : 'miriam.huacani@justicia.gob.bo',
    celular            : '71549069 - 78847854',
    estado             : 'ACTIVO'
  },
  {
    id                 : 19,
    id_entidad         : 6,
    cargo              : 'VICEMINISTRA (O) DE JUSTICIA INDIGENA ORIGINARIO CAMPESINA',
    usuario            : 'silvia.alarcon',
    contrasena         : bcrypt.hashSync('4630936', saltRounds),
    nombres            : 'SILVIA ',
    primer_apellido    : 'ALARCON',
    segundo_apellido   : 'HEREDIA',
    numero_documento   : '4630936',
    correo_electronico : 'silvia.alarcon@justicia.gob.bo',
    celular            : '75774410',
    estado             : 'ACTIVO'
  },
  {
    id                 : 20,
    id_entidad         : 8,
    cargo              : 'VICEMINISTRO (A) DE DEFENSA DE LOS DERECHOS DEL USUARIO Y DEL CONSUMIDOR',
    usuario            : 'felipe.silva',
    contrasena         : bcrypt.hashSync('2447763', saltRounds),
    nombres            : 'FELIPE JORGE',
    primer_apellido    : 'SILVA',
    segundo_apellido   : 'TRUJILLO',
    numero_documento   : '2447763',
    correo_electronico : 'jorge.silva@justicia.gob.bo',
    celular            : '76511401',
    estado             : 'ACTIVO'
  },
  {
    id                 : 21,
    id_entidad         : 5,
    cargo              : 'VICEMINISTRO (A) DE JUSTICIA Y DERECHOS FUNDAMENTALES',
    usuario            : 'cesar.siles',
    contrasena         : bcrypt.hashSync('2450947', saltRounds),
    nombres            : 'CESAR ADALID',
    primer_apellido    : 'SILES',
    segundo_apellido   : 'BAZAN',
    numero_documento   : '2450947',
    correo_electronico : 'cesar.siles@justicia.gob.bo',
    celular            : '77557226',
    estado             : 'ACTIVO'
  },
  {
    id                 : 22,
    id_entidad         : 9,
    cargo              : 'VICEMINISTRO (A) DE TRANSPARENCIA INSTITUCIONAL Y LUCHA CONTRA LA CORRUPCION',
    usuario            : 'julia.rios',
    contrasena         : bcrypt.hashSync('3425706', saltRounds),
    nombres            : 'JULIA SUSANA',
    primer_apellido    : 'RIOS',
    segundo_apellido   : 'LAGUNA',
    numero_documento   : '3425706',
    correo_electronico : 'julia.rios@justicia.gob.bo',
    celular            : '77546960',
    estado             : 'ACTIVO'
  },
  // Usuario
  {
    id                 : 23,
    id_entidad         : 1,
    cargo              : 'ASESOR(A) DE DESPACHO',
    usuario            : 'gonzalo.gutierrez',
    contrasena         : bcrypt.hashSync('3397508', saltRounds),
    nombres            : 'GONZALO HUMBERTO',
    primer_apellido    : 'GUTIERREZ',
    segundo_apellido   : 'MOLLARD',
    numero_documento   : '3397508',
    correo_electronico : 'gonzalo.gutierrez@justicia.gob.bo',
    celular            : '70518752',
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
