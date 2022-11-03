
'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    codigo      : 10000,
    id_partida_padre: null,
    tipo: 'GRUPO',
    nombre : 'Servicios Personales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101002',
    codigo      : 11000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Empleados Permanentes'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101003',
    codigo      : 11100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Haberes Básicos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101004',
    codigo      : 11200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Bono de Antigüedad'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101005',
    codigo      : 11210,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Categorías Magisterio '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101006',
    codigo      : 11220,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Bono de Antigüedad'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101007',
    codigo      : 11300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Bonificaciones '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101008',
    codigo      : 11310,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Bono de Fronteras'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101009',
    codigo      : 11320,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Remuneraciones  Colaterales Médicas y de Trabajadores en Salud'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101010',
    codigo      : 11321,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Categorías Médicas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101011',
    codigo      : 11322,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Escalafón Médico'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101012',
    codigo      : 11323,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Escalafón de los Trabajadores en Salud, de acuerdo a ala norma legal vigente'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101013',
    codigo      : 11324,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Otras Remuneraciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101014',
    codigo      : 11330,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Otras Bonificaciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101015',
    codigo      : 11400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Aguinaldos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101016',
    codigo      : 11500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Primas y Bono de Producción '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101017',
    codigo      : 11510,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Primas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101018',
    codigo      : 11520,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Bono de Producción '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101019',
    codigo      : 11600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Asignaciones Familiares '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101020',
    codigo      : 11700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Sueldos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101021',
    codigo      : 11800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Dietas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101022',
    codigo      : 11810,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Dietas de Directorio'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101023',
    codigo      : 11820,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Otras Dietas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101024',
    codigo      : 11900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Otros Servicios Personales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101025',
    codigo      : 11910,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Horas Extraordinarias '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101026',
    codigo      : 11920,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Vacaciones no Utilizadas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101027',
    codigo      : 11930,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Incentivos Económicos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101028',
    codigo      : 11940,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Suplencias '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101029',
    codigo      : 12000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Empleados no Permanentes '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101030',
    codigo      : 12100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Personal Eventual '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101031',
    codigo      : 13000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Previsión Social'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101032',
    codigo      : 13100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Aporte Patronal al Seguro Social'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101033',
    codigo      : 13110,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Régimen de Corto Plazo (Salud)'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101034',
    codigo      : 13120,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Prima de Riesgo Profesional Régimen de Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101035',
    codigo      : 13130,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Aporte Patronal al Solidario Régimen de Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101036',
    codigo      : 13131,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Aporte Patronal Solidario 3%'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101037',
    codigo      : 13132,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Aporte Patronal Minero Solidario 2%'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101038',
    codigo      : 13200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Aporte Patronal para Vivienda'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101039',
    codigo      : 14000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Otros '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101040',
    codigo      : 14100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Otros '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101041',
    codigo      : 15000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Previsiones para Incremento de Gastos en Servicios Personales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101042',
    codigo      : 15100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Incremento Salarial'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101043',
    codigo      : 15200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Incremento Vegetativo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101044',
    codigo      : 15300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Creación de Ítems'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101045',
    codigo      : 15400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101001',
    tipo: 'PARTIDA',
    nombre : 'Otras Previsiones '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    codigo      : 20000,
    id_partida_padre: null,
    tipo: 'GRUPO',
    nombre : 'Servicios no Personales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101047',
    codigo      : 21000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Servicios Básicos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101048',
    codigo      : 21100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Comunicaciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101049',
    codigo      : 21200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Energía Eléctrica'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101050',
    codigo      : 21300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Agua'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101051',
    codigo      : 21400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Telefonía'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101052',
    codigo      : 21500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Gas Domiciliario '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101053',
    codigo      : 21600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Internet'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101054',
    codigo      : 22000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Servicios de Transportes y Seguros'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101055',
    codigo      : 22100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Pasajes '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101056',
    codigo      : 22110,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Pasajes al Interior del País'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101057',
    codigo      : 22120,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Pasajes al Exterior del País'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101058',
    codigo      : 22210,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Viáticos por Viajes al Interior del País'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101059',
    codigo      : 22220,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Viáticos por Viajes al Exterior del país'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101060',
    codigo      : 22300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Fletes y Almacenamiento'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101061',
    codigo      : 22400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Gastos de Instalación y Retorno'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101062',
    codigo      : 22500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Seguros'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101063',
    codigo      : 22600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Transporte de Personal'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101064',
    codigo      : 23000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Alquileres '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101065',
    codigo      : 23100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Alquiler de Edificios'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101066',
    codigo      : 23200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Alquiler de Equipos y Maquinarias '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101067',
    codigo      : 23300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Alquiler de Tierras y Terrenos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101068',
    codigo      : 23400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Otros Alquileres'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101069',
    codigo      : 24000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Instalación, Mantenimiento y Reparaciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101070',
    codigo      : 24100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Mantenimiento y Reparación de Inmuebles y Equipos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101071',
    codigo      : 24110,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Mantenimiento y Reparación de Inmuebles '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101072',
    codigo      : 24120,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Mantenimiento y Reparación de Vehículos, Maquinaria y Equipos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101073',
    codigo      : 24130,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Mantenimiento y Reparación de Muebles y Enseres '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101074',
    codigo      : 24200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Mantenimiento y Reparación de Vías de Comunicación '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101075',
    codigo      : 24300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Otros Gastos por Concepto de Instalación, Mantenimiento y Reparación '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101076',
    codigo      : 25000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Servicios Profesionales y Comerciales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101077',
    codigo      : 25100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Médicos, Sanitarios y Sociales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101078',
    codigo      : 25120,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Gastos Especializados por Atención Médica y Otros '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101079',
    codigo      : 25130,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Gastos por Afiliación de Estudiantes Universitarios al Seguro Social'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101080',
    codigo      : 25200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Estudios, Investigaciones, Auditorías Externas y Revalorizaciones '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101081',
    codigo      : 25210,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Consultorías por Producto '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101082',
    codigo      : 25220,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Consultores Individuales de Línea'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101083',
    codigo      : 25230,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Auditorías Externas '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101084',
    codigo      : 25300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Comisiones y Gastos Bancarios '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101085',
    codigo      : 25400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Lavandería, Limpieza e Higiene'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101086',
    codigo      : 25500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Publicidad '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101087',
    codigo      : 25600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Servicios de Imprenta, Fotocopiado y Fotográficos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101088',
    codigo      : 25700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Capacitación del Personal'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101089',
    codigo      : 25800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Estudio e Investigaciones para Proyectos de Inversión No Capitalizables '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101090',
    codigo      : 25810,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Consultorías por Producto '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101091',
    codigo      : 25820,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Consultores Individuales de Línea'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101092',
    codigo      : 25900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Servicios Manuales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101093',
    codigo      : 26000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Otros Servicios No Personales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101094',
    codigo      : 26200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Gastos Judiciales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101095',
    codigo      : 26300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Derechos sobre Bienes Intangibles '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101096',
    codigo      : 26500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Conjueces y Jueces Ciudadanos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101097',
    codigo      : 26600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Servicio de Seguridad de los Batallones de Seguridad Física de la Policía Nacional y Vigilancia Privada '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101098',
    codigo      : 26610,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Servicios Públicos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101099',
    codigo      : 26620,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Servicios Privados '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101100',
    codigo      : 26630,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Servicios por Traslado de Valores '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101101',
    codigo      : 26900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Otros Servicios No Personales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101102',
    codigo      : 26910,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Gastos de Representación '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101103',
    codigo      : 26920,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Fallas de Caja '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101104',
    codigo      : 26930,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Pago por Trabajos Dirigidos y Pasantías '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101105',
    codigo      : 26940,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Compensación Costo de Vida'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101106',
    codigo      : 26950,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Aguinaldo “Esfuerzo por Bolivia”'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101107',
    codigo      : 26990,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Otros '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101108',
    codigo      : 27000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Gastos por Servicios Especializados por la Actividad de Recursos Naturales del Estado Plurinacional'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101109',
    codigo      : 27100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Servicios por la Extraccion, Transformación Conversión de los Recursos Naturales de Propiedad del Estado Plurinacional'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101110',
    codigo      : 27110,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101046',
    tipo: 'PARTIDA',
    nombre : 'Pago por Costos Incurridos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101111',
    codigo      : 27120,
    tipo: 'PARTIDA',
    nombre : 'Pago por Utilidades '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    codigo      : 30000,
    id_partida_padre: null,
    tipo: 'GRUPO',
    nombre : 'Materiales y Suministros '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101113',
    codigo      : 31000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Alimentos y Productos Agroforestales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101114',
    codigo      : 31100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Alimentos y Bebidas para Personas, Desayuno Escolar y Otros'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101115',
    codigo      : 31110,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Gastos por Refrigerios al Personal Permanente, Eventual y Consultores Individuales de Línea de las Instituciones Públicas '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101116',
    codigo      : 31120,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Gastos por Alimentos y Otros Similares '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101117',
    codigo      : 31130,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Alimentación Complementaria Escolar '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101118',
    codigo      : 31140,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Alimentación Hospitalaria, Penitenciaria, Aeronaves y Otras Especificas '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101119',
    codigo      : 31150,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Alimentos y Bebidas para atención de emergencias y desastres naturales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101120',
    codigo      : 31200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Alimentos para Animales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101121',
    codigo      : 31300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Productos Agrícolas, Pecuarios y Forestales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101122',
    codigo      : 32000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Productos de Papel, Cartón e Impresos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101123',
    codigo      : 32100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Papel'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101124',
    codigo      : 32200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Productos de Artes Gráficas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101125',
    codigo      : 32300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Libros, Manuales y Revistas '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101126',
    codigo      : 32400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Textos de Enseñanza '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101127',
    codigo      : 32500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Periódicos y Boletines '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101128',
    codigo      : 33000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Textiles y Vestuario '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101129',
    codigo      : 33100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Hilados, Telas y Fibras y Algodón '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101130',
    codigo      : 33200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Confecciones Textiles '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101131',
    codigo      : 33300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Prendas de Vestir '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101132',
    codigo      : 33400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Calzados '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101133',
    codigo      : 34000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Combustibles, Productos Químicos, Farmacéuticos y otras Fuentes de Energía'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101134',
    codigo      : 34100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Combustibles, Lubricantes, Derivados y otras Fuentes de Energía'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101135',
    codigo      : 34110,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Combustibles,  Lubricantes,  Derivados para consumo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101136',
    codigo      : 34120,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Combustibles,  Lubricantes,  Derivados para comercialización '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101137',
    codigo      : 34130,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Energía, Eléctrica para Comercialización '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101138',
    codigo      : 34200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Productos Químicos y Farmacéuticos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101139',
    codigo      : 34300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Llantas y Neumáticos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101140',
    codigo      : 34400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Productos de Cuero y Caucho'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101141',
    codigo      : 34500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Productos de Minerales no Metálicos y Plásticos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101142',
    codigo      : 34600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Productos Metálicos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101143',
    codigo      : 34700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Minerales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101144',
    codigo      : 34800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Herramientas Menores'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101145',
    codigo      : 39000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Productos Varios '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101146',
    codigo      : 39100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Material de Limpieza '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101147',
    codigo      : 39200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Material Deportivo y Recreativo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101148',
    codigo      : 39300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Utensilios de Cocina y Comedor '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101149',
    codigo      : 39400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Instrumental Menor Médico- Quirúrgico'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101150',
    codigo      : 39500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Útiles de Escritorio y Oficina '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101151',
    codigo      : 39600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Útiles Educacionales, Culturales y de Capacitación '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101152',
    codigo      : 39700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Útiles y Materiales Eléctricos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101153',
    codigo      : 39800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Otros Repuestos y Accesorios '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101154',
    codigo      : 39900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Otros Materiales y Suministros '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101155',
    codigo      : 39910,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Acuñación de monedas e impresión de billetes'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101156',
    codigo      : 39911,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Acuñación de monedas '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101157',
    codigo      : 39912,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Impresión de Billetes '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101158',
    codigo      : 39990,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101112',
    tipo: 'PARTIDA',
    nombre : 'Otros Materiales y Suministros '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    codigo      : 40000,
    id_partida_padre: null,
    tipo: 'GRUPO',
    nombre : 'Activos Reales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101160',
    codigo      : 41000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Inmobiliarios '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101161',
    codigo      : 41100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Edificios '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101162',
    codigo      : 41200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Tierras y Terrenos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101163',
    codigo      : 41300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Otras Adquisiciones '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101164',
    codigo      : 42000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Construcciones '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101165',
    codigo      : 42200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Construcciones y Mejoras de Bienes Públicos Nacionales de Dominio Privado'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101166',
    codigo      : 42210,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Construcciones y Mejoras de Viviendas '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101167',
    codigo      : 42220,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Construcciones y Mejoras para Defensa y Seguridad'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101168',
    codigo      : 42230,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Otras Construcciones y Mejoras de Bienes Públicos de Dominio Privado '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101169',
    codigo      : 42240,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Supervisión de Construcciones y Mejoras de Bienes Públicos de Dominio Privado '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101170',
    codigo      : 42300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Construcciones y Mejoras de Bienes Nacionales de Dominio Público '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101171',
    codigo      : 42310,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Construcciones y Mejoras de Bienes de Dominio Público '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101172',
    codigo      : 42320,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Supervisión de Construcciones y Mejoras de Bienes Públicos de Dominio Público'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101173',
    codigo      : 43000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Maquinaria y Equipo '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101174',
    codigo      : 43100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Equipo de Oficina y Muebles'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101175',
    codigo      : 43110,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Equipo de Oficina y Muebles'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101176',
    codigo      : 43120,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Equipo de Computación '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101177',
    codigo      : 43200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Maquinaria y Equipo de Producción '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101178',
    codigo      : 43300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Equipo de Transporte, Tracción y Elevación '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101179',
    codigo      : 43310,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Vehículos Livianos para Funciones Administrativas '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101180',
    codigo      : 43320,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Vehículos Livianos para Proyectos de Inversión Pública'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101181',
    codigo      : 43330,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Maquinaría y Equipo de Transporte '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101182',
    codigo      : 43340,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Equipo de Elevación '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101183',
    codigo      : 43400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Equipo Médico y de Laboratorio '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101184',
    codigo      : 43500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Equipo de Comunicación'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101185',
    codigo      : 43600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Equipo Educacional y Recreativo '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101186',
    codigo      : 43700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Otra Maquinaria y Equipo '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101187',
    codigo      : 46000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Estudios y Proyectos para Inversión '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101188',
    codigo      : 46100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Para Construcciones de Bienes Públicos de Dominio Privado '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101189',
    codigo      : 46110,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Consultoría por Producto para Construcciones de Bienes Públicos de Dominio Privado '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101190',
    codigo      : 46120,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Consultoría de Línea para Construcciones de Bienes Públicos de Dominio Privado '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101191',
    codigo      : 46200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Para Construcciones de Bienes de Dominio Público '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101192',
    codigo      : 46210,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Consultoría por Producto  para Construcciones de Bienes Públicos de Dominio Público '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101193',
    codigo      : 46220,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Consultoría de Línea para Construcciones de Bienes Públicos de Dominio Público '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101194',
    codigo      : 46300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Consultoría para Capacitación, transferencia de tecnología y organización para procesos productivos, en proyecto de Inversión especificos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101195',
    codigo      : 46310,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Consultoría por Producto  '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101196',
    codigo      : 46320,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Consultoría de Línea'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101197',
    codigo      : 49000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Otros Activos '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101198',
    codigo      : 49100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Activos Intangibles '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101199',
    codigo      : 49300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Semovientes y Otros Animales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101200',
    codigo      : 49400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Activos Museológicos y Culturales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101201',
    codigo      : 49900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101159',
    tipo: 'PARTIDA',
    nombre : 'Otros '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    codigo      : 50000,
    id_partida_padre: null,
    tipo: 'GRUPO',
    nombre : 'Activos Financieros '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101203',
    codigo      : 51000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Compra de Acciones, Participaciones de Capital e Inversiones '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101204',
    codigo      : 51100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Acciones y Participaciones de Capital en Empresas Privadas Nacionales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101205',
    codigo      : 51200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Acciones y Participaciones de Capital en Empresas Públicas Nacionales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101206',
    codigo      : 51300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Acciones y Participaciones de Capital en Empresas Públicas Territoriales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101207',
    codigo      : 51310,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Del Gobierno Autónomo Departamental'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101208',
    codigo      : 51320,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Del Gobierno Autónomo Municipal '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101209',
    codigo      : 51330,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Del Gobierno Indígena Originario Campesino '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101210',
    codigo      : 51500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Acciones y Participaciones de Capital de Instituciones Públicas Financieras No Bancarias '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101211',
    codigo      : 51600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Acciones y Participaciones de Capital de Instituciones Públicas Financieras  Bancarias '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101212',
    codigo      : 51700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Acciones y Participaciones de Capital en Organismos Internacionales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101213',
    codigo      : 51800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Otras Acciones y Particiones de Capital en el Exterior'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101214',
    codigo      : 51900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Inversiones en el Exterior'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101215',
    codigo      : 52000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Corto Plazo al Sector Público No Financiero '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101216',
    codigo      : 52100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Corto Plazo a los Órganos del Estado Plurinacional '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101217',
    codigo      : 52200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Corto Plazo a Instituciones Públicas Descentralizadas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101218',
    codigo      : 52400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Corto Plazo a Entidades Territoriales Autónomas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101219',
    codigo      : 52410,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Gobierno Autónomo Departamental '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101220',
    codigo      : 52420,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Gobierno Autónomo Municipal '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101221',
    codigo      : 52430,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Gobierno Indígena Originario Campesino '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101222',
    codigo      : 52600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Corto Plazo a Instituciones de Seguridad Social '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101223',
    codigo      : 52700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Corto Plazo a Empresas Públicas Nacionales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101224',
    codigo      : 52800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Corto Plazo a Empresas Públicas Territoriales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101225',
    codigo      : 52810,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Del Gobierno Autónomo Departamental'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101226',
    codigo      : 52820,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Del Gobierno Autónomo Municipal '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101227',
    codigo      : 52830,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Del Gobierno Indígena Originario Campesino '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101228',
    codigo      : 53000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Largo  Plazo al Sector  Público No Financiero'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101229',
    codigo      : 53100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Largo  Plazo a los Órganos del Estado Plurinacional'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101230',
    codigo      : 53200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Largo  Plazo a Instituciones Publicas Descentralizadas '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101231',
    codigo      : 53400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Largo  Plazo a Entidades Territoriales Autónomas '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101232',
    codigo      : 53410,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Gobierno Autónomo Departamental '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101233',
    codigo      : 53420,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Gobierno Autónomo Municipal '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101234',
    codigo      : 53430,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Gobierno Indígena Originario Campesino '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101235',
    codigo      : 53600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Largo  Plazo a Instituciones Publicas Descentralizadas '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101236',
    codigo      : 53700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Largo Plazo a Empresas Públicas Nacionales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101237',
    codigo      : 53800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Largo  Plazo a Empresas Públicas Territoriales '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101238',
    codigo      : 53810,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Del Gobierno Autónomo Departamental'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101239',
    codigo      : 53820,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Del Gobierno Autónomo Municipal '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101240',
    codigo      : 53830,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Del Gobierno Indígena Originario Campesino '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101241',
    codigo      : 54000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos al Sector Público Financiero y a los Sectores Privado y el Exterior '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101242',
    codigo      : 54100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Corto Plazo a Instituciones Públicas Financieras No Bancarias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101243',
    codigo      : 54200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Corto Plazo a Instituciones Públicas Financieras Bancarias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101244',
    codigo      : 54300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Corto Plazo al Sector Privado'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101245',
    codigo      : 54400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Corto Plazo al Exterior'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101246',
    codigo      : 54600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Largo Plazo a Instituciones Públicas Financieras No Bancarias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101247',
    codigo      : 54700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Largo Plazo a Instituciones Públicas Financieras Bancarias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101248',
    codigo      : 54800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Largo Plazo al Sector Privado'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101249',
    codigo      : 54900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesión de Préstamos a Largo Plazo al Exterior'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101250',
    codigo      : 55000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Compra de Títulos y Valores'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101251',
    codigo      : 55100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Títulos y Valores a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101252',
    codigo      : 55200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Títulos y Valores a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101253',
    codigo      : 55210,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Letras del Tesoro'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101254',
    codigo      : 55220,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Bonos del Tesoro'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101255',
    codigo      : 55230,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Otros'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101256',
    codigo      : 56100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Colocación de Fondos en Fideicomiso'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101257',
    codigo      : 56200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Concesiones de Recursos de Fideicomisos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101258',
    codigo      : 56300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Colocación de Fondos por Servicios Financieros'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101259',
    codigo      : 57000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Incremento de Disponibilidades'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101260',
    codigo      : 57100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Incremento de Caja y Bancos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101261',
    codigo      : 57200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Incremento de Inversiones Temporales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101262',
    codigo      : 58000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Incremento de Cuentas y Documentos por Cobrar y Otros Activos Financieros'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101263',
    codigo      : 58100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Incremento de Cuentas por Cobrar a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101264',
    codigo      : 58200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Incremento de Documentos por Cobrar y Otros Activos Financieros a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101265',
    codigo      : 58210,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Incremento de Documentos por Cobrar a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101266',
    codigo      : 58220,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Incremento de Otros Activos Financieros a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101267',
    codigo      : 58300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Incremento de Cuentas por Cobrar a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101268',
    codigo      : 58400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Incremento de Documentos por Cobrar y Otros Activos Financieros a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101269',
    codigo      : 58410,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'ncremento de Documentos por Cobrar a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101270',
    codigo      : 58420,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Incremento de Otros Activos Financieros a largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101271',
    codigo      : 59000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Afectaciones al Tesoro General de la Nación'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101272',
    codigo      : 59100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101202',
    tipo: 'PARTIDA',
    nombre : 'Afectaciones al Tesoro General de la Nación'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    codigo      : 60000,
    id_partida_padre: null,
    tipo: 'GRUPO',
    nombre : 'SERVICIO DE LA DEUDA PUBLICA Y DISMINUCION DE OTROS PASIVOS'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101274',
    codigo      : 61000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Servicio de la Deuda Pública Interna'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101275',
    codigo      : 61100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Amortización de la Deuda Pública Interna a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101276',
    codigo      : 61200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Intereses de la Deuda Pública Interna a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101277',
    codigo      : 61300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Comisiones y Otros Gastos de la Deuda Pública Interna a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101278',
    codigo      : 61400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Intereses por Mora y Multas de la Deuda Pública Interna a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101279',
    codigo      : 61600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Amortización de la Deuda Pública Interna a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101280',
    codigo      : 61700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Intereses de la Deuda Pública Interna a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101281',
    codigo      : 61800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Comisiones y Otros Gastos de la Deuda Pública Interna a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101282',
    codigo      : 61900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Intereses por Mora y Multas de la Deuda Pública Interna a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101283',
    codigo      : 62000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Servicio de la Deuda Pública Externa'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101284',
    codigo      : 62100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Amortización de la Deuda Pública Externa a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101285',
    codigo      : 62200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Intereses de la Deuda Pública Externa a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101286',
    codigo      : 62300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Comisiones y Otros Gastos de la Deuda Pública Externa a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101287',
    codigo      : 62400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Intereses por Mora y Multas de la Deuda Pública Externa a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101288',
    codigo      : 62600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Amortización de la Deuda Pública Externa a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101289',
    codigo      : 62700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Intereses de la Deuda Pública Externa a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101290',
    codigo      : 62800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Comisiones y Otros Gastos de la Deuda Pública Externa a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101291',
    codigo      : 62900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'ntereses por Mora y Multas de la Deuda Pública Externa a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101292',
    codigo      : 63000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Cuentas por Pagar a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101293',
    codigo      : 63100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Cuentas por Pagar a Corto Plazo por Deudas Comerciales con Proveedores'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101294',
    codigo      : 63200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Cuentas por Pagar a Corto Plazo con Contratistas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101295',
    codigo      : 63300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Cuentas por Pagar a Corto Plazo por Sueldos y Jornales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101296',
    codigo      : 63400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Cuentas por Pagar a Corto Plazo por Aportes Patronales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101297',
    codigo      : 63500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Cuentas por Pagar a Corto Plazo por Retenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101298',
    codigo      : 63600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Cuentas por Pagar a Corto Plazo por Impuestos, Regalías y Tasas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101299',
    codigo      : 63700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Cuentas por Pagar a Corto Plazo por Jubilaciones y Pensiones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101300',
    codigo      : 63800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Cuentas por Pagar a Corto Plazo por Intereses'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101301',
    codigo      : 63900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Otros Pasivos y Otras Cuentas por Pagar a Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101302',
    codigo      : 64000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Cuentas por Pagar a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101303',
    codigo      : 64100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Cuentas por Pagar a Largo Plazo por Deudas Comerciales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101304',
    codigo      : 64200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Otras Cuentas por Pagar a Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101305',
    codigo      : 65000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados – TGN'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101306',
    codigo      : 65100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados por Servicios Personales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101307',
    codigo      : 65200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados por Servicios No Personales, Materiales y Suministros, Activos Reales y Financieros y Servicio de la Deuda'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101308',
    codigo      : 65300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados por Transferencias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101309',
    codigo      : 65400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados por Retenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101310',
    codigo      : 65500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados por Intereses Deuda Pública Interna'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101311',
    codigo      : 65600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados por Intereses Deuda Pública Externa'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101312',
    codigo      : 65700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados por Comisiones Deuda Pública Interna'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101313',
    codigo      : 65800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados por Comisiones Deuda Pública Externa'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101314',
    codigo      : 65900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Otros Gastos Devengados No Pagados'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101315',
    codigo      : 66000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados – Otras Fuentes'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101316',
    codigo      : 66100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados por Servicios Personales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101317',
    codigo      : 66200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados por Servicios No Personales, Materiales y Suministros,'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101318',
    codigo      : 66300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No Pagados por Transferencias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101319',
    codigo      : 66400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Gastos Devengados No pagados por Retenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101320',
    codigo      : 66900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Otros Gastos No Pagados'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101321',
    codigo      : 67000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Obligaciones por Afectaciones al Tesoro General de la Nación'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101322',
    codigo      : 68000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Disminución de Otros Pasivos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101323',
    codigo      : 68200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Pago de Beneficios Sociales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101324',
    codigo      : 69000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Devolución de Fondos -Fideicomisos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101325',
    codigo      : 69100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Devolución de Fondos - Fideicomiso de Corto Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101326',
    codigo      : 69200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101273',
    tipo: 'PARTIDA',
    nombre : 'Devolución de Fondos - Fideicomiso de Largo Plazo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    codigo      : 70000,
    id_partida_padre: null,
    tipo: 'GRUPO',
    nombre : 'TRANSFERENCIAS'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101328',
    codigo      : 71000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes al Sector Privado'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101329',
    codigo      : 71100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Pensiones y Jubilaciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101330',
    codigo      : 71200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Becas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101331',
    codigo      : 71210,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Becas de Estudios Otorgadas a los Servidores Públicos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101332',
    codigo      : 71220,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Becas de Estudios Otorgadas a los Estudiantes Universitarios'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101333',
    codigo      : 71230,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Becas de Estudios Otorgadas a Particulares'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101334',
    codigo      : 71300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Donaciones, Ayudas Sociales y Premios a Personas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101335',
    codigo      : 71600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Subsidios y Donaciones a Personas e Instituciones Privadas sin Fines de Lucro'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101336',
    codigo      : 71700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Subvenciones Económicas a Empresas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101337',
    codigo      : 71800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Pensiones Vitalicias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101338',
    codigo      : 71900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias por las Compras de Control Tributario'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101339',
    codigo      : 72000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes al Sector Público No Financiero por Participación en Tributos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101340',
    codigo      : 72200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes a Instituciones Públicas Descentralizadas, Universidades Públicas por Participación en Tributos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101341',
    codigo      : 72400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes al Gobierno Autónomo Departamental por Participación en Tributos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101342',
    codigo      : 72410,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Para Educación'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101343',
    codigo      : 72420,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Otras'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101344',
    codigo      : 72500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes a los Gobiernos Autónomos Municipales e Indígena Originario Campesino por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101345',
    codigo      : 72510,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Para Salud'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101346',
    codigo      : 72520,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Otras'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101347',
    codigo      : 73000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes al Sector Público No Financiero por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101348',
    codigo      : 73100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes al Órgano Ejecutivo del Estado Plurinacional por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101349',
    codigo      : 73200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes a los Órganos Legislativo, Judicial y Electoral, Entidades de Control y Defensa, Descentralizadas y Universidades por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101350',
    codigo      : 73300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes del Fondo Solidario Nacional'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101351',
    codigo      : 73400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes a Entidades Territoriales Autónomas por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101352',
    codigo      : 73410,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Gobierno Autónomo Departamental'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101353',
    codigo      : 73420,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Gobierno Autónomo Municipal'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101354',
    codigo      : 73430,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Gobierno Indígena Originario Campesino'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101355',
    codigo      : 73440,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Gobierno Autónomo Regional'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101356',
    codigo      : 73600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes a Instituciones de Seguridad Social por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101357',
    codigo      : 73700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes a Empresas Públicas Nacionales por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101358',
    codigo      : 73800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes a Empresas Públicas de las Entidades Territoriales Autónomas por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101359',
    codigo      : 73810,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Empresas Públicas Departamentales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101360',
    codigo      : 73820,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Empresas Públicas Municipales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101361',
    codigo      : 73830,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Empresas Públicas Indígenas Originarias Campesinas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101362',
    codigo      : 74000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes al Sector Público Financiero'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101363',
    codigo      : 74100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes a Instituciones Públicas Financieras No Bancarias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101364',
    codigo      : 74200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes a Instituciones Públicas Financieras Bancarias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101365',
    codigo      : 75000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital al Sector Privado'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101366',
    codigo      : 75100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital a Personas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101367',
    codigo      : 75200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital a Instituciones Privadas sin Fines de Lucro'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101368',
    codigo      : 75210,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'A Instituciones Privadas sin Fines de Lucro'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101369',
    codigo      : 75220,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Otras de carácter económico – productivo'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101370',
    codigo      : 75300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital a Empresas Privadas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101371',
    codigo      : 77000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital al Sector Público No Financiero por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101372',
    codigo      : 77100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital al Órgano Ejecutivo del Estado Plurinacional por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101373',
    codigo      : 77200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital a los Órganos Legislativo, Judicial y Electoral, Entidades de Control y Defensa, Descentralizadas y Universidades por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101374',
    codigo      : 77400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital a las Entidades Territoriales Autónomas por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101375',
    codigo      : 77500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital a los Gobiernos Autónomos Municipales e Indígena Originario Campesino por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101376',
    codigo      : 77700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital a Empresas Públicas Nacionales por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101377',
    codigo      : 77800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital a Empresas Públicas de las Entidades Territoriales Autónomas por Subsidios o Subvenciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101378',
    codigo      : 78000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital al Sector Público Financiero'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101379',
    codigo      : 79000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias al Exterior'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101380',
    codigo      : 79100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes a Gobiernos Extranjeros y Organismos Internacionales por Cuotas Regulares'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101381',
    codigo      : 79200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias Corrientes a Gobiernos Extranjeros y Organismos Internacionales por Cuotas Extraordinarias '
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101382',
    codigo      : 79300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Otras Transferencias Corrientes al Exterior'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101383',
    codigo      : 79400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101327',
    tipo: 'PARTIDA',
    nombre : 'Transferencias de Capital al Exterior'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    codigo      : 80000,
    id_partida_padre: null,
    tipo: 'GRUPO',
    nombre : 'IMPUESTOS, REGALIAS Y TASAS'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101385',
    codigo      : 81000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Renta Interna'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101386',
    codigo      : 81100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Impuesto sobre las Utilidades de las Empresas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101387',
    codigo      : 81200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Impuesto a las Transacciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101388',
    codigo      : 81300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Impuesto al Valor Agregado Mercado Intern'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101389',
    codigo      : 81400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Impuesto al Valor Agregado Importaciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101390',
    codigo      : 81500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Impuesto a los Consumos Específicos Mercado Interno'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101391',
    codigo      : 81600,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Impuesto a los Consumos Específicos Importaciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101392',
    codigo      : 81700,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Impuesto Especial a los Hidrocarburos y sus Derivados Mercado Interno'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101393',
    codigo      : 81800,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'mpuesto Especial a los Hidrocarburos y sus Derivados Importación'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101394',
    codigo      : 81900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Otros Impuestos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101395',
    codigo      : 82000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Renta Aduanera'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101396',
    codigo      : 82100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Gravamen Arancelario'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101397',
    codigo      : 83000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Impuestos Municipales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101398',
    codigo      : 83100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Impuesto a la Propiedad de Bienes'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101399',
    codigo      : 83200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Impuesto a las Transferencias onerosas de bienes inmuebles y vehículos automotores'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101400',
    codigo      : 84000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Regalías'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101401',
    codigo      : 84100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Regalías Mineras'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101402',
    codigo      : 84200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Regalías por Hidrocarburos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101403',
    codigo      : 84300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Regalías Agropecuarias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101404',
    codigo      : 84900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Otras Regalías'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101405',
    codigo      : 85000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Tasas, Multas y Otros'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101406',
    codigo      : 85100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Tasas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101407',
    codigo      : 85200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Derechos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101408',
    codigo      : 85300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Contribuciones por Mejoras'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101409',
    codigo      : 85400,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Multas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101410',
    codigo      : 85500,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Intereses Penales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101411',
    codigo      : 85900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Otros'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101412',
    codigo      : 86000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Patentes'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101413',
    codigo      : 86100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101384',
    tipo: 'PARTIDA',
    nombre : 'Patentes'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    codigo      : 90000,
    id_partida_padre: null,
    tipo: 'GRUPO',
    nombre : 'OTROS GASTOS'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101415',
    codigo      : 91000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Intereses de Instituciones Financieras'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101416',
    codigo      : 91100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Intereses de Instituciones Públicas Financieras no Bancarias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101417',
    codigo      : 91200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Intereses de Instituciones Públicas Financieras Bancarias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101418',
    codigo      : 94000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Beneficios Sociales y Otros'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101419',
    codigo      : 94100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Indemnización'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101420',
    codigo      : 94200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Desahucio'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101421',
    codigo      : 94300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Otros Beneficios Sociales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101422',
    codigo      : 95000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Contingencias Judiciales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101423',
    codigo      : 95100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Contingencias Judiciales'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101424',
    codigo      : 96000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Otras Pérdidas y Devoluciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101425',
    codigo      : 96100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Pérdidas en Operaciones Cambiarias'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101426',
    codigo      : 96200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Devoluciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101427',
    codigo      : 96900,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Otras Pérdidas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101428',
    codigo      : 97000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Comisiones y Bonificaciones'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101429',
    codigo      : 97100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Comisiones por Ventas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101430',
    codigo      : 97200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Bonificaciones por Ventas'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101431',
    codigo      : 98000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Retiros de Capital'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101432',
    codigo      : 98100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Del Sector Público'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101433',
    codigo      : 98200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Del Sector Privado'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101434',
    codigo      : 98300,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Pago de Dividendos'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101435',
    codigo      : 99000,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Provisiones para Gastos Corrientes y de Capital'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101436',
    codigo      : 99100,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Provisiones para Gastos de Capital'
  },
  {
    id          : 'bf28223b-4b7c-432c-afd4-dc36f9101437',
    codigo      : 99200,
    id_partida_padre : 'bf28223b-4b7c-432c-afd4-dc36f9101414',
    tipo: 'PARTIDA',
    nombre : 'Provisiones para Gastos Corrientes'
  }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('financiera_partida_presupuestaria', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
