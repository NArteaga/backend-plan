'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { EntidadController } = controllers;

  api.get('/entidades', EntidadController.listar);
  api.post('/entidades', EntidadController.crear);
  api.put('/entidades/:id', EntidadController.actualizar);
  api.delete('/entidades/:id', EntidadController.eliminar);

  return api;
};
