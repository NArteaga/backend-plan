'use strict';

module.exports = function setupParametro (api, controllers, middlewares) {
  const { ParametroController } = controllers;
  const { PermisosMiddleware } = middlewares;

  api.get('', ParametroController.findAll);
  api.post('', ParametroController.crear);
  api.put('/:id', ParametroController.actualizar);
  api.delete('/:id', ParametroController.eliminar);

  return api;
};
