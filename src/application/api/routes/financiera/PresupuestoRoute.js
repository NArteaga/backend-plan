'use strict';

module.exports = function setupGestion (api, controllers) {
  const { PresupuestoController } = controllers;

  api.get('/presupuesto', PresupuestoController.findAll);
  api.get('/presupuesto/:id', PresupuestoController.mostrar);
  api.post('/presupuesto', PresupuestoController.crear);
  api.put('/presupuesto/:id', PresupuestoController.actualizar);
  api.delete('/presupuesto/:id', PresupuestoController.eliminar);

  return api;
};
