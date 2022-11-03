'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: '6190597f-7fa6-4c39-bcc9-7a1441ba566a', nombre: 'Dashboard', ruta: 'dashboard', icono: 'dashboard', orden: 1, id_menu: null, estado: 'ACTIVO'  },
  { id: '6d2a65bd-a216-48d3-8964-de1fc7556ac2', nombre: 'Planificación', ruta: 'planificacion', icono: 'book', orden: 2, id_menu: null, estado: 'ACTIVO'  },
  { id: '6d2a65bd-a216-48d3-8964-de1fc7556ae4', nombre: 'Presupuesto', ruta: 'financiera', icono: 'request_quote', orden: 3, id_menu: null, estado: 'ACTIVO'  },
  { id: '039a897a-76dd-44c1-b3d7-9682df8f5342', nombre: 'Entidades', ruta: 'entidades', icono: 'business', orden: 4, id_menu: null, estado: 'ACTIVO'  },
  { id: '61d6d53b-ac65-41ac-bc54-3228f548f40a', nombre: 'Roles', ruta: 'roles', icono: 'group', orden: 5, id_menu: null, estado: 'ACTIVO'  },
  { id: 'ef6b99d0-0834-4d1e-86b0-207111744f98', nombre: 'Menus', ruta: 'menus', icono: 'menu', orden: 5, id_menu: null, estado: 'ACTIVO'  },
  { id: '6dc27435-bb49-48c8-b98d-ed9024d10ec5', nombre: 'Usuarios', ruta: 'usuarios', icono: 'people', orden: 6, id_menu: null, estado: 'ACTIVO'  },
  { id: 'a0882ff9-0d95-4d60-835d-85624f7a3469', nombre: 'Parametros', ruta: 'parametros', icono: 'settings', orden: 7, id_menu: null, estado: 'ACTIVO'  },
  { id: 'a0882ff9-0d95-4d60-835d-85624f7a3411', nombre: 'Interoperabilidad', ruta: 'interoperabilidad', icono: 'cloud_sync', orden: 8, id_menu: null, estado: 'ACTIVO'  },
  { id: 'bc1d7658-2a0c-4216-9400-ad33d2487bb2', nombre: 'Solicitudes - Red Funcional', ruta: 'red-funcional/solicitudes', icono: 'account_tree', orden: 2, id_menu: null, estado: 'ACTIVO' },
  { id: '598a59b5-e1a3-4438-b4c4-b62506722eff', nombre: 'Seguimiento de Solicitudes - Red Funcional', ruta: 'red-funcional/solicitudes/seguimiento', icono: 'account_tree', orden: 2, id_menu: null, estado: 'ACTIVO' }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_menu', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },

  down (queryInterface, Sequelize) {}
};
