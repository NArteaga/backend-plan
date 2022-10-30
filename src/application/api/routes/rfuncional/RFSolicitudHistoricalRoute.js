'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { RFSolicitudHistorialController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/historial', AuthMiddleware.verificarPermisos(['entidades:listar']), RFSolicitudHistorialController.listar);
  api.get('/historial/:id', AuthMiddleware.verificarPermisos(['entidades:listar']), RFSolicitudHistorialController.findOne);
  api.post('/historial', AuthMiddleware.verificarPermisos(['entidades:crear']), RFSolicitudHistorialController.crear);

  return api;
};
