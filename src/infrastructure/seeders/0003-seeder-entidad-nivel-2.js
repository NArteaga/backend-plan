'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: 2, id_entidad: 1, nivel: 2, nombre: 'DIRECCIÓN GENERAL DE ASUNTOS ADMINISTRATIVOS ', sigla: 'DGGA', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 3, id_entidad: 1, nivel: 2, nombre: 'DIRECCIÓN GENERAL DE ASUNTOS JURIDICOS', sigla: 'DGAJ', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 4, id_entidad: 1, nivel: 2, nombre: 'DIRECCIÓN GENERAL DE PLANIFICACION', sigla: 'DGP', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 5, id_entidad: 1, nivel: 2, nombre: 'VICEMINISTERIO DE JUSTICIA Y DERECHOS FUNDAMENTALES', sigla: 'VJDF', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 6, id_entidad: 1, nivel: 2, nombre: 'VICEMINISTERIO DE JUSTICIA INDIGENA ORIGINARIO CAMPESINA', sigla: 'VJIOC', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 7, id_entidad: 1, nivel: 2, nombre: 'VICEMINISTERIO DE IGUALDAD DE OPORTUNIDADES', sigla: 'VIO', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 8, id_entidad: 1, nivel: 2, nombre: 'VICEMINISTERIO DE DEFENSA DE LOS DERECHOS DEL USUARIO Y DEL CONSUMIDOR', sigla: 'VDDUC', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  },
  { id: 9, id_entidad: 1, nivel: 2, nombre: 'VICEMINISTERIO DE TRANSPARENCIA INSTITUCIONAL Y LUCHA CONTRA LA CORRUPCIÓN', sigla: 'VTILCC', direccion: 'Direccion 1', url_logo: 'https://pbs.twimg.com/profile_images/1351275781515784196/EINZDxAk_400x400.png',    telefono: '78745815',    estado: 'ACTIVO'  }
];

// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_entidad', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "sys_entidad_id_seq" RESTART WITH ${items.length + 2}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
        // logger.error(error)
      });
  },

  down (queryInterface, Sequelize) { }
};
