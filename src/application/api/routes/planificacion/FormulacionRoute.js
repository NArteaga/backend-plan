'use strict';

module.exports = function setupPaso (api, controllers, middlewares) {
  const { FormulacionController } = controllers;

  api.get('/formulacion', FormulacionController.findAll);
  api.get('/formulacion/:id', FormulacionController.mostrar);
  api.post('/formulacion', FormulacionController.crear);
  api.put('/formulacion/:id', FormulacionController.actualizar);
  api.patch('/formulacion/:id/enviar', FormulacionController.enviar);
  api.patch('/formulacion/:id/observar', FormulacionController.observar);
  api.patch('/formulacion/:gestion/adjunto/:idUnidadOrganizacional', FormulacionController.uploadAdjunto);
  api.get('/formulacion/:gestion/adjunto/:idUnidadOrganizacional', FormulacionController.downloadAdjunto);
  api.delete('/formulacion/:id', FormulacionController.eliminar);
  api.get('/formulacion/:id/firmar', FormulacionController.firmar);
  api.get('/formulacion/:id/poa-pdf', FormulacionController.poaPdf);

  return api;
};
