
'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  {
    "id" : "e787ab0f-8fbc-435f-9dc5-261f64eb2fb9",
    "sigla" : "TGN",
    "nombre" : "Tesoro General de la Nación"
  },
  {
    "id" : "200cd329-0b27-43a3-b744-834fd9aeffd3",
    "sigla" : "DON",
    "nombre" : "Donaciones"
  },
  {
    "id" : "5c91ec84-9cd3-4ce7-bd99-338d214d2d78",
    "sigla" : "ONG",
    "nombre" : "Otros Finaciamientos"
  }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('financiera_organismo_financiador', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
