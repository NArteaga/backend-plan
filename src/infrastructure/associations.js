'use strict';

// Definiendo asociaciones de las tablas
module.exports = function associations (models) {
  const {
    rol,
    usuario,
    parametro,
    permisos,
    modulos
  } = models;

  usuario.belongsTo(rol, { foreignKey: { name: 'idRol' }, as: 'rol' });
  rol.hasMany(usuario,  { foreignKey: { name: 'idRol' }, as: 'usuarios' });

  // Asociaciones tablas permisos - roles
  permisos.belongsTo(rol, { foreignKey: { name: 'idRol', allowNull: false }, as: 'rol' });
  rol.hasMany(permisos, { foreignKey: { name: 'idRol', allowNull: false }, as: 'permisos' });

  // Asociaciones tablas permisos - modulos
  permisos.belongsTo(modulos, { foreignKey: { name: 'idModulo', allowNull: false }, as: 'modulo' });
  modulos.hasMany(permisos, { foreignKey: { name: 'idModulo', allowNull: false } });

  // Asociaciones tablas modulos - sección
  modulos.belongsTo(modulos, { foreignKey: 'idModulo' });
  modulos.hasMany(modulos, { foreignKey: 'idModulo', as: 'subModulos' });

  return models;
};
