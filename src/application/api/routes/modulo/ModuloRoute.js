'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { ModuloController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('', AuthMiddleware.verificarPermisos('modulos:read'), ModuloController.listar);
  api.get('/:id', AuthMiddleware.verificarPermisos('modulos:read'), ModuloController.mostrar);
  api.post('/', AuthMiddleware.verificarPermisos('modulos:create'), ModuloController.crear);
  api.put('/:id', AuthMiddleware.verificarPermisos('modulos:update'), ModuloController.actualizar);
  api.delete('/:id', AuthMiddleware.verificarPermisos('modulos:delete'), ModuloController.eliminar);
  return api;
};
