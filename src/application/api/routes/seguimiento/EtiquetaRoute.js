'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { EtiquetaController } = controllers;

  api.get('/etiquetas', EtiquetaController.listar);
  api.post('/etiquetas', EtiquetaController.crear);
  api.put('/etiquetas/:id', EtiquetaController.actualizar);
  api.delete('/etiquetas/:id', EtiquetaController.eliminar);

  return api;
};
