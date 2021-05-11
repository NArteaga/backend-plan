'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { ComentarioController } = controllers;

  api.get('/comentarios', ComentarioController.listar);
  api.post('/comentarios', ComentarioController.crear);
  api.put('/comentarios/:id', ComentarioController.actualizar);
  api.delete('/comentarios/:id', ComentarioController.eliminar);

  return api;
};
