'use strict';
const { config } = require('../../../../common');

module.exports = function setupSocio (api, controllers, middlewares) {
  const { RolController } = controllers;
  const { PermisosMiddleware, SchemasMiddleware, EmpresaMiddleware } = middlewares;

  api.get('/rol', RolController.recuperarTodo);
  api.post('/rol', RolController.crear);
  api.put('/rol/:id', RolController.actualizar);
  api.delete('/rol/:id', RolController.eliminar);

  return api;
};
