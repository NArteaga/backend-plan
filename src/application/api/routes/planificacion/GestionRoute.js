'use strict';

module.exports = function setupGestion (api, controllers, middlewares) {
  const { GestionController } = controllers;

  api.get('/gestion', GestionController.findAll);
  api.get('/gestion/etapa-activa', GestionController.etapaActiva);
  api.patch('/gestion/:id/estado', GestionController.estado);
  api.get('/gestion/:id', GestionController.mostrar);
  api.post('/gestion', GestionController.crear);
  api.put('/gestion/:id', GestionController.actualizar);
  api.delete('/gestion/:id', GestionController.eliminar);

  return api;
};
