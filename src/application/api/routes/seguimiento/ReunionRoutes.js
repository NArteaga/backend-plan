'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { ReunionController } = controllers;

  api.get('/reuniones', ReunionController.listar);
  api.post('/reuniones', ReunionController.crear);
  api.put('/reuniones/:id', ReunionController.actualizar);
  api.delete('/reuniones/:id', ReunionController.eliminar);

  return api;
};
