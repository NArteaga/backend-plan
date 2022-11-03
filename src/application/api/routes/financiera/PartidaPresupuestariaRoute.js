'use strict';

module.exports = function setupGestion (api, controllers) {
  const { PartidaPresupuestariaController } = controllers;

  api.get('/partida-presupuestaria', PartidaPresupuestariaController.findAll);
  api.get('/partida-presupuestaria/:id', PartidaPresupuestariaController.mostrar);
  api.post('/partida-presupuestaria', PartidaPresupuestariaController.crear);
  api.put('/partida-presupuestaria/:id', PartidaPresupuestariaController.actualizar);
  api.delete('/partida-presupuestaria/:id', PartidaPresupuestariaController.eliminar);

  return api;
};
