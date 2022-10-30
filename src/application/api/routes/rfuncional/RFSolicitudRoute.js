'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { RFSolicitudController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.put('/solicitudes/:id/enviar', AuthMiddleware.verificarPermisos(['entidades:listar']), RFSolicitudController.enviar);
  api.get('/solicitudes', AuthMiddleware.verificarPermisos(['entidades:listar']), RFSolicitudController.listar);
  api.get('/solicitudes/:id', AuthMiddleware.verificarPermisos(['entidades:listar']), RFSolicitudController.findOne);
  api.post('/solicitudes', AuthMiddleware.verificarPermisos(['entidades:crear']), RFSolicitudController.crear);
  api.put('/solicitudes/:id', AuthMiddleware.verificarPermisos(['entidades:actualizar']), RFSolicitudController.actualizar);
  api.delete('/solicitudes/:id', AuthMiddleware.verificarPermisos(['entidades:eliminar']), RFSolicitudController.eliminar);

  api.get('/solicitudes-pendientes', AuthMiddleware.verificarPermisos(['entidades:listar']), RFSolicitudController.listarEnAprobacion);
  api.get('/solicitudes-pendientes/:id', AuthMiddleware.verificarPermisos(['entidades:listar']), RFSolicitudController.findOneEnAprobacion);

  api.get('/solicitudes/:id/certificado', AuthMiddleware.verificarPermisos(['entidades:listar']), RFSolicitudController.crearCertificado);

  api.get('/cantidades', AuthMiddleware.verificarPermisos(['entidades:listar']), RFSolicitudController.cantidades);
  api.get('/reporte', AuthMiddleware.verificarPermisos(['entidades:listar']), RFSolicitudController.reporte);

  return api;
};
