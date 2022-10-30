'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { RFInstitucionController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/instituciones', AuthMiddleware.verificarPermisos(['entidades:listar']), RFInstitucionController.listar);
  api.get('/instituciones/:id', AuthMiddleware.verificarPermisos(['entidades:listar']), RFInstitucionController.findOne);
  api.post('/instituciones', AuthMiddleware.verificarPermisos(['entidades:crear']), RFInstitucionController.crear);
  api.put('/instituciones/:id', AuthMiddleware.verificarPermisos(['entidades:actualizar']), RFInstitucionController.actualizar);
  api.delete('/instituciones/:id', AuthMiddleware.verificarPermisos(['entidades:eliminar']), RFInstitucionController.eliminar);

  return api;
};
