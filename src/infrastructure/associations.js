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
    categoria,
    categoriaTarea
  } = models;

  reunionTema.belongsTo(reunion, { foreignKey: { name: 'idReunion' }, as: 'reunion' });
  reunion.hasMany(reunionTema,  { foreignKey: { name: 'idReunion' }, as: 'reunionTema' });

  reunionTema.belongsTo(tema, { foreignKey: { name: 'idTema' }, as: 'tema' });
  tema.hasMany(reunionTema,  { foreignKey: { name: 'idTema' }, as: 'reunionTema' });

  reunionParticipante.belongsTo(reunion, { foreignKey: { name: 'idReunion' }, as: 'reunion' });
  reunion.hasMany(reunionParticipante,  { foreignKey: { name: 'idReunion' }, as: 'reunionParticipante' });

  reunionParticipante.belongsTo(usuario, { foreignKey: { name: 'idUsuario' }, as: 'usuario' });
  usuario.hasMany(reunionParticipante,  { foreignKey: { name: 'idUsuario' }, as: 'reunionParticipante' });

  categoriaTarea.belongsTo(categoria, { foreignKey: { name: 'idReunion' }, as: 'categoria' });
  categoria.hasMany(categoriaTarea,  { foreignKey: { name: 'idReunion' }, as: 'categoriaTarea' });

  categoriaTarea.belongsTo(tarea, { foreignKey: { name: 'idUsuario' }, as: 'tarea' });
  tarea.hasMany(categoriaTarea,  { foreignKey: { name: 'idUsuario' }, as: 'categoriaTarea' });

  auth.belongsTo(usuario, { foreignKey: { name: 'idUsuario' }, as: 'usuario' });
  usuario.hasMany(auth,  { foreignKey: { name: 'idUsuario' }, as: 'sesiones' });

  rol.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(rol,  { foreignKey: { name: 'idEntidad' }, as: 'roles' });

  categoria.belongsTo(tema, { foreignKey: { name: 'idTema' }, as: 'tema' });
  tema.hasMany(categoria,  { foreignKey: { name: 'idTema' }, as: 'categorias' });

  entidad.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidadPadre' });
  entidad.hasMany(entidad,  { foreignKey: { name: 'idEntidad' }, as: 'entidad' });

  tarea.belongsTo(tema, { foreignKey: { name: 'idTema' }, as: 'tema' });
  tema.hasMany(tarea,  { foreignKey: { name: 'idTema' }, as: 'tareas' });

  comentario.belongsTo(tarea, { foreignKey: { name: 'idTarea' }, as: 'tarea' });
  tarea.hasMany(comentario,  { foreignKey: { name: 'idTarea' }, as: 'comentarios' });

  reunion.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(reunion,  { foreignKey: { name: 'idEntidad' }, as: 'reunion' });

  temaEntidad.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(temaEntidad,  { foreignKey: { name: 'idEntidad' }, as: 'temaEntidad' });

  temaEntidad.belongsTo(tema, { foreignKey: { name: 'idTema' }, as: 'tema' });
  tema.hasMany(temaEntidad,  { foreignKey: { name: 'idTema' }, as: 'temaEntidad' });

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
