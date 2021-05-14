'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { MenuController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/menus', MenuController.listar);
  api.get('/menus/:id', MenuController.mostrar);
  api.post('/menus/', MenuController.crear);
  api.put('/menus/:id', MenuController.actualizar);
  api.delete('/menus/:id', MenuController.eliminar);

  return api;
};
