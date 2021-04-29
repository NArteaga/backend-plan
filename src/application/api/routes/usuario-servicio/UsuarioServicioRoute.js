'use strict';

module.exports = function setupUsuarioServicio (api, controllers, middlewares) {
  const { UsuarioServicioController } = controllers;
  const { PermisosMiddleware, SchemasMiddleware } = middlewares;

  api.get('', UsuarioServicioController.listar);

  api.post('', UsuarioServicioController.crear);

  api.put('/:id', UsuarioServicioController.actualizar);

  api.delete('/:id', UsuarioServicioController.eliminar);

  return api;
};
