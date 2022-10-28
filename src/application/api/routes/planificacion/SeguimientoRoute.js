'use strict';

module.exports = function setupPaso (api, controllers, middlewares) {
  const { SeguimientoController } = controllers;

  api.get('/seguimiento', SeguimientoController.findAll);
  api.get('/seguimiento/:id', SeguimientoController.mostrar);
  api.post('/seguimiento', SeguimientoController.crear);
  api.put('/seguimiento/:id', SeguimientoController.actualizar);
  api.delete('/seguimiento/:id', SeguimientoController.eliminar);

  return api;
};
