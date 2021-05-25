'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { TareaController } = controllers;
  const { AuthMiddleware } = middlewares;

  // AuthMiddleware.verificarPermisos(['usuario:crear'])

  api.get('/tareas', AuthMiddleware.verificarToken(), TareaController.listar);
  api.post('/tareas', AuthMiddleware.verificarToken(), TareaController.crear);
  api.put('/tareas/:id', AuthMiddleware.verificarToken(), TareaController.actualizar);
  api.delete('/tareas/:id', AuthMiddleware.verificarToken(), TareaController.eliminar);

  api.patch('/tareas/:id/finalizado', AuthMiddleware.verificarToken(), TareaController.cambiarEstado);

  return api;
};
