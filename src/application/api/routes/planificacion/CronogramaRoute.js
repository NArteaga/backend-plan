'use strict';

module.exports = function setupPaso (api, controllers, middlewares) {
  const { CronogramaController } = controllers;

  api.get('/cronograma', CronogramaController.findAll);
  api.get('/cronograma/:id', CronogramaController.mostrar);
  api.post('/cronograma', CronogramaController.crear);
  api.post('/cronograma/:id/documento', CronogramaController.adicionarDocumento);
  api.post('/cronograma/documento/upload', CronogramaController.upload);
  api.put('/cronograma/:id', CronogramaController.actualizar);
  api.patch('/cronograma/:id/documentos', CronogramaController.actualizarDocumentos);
  api.delete('/cronograma/:id', CronogramaController.eliminar);

  return api;
};
