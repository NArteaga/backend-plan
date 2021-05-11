'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { CategoriaController } = controllers;

  api.get('/categorias', CategoriaController.listar);
  api.post('/categorias', CategoriaController.crear);
  api.put('/categorias/:id', CategoriaController.actualizar);
  api.delete('/categorias/:id', CategoriaController.eliminar);

  return api;
};
