'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  {
    id                  : 'a79524c4-1b74-4dea-a9ce-4d78489b3683',
    id_estructura_padre : null,
    nombre              : 'PLAN ESTRATÉGICO',
    id_gestion          : 'ba67c95a-574d-48ac-acf1-909b8e26ac52',
    nivel               : 1,
    sigla               : 'PE',
    nombre_indicador    : null,
    estado              : null,
    created             : true,
    editable            : true,
    crononograma        : false,
    codigo              : false,
    codigo_manual       : true,
    area_requerida      : true
  },
  {
    id                  : '32e82274-8695-4bdb-a3ec-bb2dd79aa7c3',
    id_estructura_padre : null,
    nombre              : 'PLAN TÁCTICO',
    id_gestion          : 'ba67c95a-574d-48ac-acf1-909b8e26ac52',
    nivel               : 1,
    sigla               : 'PT',
    nombre_indicador    : null,
    estado              : null,
    created             : true,
    editable            : true,
    crononograma        : false,
    codigo              : false,
    codigo_manual       : true,
    area_requerida      : true
  },
  {
    id                  : '59c71a1b-a395-48e4-b5b5-de47b3de5a6c',
    id_estructura_padre : null,
    nombre              : 'PLAN OPERATIVO',
    id_gestion          : 'ba67c95a-574d-48ac-acf1-909b8e26ac52',
    nivel               : 1,
    sigla               : 'PO',
    nombre_indicador    : null,
    estado              : null,
    created             : true,
    editable            : true,
    crononograma        : false,
    codigo              : false,
    codigo_manual       : true,
    area_requerida      : true
  },
  {
    id                  : '90a1be33-983c-4a63-8210-4614da3aa7be',
    id_estructura_padre : '["a79524c4-1b74-4dea-a9ce-4d78489b3683", "59c71a1b-a395-48e4-b5b5-de47b3de5a6c", "32e82274-8695-4bdb-a3ec-bb2dd79aa7c3"]',
    nombre              : 'PROGRAMA',
    id_gestion          : 'ba67c95a-574d-48ac-acf1-909b8e26ac52',
    nivel               : 2,
    sigla               : 'PG',
    nombre_indicador    : null,
    estado              : null,
    created             : true,
    editable            : true,
    crononograma        : false,
    codigo              : true,
    codigo_manual       : false,
    area_requerida      : true
  },
  {
    id                  : 'c3a697ed-365a-4b14-b08c-d99ce0cde8c0',
    id_estructura_padre : '["90a1be33-983c-4a63-8210-4614da3aa7be"]',
    nombre              : 'PROYECTO',
    id_gestion          : 'ba67c95a-574d-48ac-acf1-909b8e26ac52',
    nivel               : 3,
    sigla               : 'PY',
    nombre_indicador    : null,
    estado              : null,
    created             : true,
    editable            : true,
    crononograma        : true,
    codigo              : true,
    codigo_manual       : false,
    area_requerida      : true
  }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('planificacion_estructura', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },

  down (queryInterface, Sequelize) {}

};
