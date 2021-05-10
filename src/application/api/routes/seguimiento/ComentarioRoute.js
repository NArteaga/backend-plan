'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { ComentarioController } = controllers;

  api.get('/comentario', ComentarioController.listar);
  api.post('/comentario', ComentarioController.crear);
  api.put('/comentario/:id', ComentarioController.actualizar);
  api.delete('/comentario/:id', ComentarioController.eliminar);

  return api;
};
