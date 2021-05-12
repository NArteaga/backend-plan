'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { TareaController } = controllers;

  api.get('/tareas', TareaController.listar);
  api.post('/tareas', TareaController.crear);
  api.put('/tareas/:id', TareaController.actualizar);
  api.delete('/tareas/:id', TareaController.eliminar);

  api.patch('/tareas/:id/finalizado', TareaController.cambiarEstado);

  return api;
};
