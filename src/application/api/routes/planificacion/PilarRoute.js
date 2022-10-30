'use strict';

module.exports = function setupGestion (api, controllers, middlewares) {
  const { PilarController } = controllers;

  api.get('/pilar', PilarController.findAll);
  api.get('/pilar/:id', PilarController.mostrar);
  api.post('/pilar', PilarController.crear);
  api.put('/pilar/:id', PilarController.actualizar);
  api.delete('/pilar/:id', PilarController.eliminar);

  return api;
};
