'use strict';

// Definiendo asociaciones de las tablas
module.exports = function associations (models) {
  // system
  const {
    rol,
    auth,
    usuario,
    permiso,
    entidad,
    rolPermiso,
    rolUsuario,
    rolMenu,
    menu,
    aplicacion,
    parametro,
    aplicacionPermiso,
    divisionPoliticaAdministrativa
  } = models;
  // planificacion
  const {
    gestion,
    estructura,
    operacion,
    formulacion,
    cronograma
  } = models;

  // financiera
  const {
    detalle,
    ejecucion,
    organismoFinanciador,
    partidaPresupuestaria,
    presupuesto
  } = models;

  // red-funcional
  const {
    RFSolicitud,
    RFSolicitudHistorial,
    RFDocumento
  } = models;

  RFSolicitud.belongsTo(entidad);
  entidad.hasMany(RFSolicitud);

  RFSolicitudHistorial.belongsTo(RFSolicitud);
  RFSolicitud.hasMany(RFSolicitudHistorial);

  RFDocumento.belongsTo(RFSolicitud);
  RFSolicitud.hasMany(RFDocumento);

  // system

  auth.belongsTo(usuario, { foreignKey: { name: 'idUsuario' }, as: 'usuario' });
  usuario.hasMany(auth,  { foreignKey: { name: 'idUsuario' }, as: 'sesiones' });

  aplicacion.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(aplicacion,  { foreignKey: { name: 'idEntidad' }, as: 'aplicaciones' });

  entidad.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidadPadre' });
  entidad.hasMany(entidad,  { foreignKey: { name: 'idEntidad' }, as: 'entidades' });

  usuario.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(usuario,  { foreignKey: { name: 'idEntidad' }, as: 'usuarios' });

  menu.belongsTo(menu, { foreignKey: { name: 'idMenu' }, as: 'menuSuperior' });

  rol.belongsToMany(menu, { through: { model: rolMenu, unique: false }, as: 'menus', foreignKey: 'idRol' });
  menu.belongsToMany(rol, { through: { model: rolMenu, unique: false }, as: 'roles', foreignKey: 'idMenu' });

  rol.belongsToMany(permiso, { through: { model: rolPermiso, unique: false }, as: 'permisos', foreignKey: 'idRol' });
  permiso.belongsToMany(rol, { through: { model: rolPermiso, unique: false }, as: 'roles', foreignKey: 'idPermiso' });

  aplicacion.belongsToMany(permiso, { through: { model: aplicacionPermiso, unique: false }, as: 'permisos', foreignKey: 'idAplicacion' });
  permiso.belongsToMany(aplicacion, { through: { model: aplicacionPermiso, unique: false }, as: 'aplicaciones', foreignKey: 'idPermiso' });

  // Roles de usuario
  usuario.belongsToMany(rol,  { through: { model: rolUsuario, unique: false }, as: 'roles', foreignKey: 'idUsuario' });
  rol.belongsToMany(usuario, { through: { model: rolUsuario, unique: false }, as: 'usuarios', foreignKey: 'idRol' });

  auth.belongsTo(usuario, { foreignKey: { name: 'idUsuario' }, as: 'usuarioSesion' });
  usuario.hasMany(auth,  { foreignKey: { name: 'idUsuario' }, as: 'sesionesUsuario' });

  auth.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidadSesion' });
  entidad.hasMany(auth,  { foreignKey: { name: 'idEntidad' }, as: 'sesionesEntidad' });

  divisionPoliticaAdministrativa.belongsTo(divisionPoliticaAdministrativa, { foreignKey: { name: 'idDpa'  }, as: 'divisionPoliticaPadre' });

  // planificacion

  formulacion.belongsTo(gestion, { foreignKey: { name: 'idGestion' }, as: 'gestion' });
  gestion.hasMany(formulacion, { foreignKey: { name: 'idGestion' }, as: 'formulaciones' });

  formulacion.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(formulacion, { foreignKey: { name: 'idEntidad' }, as: 'formulaciones' });

  operacion.belongsTo(formulacion, { foreignKey: { name: 'idFormulacion' }, as: 'formulacion' });
  formulacion.hasMany(operacion, { foreignKey: { name: 'idFormulacion' }, as: 'operaciones' });

  operacion.belongsTo(estructura, { foreignKey: { name: 'idEstructura' }, as: 'estructura' });
  estructura.hasMany(operacion, { foreignKey: { name: 'idEstructura' }, as: 'operaciones' });

  operacion.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(operacion, { foreignKey: { name: 'idEntidad' }, as: 'operaciones' });

  cronograma.belongsTo(operacion, { foreignKey: { name: 'idOperacion' }, as: 'operacion' });
  operacion.hasMany(cronograma, { foreignKey: { name: 'idOperacion' }, as: 'cronograma' });

  // financiera
  detalle.belongsTo(ejecucion, { foreignKey: { name: 'idEjecucion' }, as: 'ejecucion' });
  ejecucion.hasMany(detalle, { foreignKey: { name: 'idEjecucion' }, as: 'detalles' });

  detalle.belongsTo(parametro, { foreignKey: { name: 'idUnidadMedida' }, as: 'unidadMedida' });

  detalle.belongsTo(presupuesto, { foreignKey: { name: 'idPresupuesto' }, as: 'presupuesto' });
  presupuesto.hasMany(detalle, { foreignKey: { name: 'idPresupuesto' }, as: 'ejecuciones' });

  presupuesto.belongsTo(operacion, { foreignKey: { name: 'idOperacion' }, as: 'operacion' });
  operacion.hasMany(presupuesto, { foreignKey: { name: 'idOperacion' }, as: 'presupuestos' });

  presupuesto.belongsTo(organismoFinanciador, { foreignKey: { name: 'idOrganismoFinanciador' }, as: 'organismoFinanciador' });
  organismoFinanciador.hasMany(presupuesto, { foreignKey: { name: 'idOrganismoFinanciador' }, as: 'presupuestos' });

  presupuesto.belongsTo(partidaPresupuestaria, { foreignKey: { name: 'idPartidaPresupuestaria' }, as: 'partidaPresupuestaria' });
  partidaPresupuestaria.hasMany(presupuesto, { foreignKey: { name: 'idPartidaPresupuestaria' }, as: 'presupuestos' });

  partidaPresupuestaria.belongsTo(partidaPresupuestaria, { foreignKey: { name: 'idPartidaPadre' }, as: 'partidaPadre' });
  partidaPresupuestaria.hasMany(partidaPresupuestaria, { foreignKey: { name: 'idPartidaPadre' }, as: 'partidasHijas' });

  return models;
};
