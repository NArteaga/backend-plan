'use strict';

module.exports = function setupOperacion (api, controllers, middlewares) {
  const { OperacionController } = controllers;

  api.get('/operacion', OperacionController.findAll);
  api.get('/operacion/poa', OperacionController.poa);
  api.get('/operacion/ultima-estructura', OperacionController.ultimaEstructura);
  api.get('/operacion/:id', OperacionController.mostrar);
  api.get('/operacion/:idGestion/calificaciones', OperacionController.calificaciones);
  api.post('/operacion', OperacionController.crear);
  api.put('/operacion/:id', OperacionController.actualizar);
  api.put('/operacion/:id/activar-inactivar', OperacionController.activarInactivar);
  api.delete('/operacion/:id', OperacionController.eliminar);

  return api;
};
