'use strict';

module.exports = function setupEstructura (api, controllers) {
  const { EstructuraController } = controllers;

  api.get('/estructura', EstructuraController.findAll);
  api.get('/estructura/:id', EstructuraController.mostrar);
  api.post('/estructura', EstructuraController.crear);
  api.put('/estructura/:id', EstructuraController.actualizar);
  api.delete('/estructura/:id', EstructuraController.eliminar);
  api.get('/estructura/hijos/:idEstructuraPadre', EstructuraController.buscarHijos);

  return api;
};
