'use strict';

module.exports = function setupUsuario (api, controllers, middlewares) {
  const { UsuarioController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/usuarios', UsuarioController.listar);
  api.get('/usuarios/:id', UsuarioController.mostrar);
  api.post('/usuarios', UsuarioController.crear);
  api.put('/usuarios/:id', UsuarioController.actualizar);
  api.delete('/usuarios/:id', UsuarioController.eliminar);

  api.put('/usuarios/cambiar-contrasena/:id', UsuarioController.cambiarContrasena);

  return api;
};
