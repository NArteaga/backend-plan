'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: '27656ace-9b1d-4ec0-8802-f852258d3001', idEje: '["5ee41148-0119-4f50-91ef-213285444f70", "38f1d052-6efa-40a8-a3d1-03242f55f52a"]', nombre: 'ERRADICACIÓN DE LA POBREZA', codigo: 1 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3002', idEje: '["5ee41148-0119-4f50-91ef-213285444f70"]', nombre: 'UNIVERSALIZACIÓN DE SERVICIOS BÁSICOS', codigo: 2 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3003', idEje: '["ced81e48-d7fb-4bfb-ada4-129d25c99426", "9e762ceb-3a6c-4a82-a482-537f82bcea4b"]', nombre: 'SALUD, EDUCACIÓN Y DEPORTES', codigo: 3 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3004', idEje: '["ced81e48-d7fb-4bfb-ada4-129d25c99426"]', nombre: 'SOBERANÍA CIENTIFICA Y TECNOLÓGICA', codigo: 4 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3005', idEje: '["5ee41148-0119-4f50-91ef-213285444f70"]', nombre: 'SOBERANÍA COMUNITARIA FINANCIERA', codigo: 5 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3006', idEje: '["8b0cf9c2-8041-4ed9-93e9-e84d2c850455", "827c9a72-a59d-42b3-9cc4-3e3bf9c6baba", "ced81e48-d7fb-4bfb-ada4-129d25c99426"]', nombre: 'SOBERANÍA PRODUCTIVA CON DIVERSIFICACIÓN', codigo: 6 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3007', idEje: '["8b0cf9c2-8041-4ed9-93e9-e84d2c850455", "2daab7dc-f526-4855-bb39-db2fb2398a2f"]', nombre: 'SOBERANÍA SOBRE NUESTROS RECURSOS NATURALES', codigo: 7 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3008', idEje: '["827c9a72-a59d-42b3-9cc4-3e3bf9c6baba"]', nombre: 'SOBERANÍA ALIMENTARIA', codigo: 8 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3009', idEje: '["190e1f5e-3565-4c37-8509-384c294efc35"]', nombre: 'SOBERANÍA AMBIENTAL CON DESARROLLO INTEGRAL', codigo: 9 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3010', idEje: '["358056c1-45da-4514-adbf-9bd60931361b"]', nombre: 'INTEGRACIÓN COMPLEMENTARIA', codigo: 10 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3011', idEje: '["94ed207d-e2dd-4a88-9779-fcda887aa419"]', nombre: 'SOBERANÍA Y TRANSPARENCIA EN LA GESTIÓN PÚBLICA', codigo: 11 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3012', idEje: '["94ed207d-e2dd-4a88-9779-fcda887aa419", "38f1d052-6efa-40a8-a3d1-03242f55f52a"]', nombre: 'DISFRUTE Y FELICIDAD', codigo: 12 },
  { id: '27656ace-9b1d-4ec0-8802-f852258d3013', idEje: '["358056c1-45da-4514-adbf-9bd60931361b"]', nombre: 'REENCUENTRO SOBERANO CON NUESTRO MAR', codigo: 13 }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('planificacion_pilar', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
