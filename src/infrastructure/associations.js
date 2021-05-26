'use strict';

// Definiendo asociaciones de las tablas
module.exports = function associations (models) {
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

    tarea,
    tema,
    comentario,
    temaEntidad,
    reunion,
    reunionParticipante,
    etiqueta,
    etiquetaTarea,
    cite,
    reunionTarea
  } = models;

  tarea.belongsToMany(reunion, { through: { model: reunionTarea, unique: false }, as: 'reuniones', foreignKey: 'idTarea' });
  reunion.belongsToMany(tarea, { through: { model: reunionTarea, unique: false }, as: 'tareas', foreignKey: 'idReunion' });

  usuario.belongsToMany(reunion, { through: { model: reunionParticipante, unique: false }, as: 'reuniones', foreignKey: 'idUsuario' });
  reunion.belongsToMany(usuario, { through: { model: reunionParticipante, unique: false }, as: 'participantes', foreignKey: 'idReunion' });

  etiqueta.belongsToMany(tarea, { through: { model: etiquetaTarea, unique: false }, as: 'tareas', foreignKey: 'idEtiqueta' });
  tarea.belongsToMany(etiqueta, { through: { model: etiquetaTarea, unique: false }, as: 'etiquetas', foreignKey: 'idTarea' });

  auth.belongsTo(usuario, { foreignKey: { name: 'idUsuario' }, as: 'usuario' });
  usuario.hasMany(auth,  { foreignKey: { name: 'idUsuario' }, as: 'sesiones' });

  rol.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(rol,  { foreignKey: { name: 'idEntidad' }, as: 'roles' });

  etiqueta.belongsTo(tema, { foreignKey: { name: 'idTema' }, as: 'tema' });
  tema.hasMany(etiqueta,  { foreignKey: { name: 'idTema' }, as: 'etiquetas' });

  entidad.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidadPadre' });
  entidad.hasMany(entidad,  { foreignKey: { name: 'idEntidad' }, as: 'entidades' });

  tarea.belongsTo(tema, { foreignKey: { name: 'idTema' }, as: 'tema' });
  tema.hasMany(tarea,  { foreignKey: { name: 'idTema' }, as: 'tareas' });

  comentario.belongsTo(usuario, { foreignKey: { name: 'idUsuario' }, as: 'usuario' });
  usuario.hasMany(comentario,  { foreignKey: { name: 'idUsuario' }, as: 'comentarios' });

  cite.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.belongsTo(cite,  { foreignKey: { name: 'idEntidad' }, as: 'cite' });

  comentario.belongsTo(tarea, { foreignKey: { name: 'idTarea' }, as: 'tarea' });
  tarea.hasMany(comentario,  { foreignKey: { name: 'idTarea' }, as: 'comentarios' });

  comentario.belongsTo(tema, { foreignKey: { name: 'idTema' }, as: 'tema' });
  tema.hasMany(comentario,  { foreignKey: { name: 'idTema' }, as: 'comentarios' });

  tarea.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(tarea,  { foreignKey: { name: 'idEntidad' }, as: 'tareas' });

  comentario.belongsTo(reunion, { foreignKey: { name: 'idReunion' }, as: 'reunion' });
  reunion.hasMany(comentario,  { foreignKey: { name: 'idReunion' }, as: 'comentarios' });

  reunion.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(reunion,  { foreignKey: { name: 'idEntidad' }, as: 'reunion' });

  entidad.belongsToMany(tema, { through: { model: temaEntidad, unique: false }, as: 'temas', foreignKey: 'idEntidad' });
  tema.belongsToMany(entidad, { through: { model: temaEntidad, unique: false }, as: 'entidades', foreignKey: 'idTema' });

  temaEntidad.belongsTo(tema, { foreignKey: { name: 'idTema' }, as: 'tema' });
  tema.hasMany(temaEntidad,  { foreignKey: { name: 'idTema' }, as: 'temaEntidades' });

  usuario.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(usuario,  { foreignKey: { name: 'idEntidad' }, as: 'usuarios' });

  // Asociaciones tablas permiso - roles
  rolPermiso.belongsTo(permiso, { foreignKey: { name: 'idPermiso', allowNull: false }, as: 'permiso' });
  permiso.hasMany(rolPermiso, { foreignKey: { name: 'idPermiso', allowNull: false }, as: 'rolPermisos' });

  rolPermiso.belongsTo(rol, { foreignKey: { name: 'idRol', allowNull: false }, as: 'rol' });
  rol.hasMany(rolPermiso, { foreignKey: { name: 'idRol', allowNull: false }, as: 'rolPermisos' });

  rol.belongsToMany(menu, { through: { model: rolMenu, unique: false }, as: 'menus', foreignKey: 'idRol' });
  menu.belongsToMany(rol, { through: { model: rolMenu, unique: false }, as: 'roles', foreignKey: 'idMenu' });

  rol.belongsToMany(permiso, { through: { model: rolPermiso, unique: false }, as: 'permisos', foreignKey: 'idRol' });
  permiso.belongsToMany(rol, { through: { model: rolPermiso, unique: false }, as: 'roles', foreignKey: 'idPermiso' });

  // Roles de usuario
  usuario.belongsToMany(rol,  { through: { model: rolUsuario, unique: false }, as: 'roles', foreignKey: 'idUsuario' });
  rol.belongsToMany(usuario, { through: { model: rolUsuario, unique: false }, as: 'usuarios', foreignKey: 'idRol' });

  auth.belongsTo(usuario, { foreignKey: { name: 'idUsuario' }, as: 'usuarioSesion' });
  usuario.hasMany(auth,  { foreignKey: { name: 'idUsuario' }, as: 'sesionesUsuario' });

  auth.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidadSesion' });
  entidad.hasMany(auth,  { foreignKey: { name: 'idEntidad' }, as: 'sesionesEntidad' });

  return models;
};
