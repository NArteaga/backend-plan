'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { TareaController } = controllers;

  api.get('/tarea', TareaController.listar);
  api.post('/tarea', TareaController.crear);
  api.put('/tarea/:id', TareaController.actualizar);
  api.delete('/tarea/:id', TareaController.eliminar);

  return api;
};
