'use strict';

const { setTimestampsSeeder } = require('../lib/util');

// Datos de producción
let items = [
  { id: '40c3ddc2-e839-451d-95c9-a259ea781751', grupo: 'CONFIG', codigo: 'TK', nombre: 'TIEMPO DEL TOKEN', descripcion: '240', estado: 'ACTIVO' },

  // Tipo de documento
  { id: '7f295982-6e6c-4424-b1f5-26c2dd21d5f2', grupo: 'TIPO_DOCUMENTO', codigo: 'CIEXT', nombre: 'CEDULA DE IDENTIDAD DE EXTRANJERO', estado: 'ACTIVO' },
  { id: '1d1866c6-4cc6-4957-a308-8638b8560355', grupo: 'TIPO_DOCUMENTO', codigo: 'CI', nombre: 'CEDULA DE IDENTIDAD', estado: 'ACTIVO' },
  { id: '37f9091a-86ee-4431-97b5-4e97917d14c6', grupo: 'TIPO_DOCUMENTO', codigo: 'PAS', nombre: 'PASAPORTE', estado: 'ACTIVO' },
  { id: '112e1cde-0ac1-465a-aa5e-64d7e2f6ae42', grupo: 'TIPO_DOCUMENTO', codigo: 'NIT', nombre: 'NUMERO DE IDENTIFICACION TRIBUTARIO', estado: 'ACTIVO' },
  { id: '83cf2636-ce74-4ef4-ab17-04c68d8fd89c', grupo: 'TIPO_DOCUMENTO', codigo: 'NITE', nombre: 'NUMERO DE IDENTIFICACION TRIBUTARIA EXTRANJERA', estado: 'ACTIVO' },
  { id: '827c9a72-a59d-42b3-9cc4-3e3bf9c6baba', grupo: 'TIPO_EJE', codigo: 'EJE 3', nombre: 'SEGURIDAD ALIMENTARIA CON SOBERANÍA, PROMOCIÓN DE EXPORTACIONES CON VALOR AGREGADO Y DESARROLLO TURÍSTICO', estado: 'ACTIVO' },
  { id: '8b0cf9c2-8041-4ed9-93e9-e84d2c850455', grupo: 'TIPO_EJE', codigo: 'EJE 2', nombre: 'INDUSTRIALIZACIÓN CON SUSTITUCIÓN DE IMPORTACIONES', estado: 'ACTIVO' },
  { id: '5ee41148-0119-4f50-91ef-213285444f70', grupo: 'TIPO_EJE', codigo: 'EJE 1', nombre: 'RECONSTRUYENDO LA ECONOMÍA, RETOMANDO LA ESTABILIDAD MACROECONÓMICA Y SOCIAL', estado: 'ACTIVO' },
  { id: '2daab7dc-f526-4855-bb39-db2fb2398a2f', grupo: 'TIPO_EJE', codigo: 'EJE 4', nombre: 'PROFUNDIZACIÓN DEL PROCESO DE INDUSTRIALIZACIÓN DE LOS RECURSOS NATURALES', estado: 'ACTIVO' },
  { id: 'ced81e48-d7fb-4bfb-ada4-129d25c99426', grupo: 'TIPO_EJE', codigo: 'EJE 5', nombre: 'EDUCACIÓN, INVESTIGACIÓN, CIENCIA Y TECNOLOGÍA PARA FORTALECIMIENTO Y DESARROLLLO DE CAPACIDADES Y POTENCIALIDADES PRODUCTIVAS', estado: 'ACTIVO' },
  { id: '9e762ceb-3a6c-4a82-a482-537f82bcea4b', grupo: 'TIPO_EJE', codigo: 'EJE 6', nombre: 'SALUD Y DEPORTES PARA PROTEGER LA VIDA CON CUIDADO INTEGRAL EN TIEMPOS DE PANDEMIA', estado: 'ACTIVO' },
  { id: '94ed207d-e2dd-4a88-9779-fcda887aa419', grupo: 'TIPO_EJE', codigo: 'EJE 7', nombre: 'REFORMA JUDICIAL, GESTIÓN PÚBLICA DIGITALIZADA Y TRANSPARENTE; SEGURIDAD Y DEFENSA INTEGRAL CON SOBERANIA NACIONAL', estado: 'ACTIVO' },
  { id: '190e1f5e-3565-4c37-8509-384c294efc35', grupo: 'TIPO_EJE', codigo: 'EJE 8', nombre: 'MEDIO AMBIENTE SUSTENTABLE Y EQUILIBRADO EN ARMONÍA CON LA MADRE TIERRA', estado: 'ACTIVO' },
  { id: '358056c1-45da-4514-adbf-9bd60931361b', grupo: 'TIPO_EJE', codigo: 'EJE 9', nombre: 'INTEGRACIÓN Y RELACIONES INTERNACIONALES CON SOBERANIA', estado: 'ACTIVO' },
  { id: '38f1d052-6efa-40a8-a3d1-03242f55f52a', grupo: 'TIPO_EJE', codigo: 'EJE 10', nombre: 'CULTURAS DESCOLONIZACIÓN Y DESPATRIARCALIZACIÓN, PARA LA REVOLUCIÓN DEMOCRÁTICA CULTURAL', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14001', grupo: '_EJE_1_', codigo: '1.1', nombre: 'Reconstruir la economía reinstaurando el Modelo Económico Social Comunitario Productivo con estabilidad macroeconómica.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14002', grupo: '_EJE_1_', codigo: '1.2', nombre: 'Retomar el rol protagónico del Estado a través de la inversión pública y promoviendo la inversión privada y extranjera.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14003', grupo: '_EJE_1_', codigo: '1.3', nombre: 'Devolver a la política social el carácter prioritario para el Estado, reduciendo la desigualdad económica, social y de género en el marco de la pluralidad.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14004', grupo: '_EJE_1_', codigo: '1.4', nombre: 'Implementar programas de empleo y diseñar mecanismos que promuevan el empleo formal y reduzcan las brechas de género en el empleo.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14005', grupo: '_EJE_2_', codigo: '2.1', nombre: 'Impulsar nuevas industrias de productos estratégicos orientadas a la sustitución de importaciones que permitan reducir nuestra dependencia de la producción externa.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14006', grupo: '_EJE_2_', codigo: '2.2', nombre: 'Incrementar volúmenes de producción de bienes de consumo importados y de insumos, bienes y servicios sustitutos de importación.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14007', grupo: '_EJE_2_', codigo: '2.3', nombre: 'Promover políticas de transformación de materias primas e insumos para generar cadenas productivas de valor que permitan aumentar los volúmenes de producción nacional.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14008', grupo: '_EJE_3_', codigo: '3.1', nombre: 'Fomentar polos de desarrollo productivo de acuerdo a las capacidades y potencialidades de cada región con miras a la industrialización con sustitución de importaciones en base al ordenamiento territorial y uso de suelos, garantizando la seguridad alimentaria con soberanía.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14009', grupo: '_EJE_3_', codigo: '3.2', nombre: 'Diversificar e incrementar la productividad agropecuaria para el abastecimiento del mercado interno y la industrialización con sustitución de importaciones, con miras a la exportación con valor agregado.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14010', grupo: '_EJE_3_', codigo: '3.3', nombre: 'Impulsar la integración nacional e internacional para fortalecer los centros productivos con sistemas de transporte carretero, aéreo, férreo, fluvial y urbano.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14011', grupo: '_EJE_3_', codigo: '3.4', nombre: 'Promover el desarrollo turístico del país en base a nuestra diversidad natural y cultural, promoviendo los emprendimientos, la iniciativa privada y las alianzas estratégicas.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14012', grupo: '_EJE_4_', codigo: '4.1', nombre: 'Impulsar la prospección, exploración y explotación sustentable de los recursos naturales con cuidado del medio ambiente en armonía con la Madre Tierra.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14013', grupo: '_EJE_4_', codigo: '4.2', nombre: 'Fortalecer, diversificar y ampliar la industrialización con valor agregado de recursos naturales, maximizando los excedentes económicos generados.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14014', grupo: '_EJE_4_', codigo: '4.3', nombre: 'Diversificar la matriz energética hacia la consolidación de fuentes de energía renovables y sustentables, generando excedentes para las exportaciones.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14015', grupo: '_EJE_5_', codigo: '5.1', nombre: 'Garantizar el ejercicio del derecho a una educación integral, intercultural y plurilingüe con calidad y sin discriminación de raza, origen, género, creencia y discapacidad, en todo el Sistema Educativo Plurinacional.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14016', grupo: '_EJE_5_', codigo: '5.2', nombre: 'Articular y promover la educación especializada, la investigación y la innovación tecnológica, orientada a fortalecer las capacidades y potencialidades productivas, con enfoque de identidad y promoción del consumo de la producción nacional.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14017', grupo: '_EJE_5_', codigo: '5.3', nombre: 'Investigación, ciencia y tecnología, al servicio de la producción nacional para optimizar los procesos productivos e incrementar la productividad con miras a la industrialización con sustitución de importaciones.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14018', grupo: '_EJE_5_', codigo: '5.4', nombre: 'Impulsar la explotación de la inteligencia artificial aplicada desde el gobierno electrónico para la implementación de políticas públicas a través del uso intensivo de las TIC.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14019', grupo: '_EJE_6_', codigo: '6.1', nombre: 'Prevenir la propagación y el impacto negativo de la COVID-19 con un enfoque preventivo que amplíe la cobertura de la inmunización hacia su universalización.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14020', grupo: '_EJE_6_', codigo: '6.2', nombre: 'Fortalecer y universalizar la política nacional de Salud Familiar Comunitaria Intercultural (SAFCI) que prioriza la promoción de la salud y la prevención de enfermedades en los tres niveles de atención, recuperando la medicina tradicional ancestral.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14021', grupo: '_EJE_6_', codigo: '6.3', nombre: 'Fortalecer el Sistema Único de Salud Universal y Gratuito a través de servicios de salud públicos, respetando su cosmovisión y prácticas tradicionales sin exclusión ni discriminación, en el marco de la política nacional SAFCI.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14022', grupo: '_EJE_6_', codigo: '6.4', nombre: 'Promover la especialización de profesionales médicos destinados a cubrir las necesidades de servicios hospitalarios para los centros de salud de segundo, tercer y cuarto nivel a ser construidos y equipados.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14023', grupo: '_EJE_6_', codigo: '6.5', nombre: 'Incentivar la práctica deportiva, en sus ámbitos preventivo, recreativo, formativo y competitivo, de diversas disciplinas, priorizando el acceso al deporte a temprana edad.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14024', grupo: '_EJE_6_', codigo: '6.6', nombre: 'Mejorar la infraestructura y equipamiento de los establecimientos de salud.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14025', grupo: '_EJE_7_', codigo: '7.1', nombre: 'Impulsar el acceso a la justicia social y reparadora para todas y todos sobre la base de la reforma del sistema judicial y de una gestión pública transparente que lucha frontalmente contra la corrupción.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14026', grupo: '_EJE_7_', codigo: '7.2', nombre: 'Fortalecer programas de inclusión y equidad social para las personas más vulnerables con énfasis en niños, niñas y adolescentes, adultos mayores y personas con discapacidad, considerando la diversidad sociocultural.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14027', grupo: '_EJE_7_', codigo: '7.3', nombre: 'Reducir significativamente toda forma de violencia por razones económicas, sociales y culturales, con énfasis en la violencia en razón de género en sus distintas manifestaciones y la lucha contra la trata y tráfico de personas.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14028', grupo: '_EJE_7_', codigo: '7.4', nombre: 'Garantizar la defensa de la sociedad y la conservación del orden público a través de la Policía Boliviana, luchar contra el tráfico ilícito de sustancias controladas, controlar cultivos excedentarios de hoja de coca y prevenir el consumo de drogas.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14029', grupo: '_EJE_7_', codigo: '7.5', nombre: 'Garantizar la independencia, seguridad y estabilidad del Estado y del Gobierno legítimamente constituido con Fuerzas Armadas descolonizadas y despatriarcalizadas que defiendan la soberanía nacional y la construcción del desarrollo integral del país.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14030', grupo: '_EJE_8_', codigo: '8.1', nombre: 'Fortalecer el manejo integral y sustentable de los bosques como un recurso de carácter estratégico, promoviendo la protección de las áreas con vocación forestal.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14031', grupo: '_EJE_8_', codigo: '8.2', nombre: 'Impulsar acciones de mitigación, adaptación y monitoreo para el cambio climático, con medidas de respuesta efectiva a sus impactos en armonía y equilibrio con la Madre Tierra.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14032', grupo: '_EJE_8_', codigo: '8.3', nombre: 'Promover sistemas de vida con un medio ambiente saludable, protegido y equilibrado en armonía con la Madre Tierra.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14033', grupo: '_EJE_8_', codigo: '8.4', nombre: 'Promover el sistema de áreas protegidas, humedales, bofedales, como parte del patrimonio natural del país.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14034', grupo: '_EJE_8_', codigo: '8.5', nombre: 'Fortalecer la gestión integrada de los recursos hídricos superficiales y subterráneos para alcanzar la seguridad hídrica.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14035', grupo: '_EJE_9_', codigo: '9.1', nombre: 'Liderar a nivel global la construcción del horizonte civilizatorio del Vivir Bien y del Modelo Económico Social Comunitario Productivo, manteniendo su identidad anticolonialista, anticapitalista y antiimperialista.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14036', grupo: '_EJE_9_', codigo: '9.2', nombre: 'Liderar a nivel mundial la diplomacia por la vida para el fortalecimiento de los países y pueblos.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14037', grupo: '_EJE_9_', codigo: '9.3', nombre: 'Implementar el decenio internacional de las lenguas indígenas 2022-2032, con el propósito de llamar la atención sobre la grave pérdida de las lenguas indígenas en ámbitos subregionales, regionales o multilaterales.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14038', grupo: '_EJE_9_', codigo: '9.4', nombre: 'Consolidar a Bolivia como país clave en la articulación e integración regional y subregional, con decisiones favorables de las entidades regionales para su mejor posicionamiento en el ámbito económico, social, limítrofe y geopolítico.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14039', grupo: '_EJE_9_', codigo: '9.5', nombre: 'Avanzar hacia el retorno al mar y puertos soberanos en el Océano Pacífico y defender las aguas del Silala y los recursos hídricos compartidos.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14040', grupo: '_EJE_10_', codigo: '10.1', nombre: 'Implementar políticas de prevención y protección contra el racismo y toda forma de discriminación.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14041', grupo: '_EJE_10_', codigo: '10.2', nombre: 'Promover la industria cultural, el arte individual y colectivo de las bolivianas y bolivianos.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14042', grupo: '_EJE_10_', codigo: '10.3', nombre: 'Proteger, restaurar, recuperar, revitalizar, promover y difundir el patrimonio material e inmaterial del Estado Plurinacional de Bolivia.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14043', grupo: '_EJE_10_', codigo: '10.4', nombre: 'Impulsar la descolonización y despatriarcalización hacia la consolidación del Estado Plurinacional y el paradigma del Vivir Bien.', estado: 'ACTIVO' },
  { id: '9010197e-5edb-4736-bf6c-ab83f8d14044', grupo: '_EJE_10_', codigo: '10.5', nombre: 'Implementar acciones de revalorización, protección y promoción de los saberes y conocimientos ancestrales de las Naciones Pueblos Indígenas Originarios Campesinos y Afro bolivianos para la convivencia armónica con la Madre Tierra.', estado: 'ACTIVO' },
  // tipo de unidad
  { id: '9e000e89-3456-44da-8ac4-578c70011d3d', nombre: 'PIEZA', codigo: 'PZA.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: '77db5e75-d5ea-4995-99bf-8a522d39b37f', nombre: 'ROLLO', codigo: 'FR.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'e121f075-1823-4270-8da3-3a42fa18b64f', nombre: 'CAJA', codigo: 'CAJ.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: '54f82ad0-32da-438b-9252-fb552342ceea', nombre: 'PAQUETE', codigo: 'RO.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: '7d2b9866-2d33-487c-9b69-aca283842e05', nombre: 'OVILLO', codigo: 'PQT.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: '9a289c82-f65f-469c-997e-6b1c5e3dec3b', nombre: 'BIDON', codigo: 'BLK.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03797', nombre: 'FRASCO', codigo: 'F.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03701', nombre: 'TUBO', codigo: 'T.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03702', nombre: 'BALDE', codigo: 'B.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03703', nombre: 'JUEGO', codigo: 'J.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03704', nombre: 'METROS', codigo: 'M.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03705', nombre: 'PARES', codigo: 'P.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03706', nombre: 'BOLSA', codigo: 'BLS.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03707', nombre: 'KILOS', codigo: 'KL.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03708', nombre: 'LITROS', codigo: 'LTR.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03709', nombre: 'BLOCK', codigo: 'BLK.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03710', nombre: 'HOJA', codigo: 'H.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03711', nombre: 'EJEMPLAR', codigo: 'E.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03712', nombre: 'EQUIPO', codigo: 'EQU.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03713', nombre: 'SERVICIO', codigo: 'SER.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03714', nombre: 'UNIDAD', codigo: 'UND', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03715', nombre: 'BIEN', codigo: 'BN.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03716', nombre: 'DIAS', codigo: 'D.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03717', nombre: 'PASAJE', codigo: 'P.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03718', nombre: 'PASAJE TERRESTRE', codigo: 'PT.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' },
  { id: 'eeb7f627-b0dc-40f7-b85c-81bf3ab03719', nombre: 'VIATICO', codigo: 'V.', grupo: 'TIPO_UNIDAD', estado: 'ACTIVO' }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_parametro', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
