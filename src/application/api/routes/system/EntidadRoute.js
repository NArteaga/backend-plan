'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { EntidadController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/entidades', AuthMiddleware.verificarPermisos(['etiquetas:listar']), EntidadController.listar);
  api.post('/entidades', AuthMiddleware.verificarPermisos(['etiquetas:crear']), EntidadController.crear);
  api.put('/entidades/:id', AuthMiddleware.verificarPermisos(['etiquetas:actualizar']), EntidadController.actualizar);
  api.delete('/entidades/:id', AuthMiddleware.verificarPermisos(['etiquetas:eliminar']), EntidadController.eliminar);

  return api;
};
