'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { ModuloController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/modulo', AuthMiddleware.verificarPermisos('modulos:read'), ModuloController.listar);
  api.get('/modulo/:id', AuthMiddleware.verificarPermisos('modulos:read'), ModuloController.mostrar);
  api.post('/modulo/', AuthMiddleware.verificarPermisos('modulos:create'), ModuloController.crear);
  api.put('/modulo/:id', AuthMiddleware.verificarPermisos('modulos:update'), ModuloController.actualizar);
  api.delete('/modulo/:id', AuthMiddleware.verificarPermisos('modulos:delete'), ModuloController.eliminar);
  return api;
};
