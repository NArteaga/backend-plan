'use strict';

// Definiendo asociaciones de las tablas
module.exports = function associations (models) {
  const {
    rol,
    auth,
    usuario,
    permiso,
    modulos,
    convenio,
    entidad,
    servicio,
    rolPermiso,
    usuarioRol,
    rolMenu,
    menu,

    tarea,
    tema,
    comentario,
    temaEntidad,
    reunion,
    reunionTema,
    reunionParticipante,
    etiqueta,
    etiquetaTarea,
    cite
  } = models;

  tema.belongsToMany(reunion, { through: { model: reunionTema, unique: false }, as: 'reuniones', foreignKey: 'idTema' });
  reunion.belongsToMany(tema, { through: { model: reunionTema, unique: false }, as: 'temas', foreignKey: 'idReunion' });

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
  entidad.hasMany(entidad,  { foreignKey: { name: 'idEntidad' }, as: 'entidad' });

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

  comentario.belongsTo(reunion, { foreignKey: { name: 'idReunion' }, as: 'reunion' });
  reunion.hasMany(comentario,  { foreignKey: { name: 'idReunion' }, as: 'comentarios' });

  reunion.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(reunion,  { foreignKey: { name: 'idEntidad' }, as: 'reunion' });

  entidad.belongsToMany(tema, { through: { model: temaEntidad, unique: false }, as: 'temas', foreignKey: 'idEntidad' });
  tema.belongsToMany(entidad, { through: { model: temaEntidad, unique: false }, as: 'entidades', foreignKey: 'idTema' });

  usuario.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(usuario,  { foreignKey: { name: 'idEntidad' }, as: 'usuarios' });

  // Asociaciones tablas permiso - roles
  rolPermiso.belongsTo(permiso, { foreignKey: { name: 'idPermiso', allowNull: false }, as: 'permiso' });
  permiso.hasMany(rolPermiso, { foreignKey: { name: 'idPermiso', allowNull: false }, as: 'rolPermisos' });

  rolPermiso.belongsTo(rol, { foreignKey: { name: 'idRol', allowNull: false }, as: 'rol' });
  rol.hasMany(rolPermiso, { foreignKey: { name: 'idRol', allowNull: false }, as: 'rolPermisos' });

  rolMenu.belongsTo(menu, { foreignKey: { name: 'idMenu', allowNull: false }, as: 'menu' });
  menu.hasMany(rolMenu, { foreignKey: { name: 'idMenu', allowNull: false }, as: 'rolMenus' });

  rolMenu.belongsTo(rol, { foreignKey: { name: 'idRol', allowNull: false }, as: 'rol' });
  rol.hasMany(rolMenu, { foreignKey: { name: 'idRol', allowNull: false }, as: 'rolMenus' });

  // Roles de usuario
  usuarioRol.belongsTo(usuario, { foreignKey: { name: 'idUsuario', allowNull: false }, as: 'usuario' });
  usuario.hasMany(usuarioRol, { foreignKey: { name: 'idUsuario', allowNull: false }, as: 'usuarioRoles' });

  usuarioRol.belongsTo(rol, { foreignKey: { name: 'idRol', allowNull: false }, as: 'rol' });
  rol.hasMany(usuarioRol, { foreignKey: { name: 'idRol', allowNull: false }, as: 'usuarioRoles' });

  return models;
};
