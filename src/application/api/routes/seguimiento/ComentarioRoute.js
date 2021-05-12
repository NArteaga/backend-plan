'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { ComentarioController } = controllers;

  api.get('/comentarios', ComentarioController.listar);
  api.post('/comentarios', ComentarioController.crear);
  api.put('/comentarios/:id', ComentarioController.actualizar);
  api.delete('/comentarios/:id', ComentarioController.eliminar);

  api.post('/comentarios/subir-archivo', ComentarioController.subirArchivo);

  api.get('/comentarios/recuperar-archivo/:id', ComentarioController.recuperarArchivo);

  return api;
};
