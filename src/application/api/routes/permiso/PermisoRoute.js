'use strict';
const { config } = require('../../../../common');

module.exports = function setupSocio (api, controllers, middlewares) {
  const { PermisoController } = controllers;
  const { PermisosMiddleware, SchemasMiddleware, EmpresaMiddleware } = middlewares;

  api.get('', PermisoController.listar);

  api.get('/:idModulo', PermisoController.listarPermisos);

  api.post('', PermisoController.crear);

  api.put('/:id', PermisoController.actualizar);

  return api;
};
