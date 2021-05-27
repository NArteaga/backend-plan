'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { TareaController } = controllers;
  const { AuthMiddleware } = middlewares;

  // AuthMiddleware.verificarPermisos(['usuario:crear'])

  api.get('/tareas', AuthMiddleware.verificarPermisos(['acciones:listar']), TareaController.listar);
  api.post('/tareas', AuthMiddleware.verificarPermisos(['acciones:crear']), TareaController.crear);
  api.put('/tareas/:id', AuthMiddleware.verificarPermisos(['acciones:actualizar']), TareaController.actualizar);
  api.delete('/tareas/:id', AuthMiddleware.verificarPermisos(['acciones:eliminar']), TareaController.eliminar);

  api.patch('/tareas/:id/finalizado', AuthMiddleware.verificarPermisos(['acciones:actualizar']), TareaController.cambiarEstado);

  return api;
};
