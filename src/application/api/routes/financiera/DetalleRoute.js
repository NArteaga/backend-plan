'use strict';

module.exports = function setupGestion (api, controllers) {
  const { DetalleController } = controllers;

  api.get('/detalle', DetalleController.findAll);
  api.get('/detalle/:id', DetalleController.mostrar);
  api.post('/detalle', DetalleController.crear);
  api.put('/detalle/:id', DetalleController.actualizar);
  api.delete('/detalle/:id', DetalleController.eliminar);

  return api;
};
