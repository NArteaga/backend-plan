'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { EntidadController } = controllers;

  api.get('/entidad', EntidadController.listar);
  api.post('/entidad', EntidadController.crear);
  api.put('/entidad/:id', EntidadController.actualizar);
  api.delete('/entidad/:id', EntidadController.eliminar);

  return api;
};
