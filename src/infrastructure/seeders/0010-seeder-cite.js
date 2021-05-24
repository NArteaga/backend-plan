'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, id_entidad: 1, prefijo: 'MJTI', sufijo: 'RE', correlativo: 0 },
  { id: 2, id_entidad: 2, prefijo: 'DGGA', sufijo: 'RE', correlativo: 0 },
  { id: 3, id_entidad: 3, prefijo: 'DGAJ', sufijo: 'RE', correlativo: 0 },
  { id: 4, id_entidad: 4, prefijo: 'DGP', sufijo: 'RE', correlativo: 0 },
  { id: 5, id_entidad: 5, prefijo: 'VJDF', sufijo: 'RE', correlativo: 0 },
  { id: 6, id_entidad: 6, prefijo: 'VJIOC', sufijo: 'RE', correlativo: 0 },
  { id: 7, id_entidad: 7, prefijo: 'VIO', sufijo: 'RE', correlativo: 0 },
  { id: 8, id_entidad: 8, prefijo: 'VDDUC', sufijo: 'RE', correlativo: 0 },
  { id: 9, id_entidad: 9, prefijo: 'VTILCC', sufijo: 'RE', correlativo: 0 },
  { id: 10, id_entidad: 10, prefijo: 'DGDI', sufijo: 'RE', correlativo: 0 },
  { id: 11, id_entidad: 11, prefijo: 'DGDC', sufijo: 'RE', correlativo: 0 },
  { id: 12, id_entidad: 12, prefijo: 'DGJDF', sufijo: 'RE', correlativo: 0 },
  { id: 13, id_entidad: 13, prefijo: 'DGRPA', sufijo: 'RE', correlativo: 0 },
  { id: 14, id_entidad: 14, prefijo: 'DGJIOC', sufijo: 'RE', correlativo: 0 },
  { id: 15, id_entidad: 15, prefijo: 'DGNAM', sufijo: 'RE', correlativo: 0 },
  { id: 16, id_entidad: 16, prefijo: 'DGPCD', sufijo: 'RE', correlativo: 0 },
  { id: 17, id_entidad: 17, prefijo: 'DGPEFVGG', sufijo: 'RE', correlativo: 0 },
  { id: 18, id_entidad: 18, prefijo: 'DPJ', sufijo: 'RE', correlativo: 0 },
  { id: 19, id_entidad: 19, prefijo: 'DGDDUC', sufijo: 'RE', correlativo: 0 },
  { id: 20, id_entidad: 20, prefijo: 'DGLCC', sufijo: 'RE', correlativo: 0 },
  { id: 21, id_entidad: 21, prefijo: 'DGPPET', sufijo: 'RE', correlativo: 0 }
];
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cite', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "cite_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
