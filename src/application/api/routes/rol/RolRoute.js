'use strict';
const { config } = require('../../../../common');

module.exports = function setupSocio (api, controllers, middlewares) {
  const { RolController } = controllers;
  const { PermisosMiddleware, SchemasMiddleware, EmpresaMiddleware } = middlewares;

  api.get('', RolController.recuperarTodo);
  api.post('', RolController.crear);
  api.put('/:id', RolController.actualizar);
  api.delete('/:id', RolController.eliminar);

  return api;
};
