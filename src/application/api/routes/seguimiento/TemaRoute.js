'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { TemaController } = controllers;

  api.get('/temas', TemaController.listar);
  api.post('/temas', TemaController.crear);
  api.put('/temas/:id', TemaController.actualizar);
  api.delete('/temas/:id', TemaController.eliminar);

  return api;
};
