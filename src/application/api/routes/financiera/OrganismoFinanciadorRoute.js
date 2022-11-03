'use strict';

module.exports = function setupGestion (api, controllers) {
  const { OrganismoFinanciadorController } = controllers;

  api.get('/organismo-financiador', OrganismoFinanciadorController.findAll);
  api.get('/organismo-financiador/:id', OrganismoFinanciadorController.mostrar);
  api.post('/organismo-financiador', OrganismoFinanciadorController.crear);
  api.put('/organismo-financiador/:id', OrganismoFinanciadorController.actualizar);
  api.delete('/organismo-financiador/:id', OrganismoFinanciadorController.eliminar);

  return api;
};
