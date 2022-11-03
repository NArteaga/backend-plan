'use strict';

module.exports = function setupGestion (api, controllers) {
  const { EjecucionController } = controllers;

  api.get('/ejecucion', EjecucionController.findAll);
  api.get('/ejecucion/:id', EjecucionController.mostrar);
  api.post('/ejecucion', EjecucionController.crear);
  api.put('/ejecucion/:id', EjecucionController.actualizar);
  api.delete('/ejecucion/:id', EjecucionController.eliminar);

  return api;
};
