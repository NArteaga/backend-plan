'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { TemaController } = controllers;

  api.get('/tema', TemaController.listar);
  api.post('/tema', TemaController.crear);
  api.put('/tema/:id', TemaController.actualizar);
  api.delete('/tema/:id', TemaController.eliminar);

  return api;
};
