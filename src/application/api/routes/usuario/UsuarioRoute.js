'use strict';

module.exports = function setupUsuario (api, controllers, middlewares) {
  const { UsuarioController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.listar);
  api.get('/:id', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.mostrar);
  api.post('', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.crear);
  api.put('/:id', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.actualizar);
  api.delete('/:id', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.eliminar);

  api.put('/cambiar-contrasena/:id', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.cambiarContrasena);

  return api;
};
