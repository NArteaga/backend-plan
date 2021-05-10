'use strict';

module.exports = function setupUsuario (api, controllers, middlewares) {
  const { UsuarioController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/usuario', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.listar);
  api.get('/usuario/:id', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.mostrar);
  api.post('/usuario', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.crear);
  api.put('/usuario/:id', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.actualizar);
  api.delete('/usuario/:id', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.eliminar);

  api.put('/usuario/cambiar-contrasena/:id', AuthMiddleware.verificarPermisos('usuarios:read'), UsuarioController.cambiarContrasena);

  return api;
};
