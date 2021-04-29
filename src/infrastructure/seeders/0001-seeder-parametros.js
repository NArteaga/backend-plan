'use strict';

const { setTimestampsSeeder } = require('../lib/util');

// Datos de producción
let items = [
  { id: 1, grupo: 'CONFIG', codigo: 'TK', nombre: 'TIEMPO DEL TOKEN', descripcion: '240', estado: 'ACTIVO' },

  // Tipo de documento
  { id: 4, grupo: 'TIPO_DOCUMENTO', codigo: 'CIEXT', nombre: 'CEDULA DE IDENTIDAD DE EXTRANJERO', estado: 'ACTIVO' },
  { id: 5, grupo: 'TIPO_DOCUMENTO', codigo: 'CI', nombre: 'CEDULA DE IDENTIDAD', estado: 'ACTIVO' },
  { id: 6, grupo: 'TIPO_DOCUMENTO', codigo: 'PAS', nombre: 'PASAPORTE', estado: 'ACTIVO' },
  { id: 7, grupo: 'TIPO_DOCUMENTO', codigo: 'NIT', nombre: 'NUMERO DE IDENTIFICACION TRIBUTARIO', estado: 'ACTIVO' },
  { id: 8, grupo: 'TIPO_DOCUMENTO', codigo: 'NITE', nombre: 'NUMERO DE IDENTIFICACION TRIBUTARIA EXTRANJERA', estado: 'ACTIVO' },

  // CIUDAD
  { id: 13, grupo: 'CIUDAD', codigo: 'LP', nombre: 'La Paz', estado: 'ACTIVO' },
  { id: 14, grupo: 'CIUDAD', codigo: 'CBBA', nombre: 'Cochabamba', estado: 'ACTIVO' },
  { id: 15, grupo: 'CIUDAD', codigo: 'OR', nombre: 'Oruro', estado: 'ACTIVO' },
  { id: 16, grupo: 'CIUDAD', codigo: 'PT', nombre: 'Potosi', estado: 'ACTIVO' },
  { id: 17, grupo: 'CIUDAD', codigo: 'SC', nombre: 'Santa Cruz', estado: 'ACTIVO' },
  { id: 18, grupo: 'CIUDAD', codigo: 'CH', nombre: 'Chuquisaca', estado: 'ACTIVO' },
  { id: 19, grupo: 'CIUDAD', codigo: 'TR', nombre: 'Tarija', estado: 'ACTIVO' },
  { id: 20, grupo: 'CIUDAD', codigo: 'PD', nombre: 'Pando', estado: 'ACTIVO' },
  { id: 21, grupo: 'CIUDAD', codigo: 'BN', nombre: 'Beni', estado: 'ACTIVO' },

  // GASTOS
  { id: 22, grupo: 'GASTO', codigo: '', nombre: 'INSUMOS', otros: '#FF5722', estado: 'ACTIVO' },
  { id: 23, grupo: 'GASTO', codigo: '', nombre: 'ALQUILER', otros: '#009688', estado: 'ACTIVO' },
  { id: 24, grupo: 'GASTO', codigo: '', nombre: 'SUELDOS', otros: '#3F51B5', estado: 'ACTIVO' },
  { id: 25, grupo: 'GASTO', codigo: '', nombre: 'SERVICIOS', otros: '#0D47A1', estado: 'ACTIVO' },

  // GASTOS
  { id: 26, grupo: 'DELIVERY', codigo: 'PD', nombre: 'Pedidos Ya', estado: 'ACTIVO' },
  { id: 27, grupo: 'DELIVERY', codigo: 'YA', nombre: 'Yaigo', estado: 'ACTIVO' },
  { id: 28, grupo: 'DELIVERY', codigo: 'DI', nombre: 'Dinki', estado: 'ACTIVO' },

  // UNIDADES
  { id: 29, grupo: 'UNIDAD', codigo: 'UNIT', nombre: 'UNIDADES', estado: 'ACTIVO' },
  { id: 30, grupo: 'UNIDAD', codigo: 'KG', nombre: 'KILOGRAMOS', estado: 'ACTIVO' },
  { id: 31, grupo: 'UNIDAD', codigo: 'LB', nombre: 'LIBRAS', estado: 'ACTIVO' },

  // GUARNICIONES
  { id: 32, grupo: 'GUARNICION', codigo: 'AR', nombre: 'ARROZ', estado: 'ACTIVO' },
  { id: 33, grupo: 'GUARNICION', codigo: 'PF', nombre: 'PAPAS FRITAS', estado: 'ACTIVO' },
  { id: 34, grupo: 'GUARNICION', codigo: 'EN', nombre: 'ENSALADA', estado: 'ACTIVO' }

];

// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('parametro', items, {})
      .then(async () => queryInterface.sequelize.query(`ALTER SEQUENCE "parametro_id_seq" RESTART WITH ${items.length + 1}`))
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
