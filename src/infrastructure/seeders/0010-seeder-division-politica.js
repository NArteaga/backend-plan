'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00001',
    codigo_ine : null,
    nivel      : 1,
    nombre     : 'BOLIVIA',
    latitud    : null,
    longitud   : null,
    id_dpa     : null,
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    codigo_ine : null,
    nivel      : 2,
    nombre     : 'LA PAZ',
    latitud    : -16.4973,
    longitud   : -68.1361,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00001',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    codigo_ine : null,
    nivel      : 2,
    nombre     : 'COCHABAMBA',
    latitud    : -17.3919,
    longitud   : -66.1617,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00001',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    codigo_ine : null,
    nivel      : 2,
    nombre     : 'ORURO',
    latitud    : -17.9604,
    longitud   : -67.1141,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00001',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    codigo_ine : null,
    nivel      : 2,
    nombre     : 'POTOSÍ',
    latitud    : -19.5842,
    longitud   : -65.7512,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00001',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00006',
    codigo_ine : null,
    nivel      : 2,
    nombre     : 'TARIJA',
    latitud    : -21.5319,
    longitud   : -64.7374,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00001',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    codigo_ine : null,
    nivel      : 2,
    nombre     : 'SANTA CRUZ',
    latitud    : -17.7748,
    longitud   : -63.1879,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00001',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00008',
    codigo_ine : null,
    nivel      : 2,
    nombre     : 'BENI',
    latitud    : -14.8338,
    longitud   : -64.9022,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00001',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00009',
    codigo_ine : null,
    nivel      : 2,
    nombre     : 'PANDO',
    latitud    : -11.0221,
    longitud   : -68.7589,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00001',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00010',
    codigo_ine : null,
    nivel      : 2,
    nombre     : 'CHUQUISACA',
    latitud    : -19.0482,
    longitud   : -65.2622,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00001',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00011',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MAMORÉ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00008',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00012',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'BELISARIO BOETO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00010',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00013',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ARCE',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00006',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00014',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CERCADO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00015',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ABAROA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00016',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MÉNDEZ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00006',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00017',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'BAUTISTA SAAVEDRA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00018',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MODESTO OMISTE',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00019',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'TOMINA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00010',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00020',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'GENERAL JOSE MANUEL',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00021',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'JOSÉ MARÍA LINARES',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00022',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ÑUFLO DE CHÁVEZ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00023',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'NOR CARANGAS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00024',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'OMASUYOS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00025',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CARANGAS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00026',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'YACUMA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00008',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00027',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MADRE DE DIOS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00009',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00028',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MIZQUE',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00029',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'GUARAYOS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00030',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'PUNATA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00031',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'OBISPO SANTISTEBAN',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00032',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'INQUISIVI',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00033',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'LITORAL',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00034',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'TAPACARÍ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00035',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'SAN PEDRO DE TOTORA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00036',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'VALLE GRANDE',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00037',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'LOAYZA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00038',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'VACA DIÉZ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00008',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00039',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'PACAJES',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00040',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'BOLÍVAR',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00041',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'AVILÉS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00006',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00042',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'LOS ANDES',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00043',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'SUR CARANGAS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00044',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'OROPEZA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00010',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00045',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'NOR YUNGAS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00046',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ABUNÁ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00009',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00047',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'WARNES',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00048',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CARANAVI',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00049',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'PANTALEÓN DALENCE',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00050',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'FRANZ TAMAYO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00051',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CORDILLERA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00052',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'NOR LÍPEZ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00053',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'TIRAQUE',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00054',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ABEL ITURRALDE',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00055',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'FEDERICO ROMÁN',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00009',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00056',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ZUDÁÑEZ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00010',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00057',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'SABAYA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00058',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ÁNGEL SANDOVAL',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00059',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CHARCAS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00060',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'VELASCO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00061',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'AROMA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00062',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ITÉNEZ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00008',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00063',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'LARECAJA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00064',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CHAYANTA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00065',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CHIQUITOS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00066',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'POOPÓ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00067',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CAMPERO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00068',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'NICOLÁS SUÁREZ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00009',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00069',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MUÑECAS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00070',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'SAUCARÍ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00071',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MANURIPI',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00009',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00072',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'TOMAS BARRÓN',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00073',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CORNELIO SAAVEDRA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00074',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CHAPARE',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00075',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CERCADO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00076',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'DANIEL CAMPOS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00077',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'SEBASTIAN PAGADOR',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00078',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MEJILLONES',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00079',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MARBÁN',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00008',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00080',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'FLORIDA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00081',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CAMACHO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00082',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MANUEL M. CABALLERO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00083',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'GENERAL BERNARDINO B',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00084',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'HERNANDO SILES',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00010',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00085',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ARQUE',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00086',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MURILLO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00087',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CAPINOTA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00088',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'SUR CHICHAS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00089',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ESTEBAN ARCE',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00090',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ANDRÉS IBÁÑEZ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00091',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'AYOPAYA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00092',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'GRAN CHACO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00006',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00093',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'QUILLACOLLO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00094',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'INGAVÍ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00095',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CERCADO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00006',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00096',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'LUIS CALVO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00010',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00097',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ARANI',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00098',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'SARA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00099',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MANCO KAPAC',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00100',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ENRIQUE BALDIVIESO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00101',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'LADISLAO CABRERA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00102',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'GERMÁN BUSCH',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00103',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CERCADO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00008',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00104',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'TOMÁS FRÍAS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00105',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'SUR CINTI',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00010',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00106',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'SUR YUNGAS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00107',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'RAFAEL BUSTILLO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00108',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'SAJAMA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00004',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00109',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'NOR CHICHAS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00110',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'BURNET O CONNOR',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00006',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00111',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ICHILO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00007',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00112',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'GERMÁN JORDÁN',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00113',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ANTONIO QUIJARRO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00114',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'MOXOS',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00008',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00115',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'GENERAL JOSE BALLIVIÁN SEGUROLA',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00008',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00116',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'YAMPARAEZ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00010',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00117',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'SUR LÍPEZ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00118',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'GUALBERTO VILLARROEL',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00002',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00119',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'AZURDUY',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00010',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00120',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'ALONSO DE IBÁÑEZ',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00005',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00121',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'CARRASCO',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00003',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00122',
    codigo_ine : null,
    nivel      : 3,
    nombre     : 'NOR CINTI',
    latitud    : null,
    longitud   : null,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00010',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00123',
    codigo_ine : 11002,
    nivel      : 4,
    nombre     : 'VILLA DE HUACAYA',
    latitud    : -20.743663,
    longitud   : -63.664651,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00096',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00124',
    codigo_ine : 11003,
    nivel      : 4,
    nombre     : 'MACHARETÍ',
    latitud    : -20.814573,
    longitud   : -63.361192,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00096',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00125',
    codigo_ine : 20101,
    nivel      : 4,
    nombre     : 'NUESTRA SEÑORA DE LA PAZ',
    latitud    : -16.49361,
    longitud   : -68.134691,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00086',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00126',
    codigo_ine : 20105,
    nivel      : 4,
    nombre     : 'EL ALTO DE LA PAZ',
    latitud    : -16.49468,
    longitud   : -68.173395,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00086',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00127',
    codigo_ine : 20305,
    nivel      : 4,
    nombre     : 'CHARAÑA',
    latitud    : -17.593935,
    longitud   : -69.446114,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00039',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00128',
    codigo_ine : 21801,
    nivel      : 4,
    nombre     : 'SAN PEDRO DE CURAHUARA',
    latitud    : -17.654491,
    longitud   : -68.050047,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00118',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00129',
    codigo_ine : 21802,
    nivel      : 4,
    nombre     : 'PAPEL PAMPA',
    latitud    : -17.819349,
    longitud   : -67.769663,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00118',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00130',
    codigo_ine : 21803,
    nivel      : 4,
    nombre     : 'CHACARILLA',
    latitud    : -17.583826,
    longitud   : -68.215911,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00118',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00131',
    codigo_ine : 21901,
    nivel      : 4,
    nombre     : 'SANTIAGO DE MACHACA',
    latitud    : -17.066647,
    longitud   : -69.19328,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00020',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00132',
    codigo_ine : 50101,
    nivel      : 4,
    nombre     : 'POTOSÍ',
    latitud    : -19.580586,
    longitud   : -65.754229,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00104',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00133',
    codigo_ine : 50102,
    nivel      : 4,
    nombre     : 'TINGUIPAYA',
    latitud    : -19.221975,
    longitud   : -65.820652,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00104',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00134',
    codigo_ine : 50104,
    nivel      : 4,
    nombre     : 'URMIRI (BELÉN DE ANDAMARCA}',
    latitud    : -19.385654,
    longitud   : -66.064283,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00104',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00135',
    codigo_ine : 50302,
    nivel      : 4,
    nombre     : 'CHAQUÍ',
    latitud    : -19.588312,
    longitud   : -65.56111,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00073',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00136',
    codigo_ine : 50404,
    nivel      : 4,
    nombre     : 'OCURÍ',
    latitud    : -18.841711,
    longitud   : -65.795709,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00064',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00137',
    codigo_ine : 50701,
    nivel      : 4,
    nombre     : 'SACACA (VILLA DE SACACA}',
    latitud    : -18.068274,
    longitud   : -66.383602,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00120',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00138',
    codigo_ine : 50901,
    nivel      : 4,
    nombre     : 'COLCHA K (VILLA MARTÍN}',
    latitud    : -20.740225,
    longitud   : -67.660146,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00052',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00139',
    codigo_ine : 51001,
    nivel      : 4,
    nombre     : 'SAN PABLO DE LÍPEZ',
    latitud    : -21.686037,
    longitud   : -66.615951,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00117',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00140',
    codigo_ine : 51003,
    nivel      : 4,
    nombre     : 'SAN ANTONIO DE ESMORUCO',
    latitud    : -21.948068,
    longitud   : -66.516829,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00117',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00141',
    codigo_ine : 51102,
    nivel      : 4,
    nombre     : 'CAIZA',
    latitud    : -20.007279,
    longitud   : -65.654428,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00021',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00142',
    codigo_ine : 60402,
    nivel      : 4,
    nombre     : 'YUNCHARÁ',
    latitud    : -21.821599,
    longitud   : -65.229561,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00041',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00143',
    codigo_ine : 21204,
    nivel      : 4,
    nombre     : 'PUERTO PÉREZ',
    latitud    : -16.284858,
    longitud   : -68.60104,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00042',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00144',
    codigo_ine : 21301,
    nivel      : 4,
    nombre     : 'SICA SICA (VILLA AROMA}',
    latitud    : -17.333671,
    longitud   : -67.740906,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00061',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00145',
    codigo_ine : 21601,
    nivel      : 4,
    nombre     : 'GENERAL JUAN JOSÉ PÉREZ (CHARAZANI}',
    latitud    : -15.177297,
    longitud   : -68.994644,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00017',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00146',
    codigo_ine : 80304,
    nivel      : 4,
    nombre     : 'PUERTO RURRENABAQUE',
    latitud    : -14.441736,
    longitud   : -67.528438,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00115',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00147',
    codigo_ine : 80401,
    nivel      : 4,
    nombre     : 'SANTA ANA (DE YACUMA}',
    latitud    : -13.744248,
    longitud   : -65.427348,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00026',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00148',
    codigo_ine : 80402,
    nivel      : 4,
    nombre     : 'EXALTACIÓN',
    latitud    : -13.320076,
    longitud   : -65.250403,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00026',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00149',
    codigo_ine : 80602,
    nivel      : 4,
    nombre     : 'SAN ANDRÉS',
    latitud    : -15.022869,
    longitud   : -64.666184,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00079',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00150',
    codigo_ine : 80701,
    nivel      : 4,
    nombre     : 'SAN JOAQUÍN',
    latitud    : -13.041123,
    longitud   : -64.667857,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00011',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00151',
    codigo_ine : 30301,
    nivel      : 4,
    nombre     : 'AYOPAYA (VILLA DE INDEPENDENCIA}',
    latitud    : -17.083938,
    longitud   : -66.817676,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00091',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00152',
    codigo_ine : 30901,
    nivel      : 4,
    nombre     : 'QUILLACOLLO',
    latitud    : -17.395483,
    longitud   : -66.279788,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00093',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00153',
    codigo_ine : 31001,
    nivel      : 4,
    nombre     : 'SACABA',
    latitud    : -17.40212,
    longitud   : -66.039124,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00074',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00154',
    codigo_ine : 31002,
    nivel      : 4,
    nombre     : 'COLOMI',
    latitud    : -17.33783,
    longitud   : -65.867576,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00074',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00155',
    codigo_ine : 31501,
    nivel      : 4,
    nombre     : 'BOLÍVAR',
    latitud    : -17.970074,
    longitud   : -66.537038,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00040',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00156',
    codigo_ine : 70705,
    nivel      : 4,
    nombre     : 'GUTIÉRREZ',
    latitud    : -19.422656,
    longitud   : -63.52961,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00051',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00157',
    codigo_ine : 70805,
    nivel      : 4,
    nombre     : 'PUCARÁ',
    latitud    : -18.71504,
    longitud   : -64.185992,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00036',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00158',
    codigo_ine : 71002,
    nivel      : 4,
    nombre     : 'GENERAL AGUSTÍN SAAVEDRA',
    latitud    : -17.226378,
    longitud   : -63.213224,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00031',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00159',
    codigo_ine : 71201,
    nivel      : 4,
    nombre     : 'SAN MATÍAS',
    latitud    : -16.361482,
    longitud   : -58.401066,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00058',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00160',
    codigo_ine : 71501,
    nivel      : 4,
    nombre     : 'ASCENCIÓN DE GUARAYOS',
    latitud    : -15.891756,
    longitud   : -63.189965,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00029',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00161',
    codigo_ine : 80202,
    nivel      : 4,
    nombre     : 'PUERTO GUAYARAMERÍN',
    latitud    : -10.816499,
    longitud   : -65.354652,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00038',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00162',
    codigo_ine : 71106,
    nivel      : 4,
    nombre     : 'CUATRO CAÑADAS',
    latitud    : -17.266746,
    longitud   : -62.557225,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00022',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00163',
    codigo_ine : 71004,
    nivel      : 4,
    nombre     : 'FERNÁNDEZ ALONSO',
    latitud    : -17.006203,
    longitud   : -63.23139,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00031',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00164',
    codigo_ine : 71401,
    nivel      : 4,
    nombre     : 'PUERTO SUÁREZ',
    latitud    : -18.964559,
    longitud   : -57.797625,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00102',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00165',
    codigo_ine : 71403,
    nivel      : 4,
    nombre     : 'EL CARMEN RIVERO TÓRREZ',
    latitud    : -18.828263,
    longitud   : -58.623997,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00102',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00166',
    codigo_ine : 21305,
    nivel      : 4,
    nombre     : 'PATACAMAYA',
    latitud    : -17.240943,
    longitud   : -67.92811,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00061',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00167',
    codigo_ine : 21306,
    nivel      : 4,
    nombre     : 'COLQUENCHA',
    latitud    : -16.931291,
    longitud   : -68.248754,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00061',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00168',
    codigo_ine : 21307,
    nivel      : 4,
    nombre     : 'COLLANA',
    latitud    : -16.904684,
    longitud   : -68.284232,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00061',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00169',
    codigo_ine : 21401,
    nivel      : 4,
    nombre     : 'COROICO',
    latitud    : -16.188182,
    longitud   : -67.727536,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00045',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00170',
    codigo_ine : 10801,
    nivel      : 4,
    nombre     : 'VILLA SERRANO',
    latitud    : -19.123214,
    longitud   : -64.323262,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00012',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00171',
    codigo_ine : 10902,
    nivel      : 4,
    nombre     : 'CULPINA',
    latitud    : -20.823512,
    longitud   : -64.943382,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00105',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00172',
    codigo_ine : 20102,
    nivel      : 4,
    nombre     : 'PALCA',
    latitud    : -16.560943,
    longitud   : -67.952815,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00086',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00173',
    codigo_ine : 20103,
    nivel      : 4,
    nombre     : 'MECAPACA',
    latitud    : -16.665694,
    longitud   : -68.027661,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00086',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00174',
    codigo_ine : 20104,
    nivel      : 4,
    nombre     : 'ACHOCALLA',
    latitud    : -16.574501,
    longitud   : -68.166733,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00086',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00175',
    codigo_ine : 20202,
    nivel      : 4,
    nombre     : 'ANCORAIMES',
    latitud    : -15.897133,
    longitud   : -68.906967,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00024',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00176',
    codigo_ine : 30703,
    nivel      : 4,
    nombre     : 'SICAYA',
    latitud    : -17.800568,
    longitud   : -66.333813,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00087',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00177',
    codigo_ine : 30801,
    nivel      : 4,
    nombre     : 'CLIZA',
    latitud    : -17.591632,
    longitud   : -65.934016,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00112',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00178',
    codigo_ine : 20301,
    nivel      : 4,
    nombre     : 'CORO CORO',
    latitud    : -17.178161,
    longitud   : -68.453093,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00039',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00179',
    codigo_ine : 20302,
    nivel      : 4,
    nombre     : 'CAQUIAVIRI',
    latitud    : -17.023274,
    longitud   : -68.607005,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00039',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00180',
    codigo_ine : 20303,
    nivel      : 4,
    nombre     : 'CALACOTO',
    latitud    : -17.283191,
    longitud   : -68.63637,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00039',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00181',
    codigo_ine : 20304,
    nivel      : 4,
    nombre     : 'COMANCHE',
    latitud    : -16.95676,
    longitud   : -68.427649,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00039',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00182',
    codigo_ine : 30803,
    nivel      : 4,
    nombre     : 'TOLATA',
    latitud    : -17.533909,
    longitud   : -65.962603,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00112',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00183',
    codigo_ine : 31201,
    nivel      : 4,
    nombre     : 'TOTORA',
    latitud    : -17.736504,
    longitud   : -65.191165,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00121',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00184',
    codigo_ine : 31203,
    nivel      : 4,
    nombre     : 'POCONA',
    latitud    : -17.67521,
    longitud   : -65.41995,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00121',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00185',
    codigo_ine : 31205,
    nivel      : 4,
    nombre     : 'PUERTO VILLARROEL',
    latitud    : -16.838792,
    longitud   : -64.79333,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00121',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00186',
    codigo_ine : 31301,
    nivel      : 4,
    nombre     : 'MIZQUE',
    latitud    : -17.943033,
    longitud   : -65.342837,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00028',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00187',
    codigo_ine : 31302,
    nivel      : 4,
    nombre     : 'VILA VILA',
    latitud    : -17.981654,
    longitud   : -65.631775,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00028',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00188',
    codigo_ine : 20602,
    nivel      : 4,
    nombre     : 'GUANAY',
    latitud    : -15.495947,
    longitud   : -67.882632,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00063',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00189',
    codigo_ine : 31202,
    nivel      : 4,
    nombre     : 'POJO',
    latitud    : -17.757582,
    longitud   : -64.865647,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00121',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00190',
    codigo_ine : 20603,
    nivel      : 4,
    nombre     : 'TACACOMA',
    latitud    : -15.589397,
    longitud   : -68.64524,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00063',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00191',
    codigo_ine : 20802,
    nivel      : 4,
    nombre     : 'GUAQUI',
    latitud    : -16.598438,
    longitud   : -68.836605,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00094',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00192',
    codigo_ine : 20804,
    nivel      : 4,
    nombre     : 'DESAGUADERO',
    latitud    : -16.566493,
    longitud   : -69.035322,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00094',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00193',
    codigo_ine : 20701,
    nivel      : 4,
    nombre     : 'APOLO',
    latitud    : -14.717411,
    longitud   : -68.418039,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00050',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00194',
    codigo_ine : 40503,
    nivel      : 4,
    nombre     : 'CRUZ DE MACHACAMARCA',
    latitud    : -18.771482,
    longitud   : -68.311774,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00033',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00195',
    codigo_ine : 30101,
    nivel      : 4,
    nombre     : 'COCHABAMBA',
    latitud    : -17.38146,
    longitud   : -66.158775,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00075',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00196',
    codigo_ine : 30201,
    nivel      : 4,
    nombre     : 'AIQUILE',
    latitud    : -18.201711,
    longitud   : -65.180078,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00067',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00197',
    codigo_ine : 30202,
    nivel      : 4,
    nombre     : 'PASORAPA',
    latitud    : -18.32161,
    longitud   : -64.674901,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00067',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00198',
    codigo_ine : 30203,
    nivel      : 4,
    nombre     : 'OMEREQUE',
    latitud    : -18.108285,
    longitud   : -64.908382,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00067',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00199',
    codigo_ine : 51203,
    nivel      : 4,
    nombre     : 'PORCO',
    latitud    : -19.798197,
    longitud   : -65.988762,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00113',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00200',
    codigo_ine : 70802,
    nivel      : 4,
    nombre     : 'TRIGAL',
    latitud    : -18.305167,
    longitud   : -64.149495,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00036',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00201',
    codigo_ine : 70803,
    nivel      : 4,
    nombre     : 'MORO MORO',
    latitud    : -18.366176,
    longitud   : -64.323512,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00036',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00202',
    codigo_ine : 50103,
    nivel      : 4,
    nombre     : 'YOCALLA',
    latitud    : -19.391342,
    longitud   : -65.9055,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00104',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00203',
    codigo_ine : 70103,
    nivel      : 4,
    nombre     : 'PORONGO (AYACUCHO}',
    latitud    : -17.852028,
    longitud   : -63.308601,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00090',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00204',
    codigo_ine : 70104,
    nivel      : 4,
    nombre     : 'LA GUARDIA',
    latitud    : -17.893316,
    longitud   : -63.329445,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00090',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00205',
    codigo_ine : 90103,
    nivel      : 4,
    nombre     : 'BOLPEBRA (MUKDEN}',
    latitud    : -10.944688,
    longitud   : -69.567313,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00068',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00206',
    codigo_ine : 51302,
    nivel      : 4,
    nombre     : 'ACACIO',
    latitud    : -18.024063,
    longitud   : -66.057414,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00083',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00207',
    codigo_ine : 51501,
    nivel      : 4,
    nombre     : 'VILLAZÓN',
    latitud    : -22.090181,
    longitud   : -65.596531,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00018',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00208',
    codigo_ine : 51601,
    nivel      : 4,
    nombre     : 'SAN AGUSTÍN',
    latitud    : -21.154865,
    longitud   : -67.678318,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00100',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00209',
    codigo_ine : 60302,
    nivel      : 4,
    nombre     : 'CARAPARÍ',
    latitud    : -21.827824,
    longitud   : -63.742386,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00092',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00210',
    codigo_ine : 60401,
    nivel      : 4,
    nombre     : 'URIONDO (CONCEPCIÓN}',
    latitud    : -21.697224,
    longitud   : -64.6632,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00041',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00211',
    codigo_ine : 10901,
    nivel      : 4,
    nombre     : 'CAMATAQUI (VILLA ABECIA}',
    latitud    : -20.973968,
    longitud   : -65.231008,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00105',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00212',
    codigo_ine : 10903,
    nivel      : 4,
    nombre     : 'LAS CARRERAS (LAS CARRETAS}',
    latitud    : -21.211126,
    longitud   : -65.207187,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00105',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00213',
    codigo_ine : 11001,
    nivel      : 4,
    nombre     : 'VILLA VACA GUZMÁN (MUYUPAMPA}',
    latitud    : -19.893233,
    longitud   : -63.74867,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00096',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00214',
    codigo_ine : 21203,
    nivel      : 4,
    nombre     : 'BATALLAS',
    latitud    : -16.299579,
    longitud   : -68.531635,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00042',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00215',
    codigo_ine : 20405,
    nivel      : 4,
    nombre     : 'ESCOMA',
    latitud    : -15.661791,
    longitud   : -69.131203,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00081',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00216',
    codigo_ine : 20803,
    nivel      : 4,
    nombre     : 'TIAHUANACU',
    latitud    : -16.552943,
    longitud   : -68.681141,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00094',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00217',
    codigo_ine : 20807,
    nivel      : 4,
    nombre     : 'TARACO',
    latitud    : -16.456743,
    longitud   : -68.859022,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00094',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00218',
    codigo_ine : 51101,
    nivel      : 4,
    nombre     : 'PUNA (VILLA TALAVERA}',
    latitud    : -19.795409,
    longitud   : -65.506436,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00021',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00219',
    codigo_ine : 30802,
    nivel      : 4,
    nombre     : 'TOKO',
    latitud    : -17.625429,
    longitud   : -65.929062,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00112',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00220',
    codigo_ine : 40101,
    nivel      : 4,
    nombre     : 'ORURO',
    latitud    : -17.967759,
    longitud   : -67.112073,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00014',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00221',
    codigo_ine : 70601,
    nivel      : 4,
    nombre     : 'PORTACHUELO',
    latitud    : -17.353106,
    longitud   : -63.394316,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00098',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00222',
    codigo_ine : 20306,
    nivel      : 4,
    nombre     : 'WALDO BALLIVIÁN',
    latitud    : -17.082819,
    longitud   : -68.186256,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00039',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00223',
    codigo_ine : 60601,
    nivel      : 4,
    nombre     : 'ENTRE RÍOS (LA MORETA}',
    latitud    : -21.526585,
    longitud   : -64.171421,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00110',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00224',
    codigo_ine : 70301,
    nivel      : 4,
    nombre     : 'SAN IGNACIO (SAN IGNACIO DE VELASCO}',
    latitud    : -16.375375,
    longitud   : -60.961939,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00060',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00225',
    codigo_ine : 70302,
    nivel      : 4,
    nombre     : 'SAN MIGUEL (SAN MIGUEL DE VELASCO}',
    latitud    : -16.697679,
    longitud   : -60.967069,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00060',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00226',
    codigo_ine : 70403,
    nivel      : 4,
    nombre     : 'YAPACANÍ',
    latitud    : -17.401446,
    longitud   : -63.883595,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00111',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00227',
    codigo_ine : 70501,
    nivel      : 4,
    nombre     : 'SAN JOSÉ DE CHIQUITOS',
    latitud    : -17.845451,
    longitud   : -60.741215,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00065',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00228',
    codigo_ine : 70502,
    nivel      : 4,
    nombre     : 'PAILÓN',
    latitud    : -17.660111,
    longitud   : -62.717298,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00065',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00229',
    codigo_ine : 70503,
    nivel      : 4,
    nombre     : 'ROBORÉ',
    latitud    : -18.332348,
    longitud   : -59.756885,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00065',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00230',
    codigo_ine : 20307,
    nivel      : 4,
    nombre     : 'NAZACARA DE PACAJES',
    latitud    : -16.937333,
    longitud   : -68.764397,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00039',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00231',
    codigo_ine : 21302,
    nivel      : 4,
    nombre     : 'UMALA',
    latitud    : -17.373317,
    longitud   : -68.021433,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00061',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00232',
    codigo_ine : 90201,
    nivel      : 4,
    nombre     : 'PUERTO RICO',
    latitud    : -11.104636,
    longitud   : -67.5562,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00071',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00233',
    codigo_ine : 90203,
    nivel      : 4,
    nombre     : 'FILADELFIA',
    latitud    : -11.347234,
    longitud   : -68.762557,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00071',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00234',
    codigo_ine : 21703,
    nivel      : 4,
    nombre     : 'TITO YUPANQUI',
    latitud    : -16.188883,
    longitud   : -68.954706,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00099',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00235',
    codigo_ine : 80702,
    nivel      : 4,
    nombre     : 'SAN RAMÓN',
    latitud    : -13.265578,
    longitud   : -64.616823,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00011',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00236',
    codigo_ine : 90202,
    nivel      : 4,
    nombre     : 'SAN PEDRO',
    latitud    : -10.825059,
    longitud   : -66.184521,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00071',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00237',
    codigo_ine : 20308,
    nivel      : 4,
    nombre     : 'SANTIAGO DE CALLAPA',
    latitud    : -17.479589,
    longitud   : -68.355644,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00039',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00238',
    codigo_ine : 20402,
    nivel      : 4,
    nombre     : 'MOCOMOCO',
    latitud    : -15.455732,
    longitud   : -68.996394,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00081',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00239',
    codigo_ine : 20403,
    nivel      : 4,
    nombre     : 'PUERTO CARABUCO',
    latitud    : -15.758209,
    longitud   : -69.063875,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00081',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00240',
    codigo_ine : 20501,
    nivel      : 4,
    nombre     : 'CHUMA',
    latitud    : -15.479623,
    longitud   : -68.898519,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00069',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00241',
    codigo_ine : 20502,
    nivel      : 4,
    nombre     : 'AYATA',
    latitud    : -15.459249,
    longitud   : -68.834701,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00069',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00242',
    codigo_ine : 30401,
    nivel      : 4,
    nombre     : 'TARATA',
    latitud    : -17.613014,
    longitud   : -66.02419,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00089',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00243',
    codigo_ine : 30402,
    nivel      : 4,
    nombre     : 'ANZALDO',
    latitud    : -17.783426,
    longitud   : -65.9357,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00089',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00244',
    codigo_ine : 30403,
    nivel      : 4,
    nombre     : 'ARBIETO',
    latitud    : -17.581742,
    longitud   : -66.015304,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00089',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00245',
    codigo_ine : 21303,
    nivel      : 4,
    nombre     : 'AYO AYO',
    latitud    : -17.091387,
    longitud   : -68.003628,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00061',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00246',
    codigo_ine : 20401,
    nivel      : 4,
    nombre     : 'PUERTO ACOSTA',
    latitud    : -15.532981,
    longitud   : -69.252206,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00081',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00247',
    codigo_ine : 90302,
    nivel      : 4,
    nombre     : 'SAN LORENZO',
    latitud    : -11.888293,
    longitud   : -66.97922,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00027',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00248',
    codigo_ine : 30702,
    nivel      : 4,
    nombre     : 'SANTIVAÑEZ',
    latitud    : -17.550365,
    longitud   : -66.248011,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00087',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00249',
    codigo_ine : 30902,
    nivel      : 4,
    nombre     : 'SIPE SIPE',
    latitud    : -17.454195,
    longitud   : -66.354226,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00093',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00250',
    codigo_ine : 30903,
    nivel      : 4,
    nombre     : 'TIQUIPAYA',
    latitud    : -17.338126,
    longitud   : -66.219582,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00093',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00251',
    codigo_ine : 30904,
    nivel      : 4,
    nombre     : 'VINTO',
    latitud    : -17.382402,
    longitud   : -66.31645,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00093',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00252',
    codigo_ine : 10101,
    nivel      : 4,
    nombre     : 'SUCRE',
    latitud    : -19.04652,
    longitud   : -65.260168,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00044',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00253',
    codigo_ine : 10102,
    nivel      : 4,
    nombre     : 'YOTALA',
    latitud    : -19.162085,
    longitud   : -65.26438,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00044',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00254',
    codigo_ine : 10103,
    nivel      : 4,
    nombre     : 'POROMA',
    latitud    : -18.537912,
    longitud   : -65.425041,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00044',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00255',
    codigo_ine : 10201,
    nivel      : 4,
    nombre     : 'VILLA AZURDUY',
    latitud    : -20.105652,
    longitud   : -64.413586,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00119',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00256',
    codigo_ine : 10302,
    nivel      : 4,
    nombre     : 'PRESTO',
    latitud    : -18.930182,
    longitud   : -64.93697,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00056',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00257',
    codigo_ine : 10303,
    nivel      : 4,
    nombre     : 'VILLA MOJOCOYA',
    latitud    : -18.763364,
    longitud   : -64.6179,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00056',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00258',
    codigo_ine : 10401,
    nivel      : 4,
    nombre     : 'PADILLA',
    latitud    : -19.307311,
    longitud   : -64.301973,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00019',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00259',
    codigo_ine : 10404,
    nivel      : 4,
    nombre     : 'VILLA ALCALÁ',
    latitud    : -19.366278,
    longitud   : -64.389301,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00019',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00260',
    codigo_ine : 10402,
    nivel      : 4,
    nombre     : 'TOMINA',
    latitud    : -19.185425,
    longitud   : -64.460602,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00019',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00261',
    codigo_ine : 10403,
    nivel      : 4,
    nombre     : 'SOPACHUY',
    latitud    : -19.487019,
    longitud   : -64.474731,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00019',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00262',
    codigo_ine : 10405,
    nivel      : 4,
    nombre     : 'EL VILLAR',
    latitud    : -19.628835,
    longitud   : -64.309609,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00019',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00263',
    codigo_ine : 10501,
    nivel      : 4,
    nombre     : 'MONTEAGUDO',
    latitud    : -19.799893,
    longitud   : -63.954767,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00084',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00264',
    codigo_ine : 10502,
    nivel      : 4,
    nombre     : 'SAN PABLO DE HUACARETA',
    latitud    : -20.366776,
    longitud   : -64.002739,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00084',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00265',
    codigo_ine : 10601,
    nivel      : 4,
    nombre     : 'TARABUCO',
    latitud    : -19.181146,
    longitud   : -64.915421,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00116',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00266',
    codigo_ine : 10602,
    nivel      : 4,
    nombre     : 'YAMPAREZ',
    latitud    : -19.189121,
    longitud   : -65.118104,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00116',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00267',
    codigo_ine : 10701,
    nivel      : 4,
    nombre     : 'CAMARGO',
    latitud    : -20.640628,
    longitud   : -65.210044,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00122',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00268',
    codigo_ine : 10702,
    nivel      : 4,
    nombre     : 'SAN LUCAS',
    latitud    : -20.10198,
    longitud   : -65.133564,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00122',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00269',
    codigo_ine : 21304,
    nivel      : 4,
    nombre     : 'CALAMARCA',
    latitud    : -16.909779,
    longitud   : -68.119037,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00061',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00270',
    codigo_ine : 30905,
    nivel      : 4,
    nombre     : 'COLCAPIRHUA',
    latitud    : -17.389566,
    longitud   : -66.241267,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00093',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00271',
    codigo_ine : 31003,
    nivel      : 4,
    nombre     : 'VILLA TUNARI',
    latitud    : -16.973048,
    longitud   : -65.419601,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00074',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00272',
    codigo_ine : 31101,
    nivel      : 4,
    nombre     : 'TAPACARÍ',
    latitud    : -17.521161,
    longitud   : -66.616445,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00034',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00273',
    codigo_ine : 31204,
    nivel      : 4,
    nombre     : 'CHIMORÉ',
    latitud    : -16.994429,
    longitud   : -65.150916,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00121',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00274',
    codigo_ine : 31403,
    nivel      : 4,
    nombre     : 'SAN BENITO (VILLA JOSÉ QUINTÍN MENDOZA}',
    latitud    : -17.522699,
    longitud   : -65.894408,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00030',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00275',
    codigo_ine : 21004,
    nivel      : 4,
    nombre     : 'COLQUIRI',
    latitud    : -17.387683,
    longitud   : -67.128681,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00032',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00276',
    codigo_ine : 21006,
    nivel      : 4,
    nombre     : 'LICOMA PAMPA',
    latitud    : -16.805689,
    longitud   : -67.202089,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00032',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00277',
    codigo_ine : 21101,
    nivel      : 4,
    nombre     : 'CHULUMANI (VILLA DE LA LIBERTAD}',
    latitud    : -16.409358,
    longitud   : -67.525732,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00106',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00278',
    codigo_ine : 21102,
    nivel      : 4,
    nombre     : 'IRUPANA (VILLA DE LANZA}',
    latitud    : -16.465799,
    longitud   : -67.454647,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00106',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00279',
    codigo_ine : 20905,
    nivel      : 4,
    nombre     : 'CAIROMA',
    latitud    : -16.903466,
    longitud   : -67.539988,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00037',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00280',
    codigo_ine : 21001,
    nivel      : 4,
    nombre     : 'INQUISIVI',
    latitud    : -16.907745,
    longitud   : -67.138331,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00032',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00281',
    codigo_ine : 21002,
    nivel      : 4,
    nombre     : 'QUIME',
    latitud    : -16.98141,
    longitud   : -67.217917,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00032',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00282',
    codigo_ine : 21003,
    nivel      : 4,
    nombre     : 'CAJUATA',
    latitud    : -16.699016,
    longitud   : -67.172648,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00032',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00283',
    codigo_ine : 21005,
    nivel      : 4,
    nombre     : 'ICHOCA',
    latitud    : -17.139833,
    longitud   : -67.187477,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00032',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00284',
    codigo_ine : 21103,
    nivel      : 4,
    nombre     : 'YANACACHI',
    latitud    : -16.390542,
    longitud   : -67.735261,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00106',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00285',
    codigo_ine : 21104,
    nivel      : 4,
    nombre     : 'PALOS BLANCOS',
    latitud    : -15.5848,
    longitud   : -67.247984,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00106',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00286',
    codigo_ine : 21105,
    nivel      : 4,
    nombre     : 'LA ASUNTA',
    latitud    : -16.124336,
    longitud   : -67.194624,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00106',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00287',
    codigo_ine : 21201,
    nivel      : 4,
    nombre     : 'PUCARANI',
    latitud    : -16.399271,
    longitud   : -68.477478,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00042',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00288',
    codigo_ine : 31405,
    nivel      : 4,
    nombre     : 'CUCHUMUELA (VILLA GUALBERTO VILLARROEL}',
    latitud    : -17.665837,
    longitud   : -65.795717,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00030',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00289',
    codigo_ine : 40302,
    nivel      : 4,
    nombre     : 'CHOQUE COTA',
    latitud    : -18.098375,
    longitud   : -67.895526,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00025',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00290',
    codigo_ine : 40504,
    nivel      : 4,
    nombre     : 'YUNGUYO DE LITORAL',
    latitud    : -18.853423,
    longitud   : -68.320751,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00033',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00291',
    codigo_ine : 40601,
    nivel      : 4,
    nombre     : 'POOPÓ (VILLA POOPÓ}',
    latitud    : -18.380395,
    longitud   : -66.968524,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00066',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00292',
    codigo_ine : 40603,
    nivel      : 4,
    nombre     : 'ANTEQUERA (BOLÍVAR}',
    latitud    : -18.471123,
    longitud   : -66.825837,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00066',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00293',
    codigo_ine : 40801,
    nivel      : 4,
    nombre     : 'SALINAS DE GARCÍ MENDOZA',
    latitud    : -19.638428,
    longitud   : -67.676341,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00101',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00294',
    codigo_ine : 41201,
    nivel      : 4,
    nombre     : 'ANDAMARCA (SANTIAGO DE ANDAMARCA}',
    latitud    : -18.778789,
    longitud   : -67.508325,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00043',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00295',
    codigo_ine : 41202,
    nivel      : 4,
    nombre     : 'BELÉN DE ANDAMARCA',
    latitud    : -18.817236,
    longitud   : -67.64146,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00043',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00296',
    codigo_ine : 41601,
    nivel      : 4,
    nombre     : 'HUAYLLAMARCA (SANTIAGO DE HUAYLLAMARCA}',
    latitud    : -17.840994,
    longitud   : -67.945841,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00023',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00297',
    codigo_ine : 90301,
    nivel      : 4,
    nombre     : 'PUERTO GONZALO MORENO',
    latitud    : -11.086631,
    longitud   : -66.167044,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00027',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00298',
    codigo_ine : 90402,
    nivel      : 4,
    nombre     : 'INGAVI (HUMAITA}',
    latitud    : -10.81628,
    longitud   : -66.449197,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00046',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00299',
    codigo_ine : 10202,
    nivel      : 4,
    nombre     : 'TARVITA (VILLA ORÍAS}',
    latitud    : -19.926035,
    longitud   : -64.483608,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00119',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00300',
    codigo_ine : 10301,
    nivel      : 4,
    nombre     : 'VILLA ZUDAÑEZ (TACOPAYA}',
    latitud    : -19.119782,
    longitud   : -64.698896,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00056',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00301',
    codigo_ine : 10304,
    nivel      : 4,
    nombre     : 'ICLA (RICARDO MUJIA}',
    latitud    : -19.36343,
    longitud   : -64.793112,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00056',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00302',
    codigo_ine : 21202,
    nivel      : 4,
    nombre     : 'LAJA',
    latitud    : -16.536534,
    longitud   : -68.385518,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00042',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00303',
    codigo_ine : 21602,
    nivel      : 4,
    nombre     : 'CURVA',
    latitud    : -15.131128,
    longitud   : -68.999245,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00017',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00304',
    codigo_ine : 21701,
    nivel      : 4,
    nombre     : 'COPACABANA',
    latitud    : -16.165466,
    longitud   : -69.086934,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00099',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00305',
    codigo_ine : 21702,
    nivel      : 4,
    nombre     : 'SAN PEDRO DE TIQUINA',
    latitud    : -16.221504,
    longitud   : -68.85394,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00099',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00306',
    codigo_ine : 20503,
    nivel      : 4,
    nombre     : 'AUCAPATA',
    latitud    : -15.479418,
    longitud   : -68.718922,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00069',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00307',
    codigo_ine : 20601,
    nivel      : 4,
    nombre     : 'SORATA',
    latitud    : -15.773249,
    longitud   : -68.649388,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00063',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00308',
    codigo_ine : 20201,
    nivel      : 4,
    nombre     : 'ACHACACHI',
    latitud    : -16.043287,
    longitud   : -68.685282,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00024',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00309',
    codigo_ine : 20605,
    nivel      : 4,
    nombre     : 'COMBAYA',
    latitud    : -15.805272,
    longitud   : -68.754761,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00063',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00310',
    codigo_ine : 31303,
    nivel      : 4,
    nombre     : 'ALALAY',
    latitud    : -17.701445,
    longitud   : -65.699216,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00028',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00311',
    codigo_ine : 31401,
    nivel      : 4,
    nombre     : 'PUNATA',
    latitud    : -17.546136,
    longitud   : -65.838482,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00030',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00312',
    codigo_ine : 31402,
    nivel      : 4,
    nombre     : 'VILLA RIVERO',
    latitud    : -17.616305,
    longitud   : -65.812841,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00030',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00313',
    codigo_ine : 41101,
    nivel      : 4,
    nombre     : 'EUCALIPTUS',
    latitud    : -17.596838,
    longitud   : -67.508494,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00072',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00314',
    codigo_ine : 41301,
    nivel      : 4,
    nombre     : 'SAN PEDRO DE TOTORA',
    latitud    : -17.793673,
    longitud   : -68.146077,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00035',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00315',
    codigo_ine : 41401,
    nivel      : 4,
    nombre     : 'SANTIAGO DE HUARI',
    latitud    : -19.012181,
    longitud   : -66.777012,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00077',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00316',
    codigo_ine : 31404,
    nivel      : 4,
    nombre     : 'TACACHI',
    latitud    : -17.641932,
    longitud   : -65.801245,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00030',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00317',
    codigo_ine : 40102,
    nivel      : 4,
    nombre     : 'CARACOLLO',
    latitud    : -17.643245,
    longitud   : -67.21271,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00014',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00318',
    codigo_ine : 40103,
    nivel      : 4,
    nombre     : 'EL CHORO',
    latitud    : -18.357339,
    longitud   : -67.115623,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00014',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00319',
    codigo_ine : 40201,
    nivel      : 4,
    nombre     : 'CHALLAPATA',
    latitud    : -18.90082,
    longitud   : -66.774693,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00015',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00320',
    codigo_ine : 40202,
    nivel      : 4,
    nombre     : 'SANTUARIO DE QUILLACAS',
    latitud    : -19.23317,
    longitud   : -66.942413,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00015',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00321',
    codigo_ine : 40301,
    nivel      : 4,
    nombre     : 'CORQUE',
    latitud    : -18.351017,
    longitud   : -67.681877,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00025',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00322',
    codigo_ine : 40401,
    nivel      : 4,
    nombre     : 'CURAHUARA DE CARANGAS',
    latitud    : -17.842347,
    longitud   : -68.410052,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00108',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00323',
    codigo_ine : 40402,
    nivel      : 4,
    nombre     : 'TURCO',
    latitud    : -18.180721,
    longitud   : -68.193562,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00108',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00324',
    codigo_ine : 80703,
    nivel      : 4,
    nombre     : 'PUERTO SILES',
    latitud    : -12.79933,
    longitud   : -65.002256,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00011',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00325',
    codigo_ine : 80801,
    nivel      : 4,
    nombre     : 'MAGDALENA',
    latitud    : -13.262423,
    longitud   : -64.054508,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00062',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00326',
    codigo_ine : 80802,
    nivel      : 4,
    nombre     : 'BAURES',
    latitud    : -13.655432,
    longitud   : -63.695852,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00062',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00327',
    codigo_ine : 80803,
    nivel      : 4,
    nombre     : 'HUACARAJE',
    latitud    : -13.592809,
    longitud   : -63.8802,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00062',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00328',
    codigo_ine : 90101,
    nivel      : 4,
    nombre     : 'COBIJA',
    latitud    : -11.024813,
    longitud   : -68.761127,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00068',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00329',
    codigo_ine : 90102,
    nivel      : 4,
    nombre     : 'PORVENIR',
    latitud    : -11.237475,
    longitud   : -68.687711,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00068',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00330',
    codigo_ine : 30303,
    nivel      : 4,
    nombre     : 'COCAPATA',
    latitud    : -16.838027,
    longitud   : -66.630068,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00091',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00331',
    codigo_ine : 31601,
    nivel      : 4,
    nombre     : 'TIRAQUE',
    latitud    : -17.427384,
    longitud   : -65.72363,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00053',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00332',
    codigo_ine : 31602,
    nivel      : 4,
    nombre     : 'SHINAHOTA',
    latitud    : -16.993587,
    longitud   : -65.245342,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00053',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00333',
    codigo_ine : 50201,
    nivel      : 4,
    nombre     : 'UNCÍA',
    latitud    : -18.466473,
    longitud   : -66.568392,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00107',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00334',
    codigo_ine : 30302,
    nivel      : 4,
    nombre     : 'MOROCHATA',
    latitud    : -17.23462,
    longitud   : -66.531899,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00091',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00335',
    codigo_ine : 20604,
    nivel      : 4,
    nombre     : 'QUIABAYA',
    latitud    : -15.632848,
    longitud   : -68.703182,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00063',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00336',
    codigo_ine : 20901,
    nivel      : 4,
    nombre     : 'LURIBAY',
    latitud    : -17.062512,
    longitud   : -67.661242,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00037',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00337',
    codigo_ine : 20902,
    nivel      : 4,
    nombre     : 'SAPAHAQUI',
    latitud    : -16.888535,
    longitud   : -67.949628,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00037',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00338',
    codigo_ine : 20903,
    nivel      : 4,
    nombre     : 'YACO',
    latitud    : -17.157969,
    longitud   : -67.410693,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00037',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00339',
    codigo_ine : 20904,
    nivel      : 4,
    nombre     : 'MALLA',
    latitud    : -17.040112,
    longitud   : -67.450583,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00037',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00340',
    codigo_ine : 21402,
    nivel      : 4,
    nombre     : 'CORIPATA',
    latitud    : -16.314489,
    longitud   : -67.606881,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00045',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00341',
    codigo_ine : 21501,
    nivel      : 4,
    nombre     : 'IXIAMAS',
    latitud    : -13.7678,
    longitud   : -68.125136,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00054',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00342',
    codigo_ine : 21502,
    nivel      : 4,
    nombre     : 'SAN BUENAVENTURA',
    latitud    : -14.43816,
    longitud   : -67.536588,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00054',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00343',
    codigo_ine : 20801,
    nivel      : 4,
    nombre     : 'VIACHA',
    latitud    : -16.653689,
    longitud   : -68.301563,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00094',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00344',
    codigo_ine : 20606,
    nivel      : 4,
    nombre     : 'TIPUANI',
    latitud    : -15.565077,
    longitud   : -68.020798,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00063',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00345',
    codigo_ine : 20702,
    nivel      : 4,
    nombre     : 'PELECHUCO',
    latitud    : -14.820213,
    longitud   : -69.070214,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00050',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00346',
    codigo_ine : 20607,
    nivel      : 4,
    nombre     : 'MAPIRI',
    latitud    : -15.310308,
    longitud   : -68.226819,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00063',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00347',
    codigo_ine : 21902,
    nivel      : 4,
    nombre     : 'CATACORA',
    latitud    : -17.161012,
    longitud   : -69.48326,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00020',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00348',
    codigo_ine : 40505,
    nivel      : 4,
    nombre     : 'ESMERALDA',
    latitud    : -18.843587,
    longitud   : -68.281274,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00033',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00349',
    codigo_ine : 40602,
    nivel      : 4,
    nombre     : 'PAZA',
    latitud    : -18.599319,
    longitud   : -66.921485,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00066',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00350',
    codigo_ine : 40701,
    nivel      : 4,
    nombre     : 'VILLA HUANUNI',
    latitud    : -18.287805,
    longitud   : -66.83995,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00049',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00351',
    codigo_ine : 40702,
    nivel      : 4,
    nombre     : 'MACHACAMARCA',
    latitud    : -18.172474,
    longitud   : -67.021137,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00049',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00352',
    codigo_ine : 40802,
    nivel      : 4,
    nombre     : 'PAMPA AULLAGAS',
    latitud    : -19.197092,
    longitud   : -67.062075,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00101',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00353',
    codigo_ine : 40901,
    nivel      : 4,
    nombre     : 'SABAYA',
    latitud    : -19.015706,
    longitud   : -68.372673,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00057',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00354',
    codigo_ine : 40902,
    nivel      : 4,
    nombre     : 'COIPASA',
    latitud    : -19.277662,
    longitud   : -68.277712,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00057',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00355',
    codigo_ine : 40903,
    nivel      : 4,
    nombre     : 'CHIPAYA',
    latitud    : -19.04187,
    longitud   : -68.088909,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00057',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00356',
    codigo_ine : 41001,
    nivel      : 4,
    nombre     : 'TOLEDO',
    latitud    : -18.181802,
    longitud   : -67.406997,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00070',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00357',
    codigo_ine : 30404,
    nivel      : 4,
    nombre     : 'SACABAMBA',
    latitud    : -17.811745,
    longitud   : -65.776497,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00089',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00358',
    codigo_ine : 30501,
    nivel      : 4,
    nombre     : 'ARANI',
    latitud    : -17.572769,
    longitud   : -65.770403,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00097',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00359',
    codigo_ine : 30502,
    nivel      : 4,
    nombre     : 'VACAS',
    latitud    : -17.575329,
    longitud   : -65.580254,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00097',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00360',
    codigo_ine : 30601,
    nivel      : 4,
    nombre     : 'ARQUE',
    latitud    : -17.821321,
    longitud   : -66.401753,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00085',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00361',
    codigo_ine : 30602,
    nivel      : 4,
    nombre     : 'TACOPAYA',
    latitud    : -17.837403,
    longitud   : -66.53466,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00085',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00362',
    codigo_ine : 30701,
    nivel      : 4,
    nombre     : 'CAPINOTA',
    latitud    : -17.716009,
    longitud   : -66.26304,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00087',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00363',
    codigo_ine : 40501,
    nivel      : 4,
    nombre     : 'HUACHACALLA',
    latitud    : -18.793457,
    longitud   : -68.262261,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00033',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00364',
    codigo_ine : 40502,
    nivel      : 4,
    nombre     : 'ESCARA',
    latitud    : -18.859576,
    longitud   : -68.170463,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00033',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00365',
    codigo_ine : 80102,
    nivel      : 4,
    nombre     : 'SAN JAVIER',
    latitud    : -14.599989,
    longitud   : -64.880946,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00103',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00366',
    codigo_ine : 80201,
    nivel      : 4,
    nombre     : 'RIBERALTA',
    latitud    : -11.001756,
    longitud   : -66.0715,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00038',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00367',
    codigo_ine : 80301,
    nivel      : 4,
    nombre     : 'REYES',
    latitud    : -14.296329,
    longitud   : -67.336181,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00115',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00368',
    codigo_ine : 41501,
    nivel      : 4,
    nombre     : 'LA RIVERA',
    latitud    : -19.004913,
    longitud   : -68.63998,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00078',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00369',
    codigo_ine : 51301,
    nivel      : 4,
    nombre     : 'ARAMPAMPA',
    latitud    : -17.874903,
    longitud   : -66.079601,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00083',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00370',
    codigo_ine : 51401,
    nivel      : 4,
    nombre     : 'LLICA',
    latitud    : -19.851909,
    longitud   : -68.248138,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00076',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00371',
    codigo_ine : 51402,
    nivel      : 4,
    nombre     : 'TAHUA',
    latitud    : -19.889769,
    longitud   : -67.692964,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00076',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00372',
    codigo_ine : 60101,
    nivel      : 4,
    nombre     : 'TARIJA',
    latitud    : -21.531616,
    longitud   : -64.732905,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00095',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00373',
    codigo_ine : 60201,
    nivel      : 4,
    nombre     : 'PADCAYA',
    latitud    : -21.882231,
    longitud   : -64.709142,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00013',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00374',
    codigo_ine : 60202,
    nivel      : 4,
    nombre     : 'BERMEJO',
    latitud    : -22.733069,
    longitud   : -64.342461,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00013',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00375',
    codigo_ine : 60301,
    nivel      : 4,
    nombre     : 'YACUIBA',
    latitud    : -22.012815,
    longitud   : -63.677477,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00092',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00376',
    codigo_ine : 60303,
    nivel      : 4,
    nombre     : 'VILLAMONTES',
    latitud    : -21.260201,
    longitud   : -63.474853,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00092',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00377',
    codigo_ine : 60501,
    nivel      : 4,
    nombre     : 'VILLA SAN LORENZO',
    latitud    : -21.415305,
    longitud   : -64.748857,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00016',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00378',
    codigo_ine : 60502,
    nivel      : 4,
    nombre     : 'TOMAYAPO (EL PUENTE}',
    latitud    : -21.231388,
    longitud   : -65.206055,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00016',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00379',
    codigo_ine : 70101,
    nivel      : 4,
    nombre     : 'SANTA CRUZ DE LA SIERRA',
    latitud    : -17.784283,
    longitud   : -63.178917,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00090',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00380',
    codigo_ine : 80101,
    nivel      : 4,
    nombre     : 'TRINIDAD',
    latitud    : -14.835786,
    longitud   : -64.901849,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00103',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00381',
    codigo_ine : 41502,
    nivel      : 4,
    nombre     : 'TODOS SANTOS',
    latitud    : -19.014884,
    longitud   : -68.720562,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00078',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00382',
    codigo_ine : 70804,
    nivel      : 4,
    nombre     : 'POSTRER VALLE',
    latitud    : -18.492669,
    longitud   : -63.841323,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00036',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00383',
    codigo_ine : 70901,
    nivel      : 4,
    nombre     : 'SAMAIPATA',
    latitud    : -18.179048,
    longitud   : -63.87709,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00080',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00384',
    codigo_ine : 70902,
    nivel      : 4,
    nombre     : 'PAMPA GRANDE',
    latitud    : -18.091075,
    longitud   : -64.111168,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00080',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00385',
    codigo_ine : 70903,
    nivel      : 4,
    nombre     : 'MAIRANA',
    latitud    : -18.12141,
    longitud   : -63.958735,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00080',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00386',
    codigo_ine : 70904,
    nivel      : 4,
    nombre     : 'QUIRUSILLAS',
    latitud    : -18.334814,
    longitud   : -63.947652,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00080',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00387',
    codigo_ine : 71001,
    nivel      : 4,
    nombre     : 'MONTERO',
    latitud    : -17.341231,
    longitud   : -63.256758,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00031',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00388',
    codigo_ine : 71301,
    nivel      : 4,
    nombre     : 'COMARAPA',
    latitud    : -17.915489,
    longitud   : -64.526923,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00082',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00389',
    codigo_ine : 71302,
    nivel      : 4,
    nombre     : 'SAIPINA',
    latitud    : -18.093935,
    longitud   : -64.583878,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00082',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00390',
    codigo_ine : 71402,
    nivel      : 4,
    nombre     : 'PUERTO QUIJARRO',
    latitud    : -19.005687,
    longitud   : -57.716281,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00102',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00391',
    codigo_ine : 71503,
    nivel      : 4,
    nombre     : 'EL PUENTE',
    latitud    : -16.328627,
    longitud   : -62.910875,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00029',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00392',
    codigo_ine : 80302,
    nivel      : 4,
    nombre     : 'SAN BORJA',
    latitud    : -14.858182,
    longitud   : -66.747108,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00115',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00393',
    codigo_ine : 80303,
    nivel      : 4,
    nombre     : 'SANTA ROSA',
    latitud    : -14.079259,
    longitud   : -66.791835,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00115',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00394',
    codigo_ine : 80501,
    nivel      : 4,
    nombre     : 'SAN IGNACIO',
    latitud    : -14.996354,
    longitud   : -65.637568,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00114',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00395',
    codigo_ine : 71102,
    nivel      : 4,
    nombre     : 'SAN JAVIER',
    latitud    : -16.274156,
    longitud   : -62.504378,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00022',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00396',
    codigo_ine : 71105,
    nivel      : 4,
    nombre     : 'SAN ANTONIO DE LOMERIO',
    latitud    : -16.768524,
    longitud   : -61.809708,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00022',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00397',
    codigo_ine : 41503,
    nivel      : 4,
    nombre     : 'CARANGAS',
    latitud    : -18.939205,
    longitud   : -68.624299,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00078',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00398',
    codigo_ine : 50202,
    nivel      : 4,
    nombre     : 'CHAYANTA',
    latitud    : -18.461201,
    longitud   : -66.442174,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00107',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00399',
    codigo_ine : 50203,
    nivel      : 4,
    nombre     : 'LLALLAGUA',
    latitud    : -18.423079,
    longitud   : -66.583476,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00107',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00400',
    codigo_ine : 50301,
    nivel      : 4,
    nombre     : 'BETANZOS',
    latitud    : -19.55289,
    longitud   : -65.452863,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00073',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00401',
    codigo_ine : 50303,
    nivel      : 4,
    nombre     : 'TACOBAMBA',
    latitud    : -19.207012,
    longitud   : -65.556472,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00073',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00402',
    codigo_ine : 50401,
    nivel      : 4,
    nombre     : 'COLQUECHACA',
    latitud    : -18.697067,
    longitud   : -66.002171,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00064',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00403',
    codigo_ine : 50402,
    nivel      : 4,
    nombre     : 'RAVELO',
    latitud    : -18.80656,
    longitud   : -65.511604,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00064',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00404',
    codigo_ine : 50403,
    nivel      : 4,
    nombre     : 'POCOATA',
    latitud    : -18.699707,
    longitud   : -66.1617,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00064',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00405',
    codigo_ine : 50501,
    nivel      : 4,
    nombre     : 'SAN PEDRO DE BUENA VISTA',
    latitud    : -18.270112,
    longitud   : -65.980138,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00059',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00406',
    codigo_ine : 50502,
    nivel      : 4,
    nombre     : 'TORO TORO',
    latitud    : -18.133563,
    longitud   : -65.761326,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00059',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00407',
    codigo_ine : 50601,
    nivel      : 4,
    nombre     : 'COTAGAITA',
    latitud    : -20.815551,
    longitud   : -65.658489,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00109',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00408',
    codigo_ine : 50602,
    nivel      : 4,
    nombre     : 'VITICHI',
    latitud    : -20.207605,
    longitud   : -65.492896,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00109',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00409',
    codigo_ine : 50702,
    nivel      : 4,
    nombre     : 'CARIPUYO',
    latitud    : -18.232225,
    longitud   : -66.472904,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00120',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00410',
    codigo_ine : 50801,
    nivel      : 4,
    nombre     : 'TUPIZA',
    latitud    : -21.441337,
    longitud   : -65.720022,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00088',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00411',
    codigo_ine : 50802,
    nivel      : 4,
    nombre     : 'ATOCHA',
    latitud    : -20.932225,
    longitud   : -66.219397,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00088',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00412',
    codigo_ine : 50902,
    nivel      : 4,
    nombre     : 'SAN PEDRO DE QUEMES',
    latitud    : -20.746503,
    longitud   : -68.048771,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00052',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00413',
    codigo_ine : 51002,
    nivel      : 4,
    nombre     : 'MOJINETE',
    latitud    : -21.765252,
    longitud   : -66.241139,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00117',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00414',
    codigo_ine : 51201,
    nivel      : 4,
    nombre     : 'UYUNI (THOLA PAMPA}',
    latitud    : -20.460392,
    longitud   : -66.823413,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00113',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00415',
    codigo_ine : 51202,
    nivel      : 4,
    nombre     : 'TOMAVE',
    latitud    : -20.065034,
    longitud   : -66.531472,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00113',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00416',
    codigo_ine : 80601,
    nivel      : 4,
    nombre     : 'LORETO',
    latitud    : -15.193695,
    longitud   : -64.760255,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00079',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00417',
    codigo_ine : 50204,
    nivel      : 4,
    nombre     : 'CHUQUIHUTA',
    latitud    : -18.591984,
    longitud   : -66.367986,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00107',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00418',
    codigo_ine : 40104,
    nivel      : 4,
    nombre     : 'SORACACHI',
    latitud    : -17.817317,
    longitud   : -67.02172,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00014',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00419',
    codigo_ine : 51103,
    nivel      : 4,
    nombre     : 'CKOCHAS',
    latitud    : -19.637529,
    longitud   : -65.274821,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00021',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00420',
    codigo_ine : 70102,
    nivel      : 4,
    nombre     : 'COTOCA',
    latitud    : -17.754164,
    longitud   : -62.996337,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00090',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00421',
    codigo_ine : 70105,
    nivel      : 4,
    nombre     : 'EL TORNO',
    latitud    : -17.992167,
    longitud   : -63.381734,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00090',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00422',
    codigo_ine : 70303,
    nivel      : 4,
    nombre     : 'SAN RAFAEL',
    latitud    : -16.786975,
    longitud   : -60.67453,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00060',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00423',
    codigo_ine : 70401,
    nivel      : 4,
    nombre     : 'BUENA VISTA',
    latitud    : -17.459306,
    longitud   : -63.659923,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00111',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00424',
    codigo_ine : 70602,
    nivel      : 4,
    nombre     : 'SANTA ROSA DEL SARA',
    latitud    : -17.108944,
    longitud   : -63.59871,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00098',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00425',
    codigo_ine : 70701,
    nivel      : 4,
    nombre     : 'LAGUNILLAS',
    latitud    : -19.650384,
    longitud   : -63.674342,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00051',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00426',
    codigo_ine : 70702,
    nivel      : 4,
    nombre     : 'CHARAGUA',
    latitud    : -19.790933,
    longitud   : -63.198103,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00051',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00427',
    codigo_ine : 70703,
    nivel      : 4,
    nombre     : 'CABEZAS',
    latitud    : -18.789459,
    longitud   : -63.300093,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00051',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00428',
    codigo_ine : 70704,
    nivel      : 4,
    nombre     : 'CUEVO',
    latitud    : -20.454203,
    longitud   : -63.519658,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00051',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00429',
    codigo_ine : 70706,
    nivel      : 4,
    nombre     : 'CAMIRI',
    latitud    : -20.040155,
    longitud   : -63.521578,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00051',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00430',
    codigo_ine : 70402,
    nivel      : 4,
    nombre     : 'SAN CARLOS',
    latitud    : -17.405583,
    longitud   : -63.731563,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00111',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00431',
    codigo_ine : 70201,
    nivel      : 4,
    nombre     : 'WARNES',
    latitud    : -17.50908,
    longitud   : -63.164389,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00047',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00432',
    codigo_ine : 70202,
    nivel      : 4,
    nombre     : 'OKINAWA UNO',
    latitud    : -17.218295,
    longitud   : -62.891874,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00047',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00433',
    codigo_ine : 70707,
    nivel      : 4,
    nombre     : 'BOYUIBE',
    latitud    : -20.445309,
    longitud   : -63.280654,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00051',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00434',
    codigo_ine : 70801,
    nivel      : 4,
    nombre     : 'VALLEGRANDE',
    latitud    : -18.488669,
    longitud   : -64.105652,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00036',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00435',
    codigo_ine : 90104,
    nivel      : 4,
    nombre     : 'BELLA FLOR',
    latitud    : -11.124079,
    longitud   : -67.791538,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00068',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00436',
    codigo_ine : 90303,
    nivel      : 4,
    nombre     : 'EL SENA',
    latitud    : -11.48295,
    longitud   : -67.245792,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00027',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00437',
    codigo_ine : 90401,
    nivel      : 4,
    nombre     : 'SANTA ROSA DEL ABUN',
    latitud    : -10.619876,
    longitud   : -67.447612,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00046',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00438',
    codigo_ine : 90501,
    nivel      : 4,
    nombre     : 'NUEVO MANOA (NUEVA ESPERANZA}',
    latitud    : -10.0592,
    longitud   : -65.338572,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00055',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00439',
    codigo_ine : 90502,
    nivel      : 4,
    nombre     : 'VILLA NUEVA (LOMA ALTA}',
    latitud    : -10.788186,
    longitud   : -65.965149,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00055',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00440',
    codigo_ine : 90503,
    nivel      : 4,
    nombre     : 'SANTOS MERCADO',
    latitud    : -10.494559,
    longitud   : -66.212238,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00055',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00441',
    codigo_ine : 71502,
    nivel      : 4,
    nombre     : 'URUBICHÁ',
    latitud    : -15.628366,
    longitud   : -63.083725,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00029',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00442',
    codigo_ine : 71104,
    nivel      : 4,
    nombre     : 'SAN JULIÁN',
    latitud    : -16.911787,
    longitud   : -62.617943,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00022',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00443',
    codigo_ine : 71103,
    nivel      : 4,
    nombre     : 'SAN RAMÓN',
    latitud    : -16.613612,
    longitud   : -62.500075,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00022',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00444',
    codigo_ine : 71101,
    nivel      : 4,
    nombre     : 'CONCEPCIÓN',
    latitud    : -16.134516,
    longitud   : -62.02464,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00022',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00445',
    codigo_ine : 20404,
    nivel      : 4,
    nombre     : 'HUMANATA',
    latitud    : -15.463802,
    longitud   : -69.127097,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00081',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00446',
    codigo_ine : 20205,
    nivel      : 4,
    nombre     : 'SANTIAGO DE HUATA',
    latitud    : -16.056849,
    longitud   : -68.816623,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00024',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00447',
    codigo_ine : 10704,
    nivel      : 4,
    nombre     : 'VILLA CHARCAS',
    latitud    : -20.724697,
    longitud   : -64.886393,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00122',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00448',
    codigo_ine : 20805,
    nivel      : 4,
    nombre     : 'SAN ANDRÉS DE MACHACA',
    latitud    : -16.953402,
    longitud   : -68.968604,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00094',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00449',
    codigo_ine : 20806,
    nivel      : 4,
    nombre     : 'JESÚS DE MACHACA',
    latitud    : -16.744249,
    longitud   : -68.80724,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00094',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00450',
    codigo_ine : 70603,
    nivel      : 4,
    nombre     : 'COLPA BÉLGICA',
    latitud    : -17.567176,
    longitud   : -63.226501,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00098',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00451',
    codigo_ine : 71003,
    nivel      : 4,
    nombre     : 'MINEROS',
    latitud    : -17.118755,
    longitud   : -63.231328,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00031',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00452',
    codigo_ine : 71005,
    nivel      : 4,
    nombre     : 'SAN PEDRO',
    latitud    : -16.826297,
    longitud   : -63.480974,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00031',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00453',
    codigo_ine : 20608,
    nivel      : 4,
    nombre     : 'TEOPONTE',
    latitud    : -15.495701,
    longitud   : -67.817525,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00063',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00454',
    codigo_ine : 70404,
    nivel      : 4,
    nombre     : 'SAN JUAN',
    latitud    : -17.291375,
    longitud   : -63.849337,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00111',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00455',
    codigo_ine : 31206,
    nivel      : 4,
    nombre     : 'ENTRE RÍOS (BULO BULO}',
    latitud    : -17.26,
    longitud   : -64.348378,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00121',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00456',
    codigo_ine : 20204,
    nivel      : 4,
    nombre     : 'HUARINA',
    latitud    : -16.190738,
    longitud   : -68.601591,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00024',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00457',
    codigo_ine : 10703,
    nivel      : 4,
    nombre     : 'INCAHUASI',
    latitud    : -20.7837,
    longitud   : -64.867333,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00122',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00458',
    codigo_ine : 22002,
    nivel      : 4,
    nombre     : 'ALTO BENI',
    latitud    : -15.545243,
    longitud   : -67.449711,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00048',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00459',
    codigo_ine : 20203,
    nivel      : 4,
    nombre     : 'CHÚA COCANI',
    latitud    : -16.193457,
    longitud   : -68.748862,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00024',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f96eb615-a821-4c0a-9bdd-42ae50b00460',
    codigo_ine : 20206,
    nivel      : 4,
    nombre     : 'HUATAJATA',
    latitud    : -16.210442,
    longitud   : -68.696954,
    id_dpa     : 'f96eb615-a821-4c0a-9bdd-42ae50b00024',
    estado     : 'ACTIVO'
  }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_division_politica_administrativa', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
