'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { ReunionController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/reuniones', AuthMiddleware.verificarPermisos(['reuniones:listar']), ReunionController.listar);
  api.get('/reuniones/:id', AuthMiddleware.verificarPermisos(['reuniones:listar']), ReunionController.findById);
  api.post('/reuniones', AuthMiddleware.verificarPermisos(['reuniones:crear']), ReunionController.crear);
  api.put('/reuniones/:id', AuthMiddleware.verificarPermisos(['reuniones:actualizar']), ReunionController.actualizar);
  api.delete('/reuniones/:id', AuthMiddleware.verificarPermisos(['reuniones:eliminar']), ReunionController.eliminar);

  api.post('/reuniones/reporte/:id', AuthMiddleware.verificarPermisos(['reuniones:generarPdf']), ReunionController.reporteReunion);

  api.post('/reuniones/tareas/adicionar-tarea', AuthMiddleware.verificarPermisos(['reuniones:crear', 'reuniones:actualizar']), ReunionController.asignarTarea);
  api.delete('/reuniones/tareas/remover-tarea', AuthMiddleware.verificarPermisos(['reuniones:crear', 'reuniones:actualizar']), ReunionController.removerTarea);

  return api;
};
