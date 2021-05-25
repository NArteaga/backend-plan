'use strict';
const { config } = require('../../../../common');

module.exports = function setupSocio (api, controllers, middlewares) {
  const { RolController } = controllers;
  const { PermisosMiddleware, SchemasMiddleware } = middlewares;

  api.get('/roles', RolController.listar);
  api.post('/roles', RolController.crear);
  api.put('/roles/:id', RolController.actualizar);
  api.delete('/roles/:id', RolController.eliminar);

  return api;
};
