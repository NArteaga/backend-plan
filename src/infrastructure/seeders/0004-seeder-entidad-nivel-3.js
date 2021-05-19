'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: 10, id_entidad: 5, nivel: 3, nombre: 'DIRECCION GENERAL DE DERECHO INTERNACIONAL', sigla: 'DGDI', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 11, id_entidad: 5, nivel: 3, nombre: 'DIRECCION GENERAL DE DESARROLLO CONSTITUCIONAL', sigla: 'DGDC', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 12, id_entidad: 5, nivel: 3, nombre: 'DIRECCION GENERAL DE JUSTICIA Y DERECHOS FUNDAMENTALES', sigla: 'DGJDF', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 13, id_entidad: 5, nivel: 3, nombre: 'DIRECCION GENERAL DE REGISTRO PUBLICO DE LA ABOGACIA', sigla: 'DGRPA', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 14, id_entidad: 6, nivel: 3, nombre: 'DIRECCIÓN GENERAL DE JUSTICIA INDIGENA ORIGINARIO CAMPESINA', sigla: 'DGJIOC', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 15, id_entidad: 7, nivel: 3, nombre: 'DIRECCIÓN GENERAL DE NIÑEZ Y PERSONAS ADULTAS MAYORES', sigla: 'DGNAM', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 16, id_entidad: 7, nivel: 3, nombre: 'DIRECCIÓN GENERAL DE PERSONAS CON DISCAPACIDAD', sigla: 'DGPCD', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 17, id_entidad: 7, nivel: 3, nombre: 'DIRECCIÓN GENERAL DE PREVENCION Y ELIMINACION DE TODA FORMA DE VIOLENCIA EN RAZON DE GENERO Y GENERACIONAL', sigla: 'DGPEFVGG', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 18, id_entidad: 7, nivel: 3, nombre: 'DIRECCION PLURINACIONAL DE LA JUVENTUD', sigla: 'DPJ', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 19, id_entidad: 8, nivel: 3, nombre: 'DIRECCIÓN GENERAL DE DEFENSA DE LOS DERECHOS DEL USUARIO Y CONSUMIDOR', sigla: 'DGDDUC', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 20, id_entidad: 9, nivel: 3, nombre: 'DIRECCION GENERAL DE LUCHA CONTRA LA CORRUPCION', sigla: 'DGLCC', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 21, id_entidad: 9, nivel: 3, nombre: 'DIRECCION GENERAL DE PREVENCION, PROMOCION DE LA ETICA Y TRANSPARENCIA', sigla: 'DGPPET', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  }
];

// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_entidad', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_entidad_id_seq" RESTART WITH ${items.length + 8}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
        // logger.error(error)
      });
  },

  down (queryInterface, Sequelize) { }
};
