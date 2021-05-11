'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { CategoriaController } = controllers;

  api.get('/categoria', CategoriaController.listar);
  api.post('/categoria', CategoriaController.crear);
  api.put('/categoria/:id', CategoriaController.actualizar);
  api.delete('/categoria/:id', CategoriaController.eliminar);

  return api;
};
