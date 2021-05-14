'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { PermisoController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/permisos', PermisoController.listar);
  api.get('/permisos/:id', PermisoController.mostrar);
  api.post('/permisos/', PermisoController.crear);
  api.put('/permisos/:id', PermisoController.actualizar);
  api.delete('/permisos/:id', PermisoController.eliminar);

  return api;
};
