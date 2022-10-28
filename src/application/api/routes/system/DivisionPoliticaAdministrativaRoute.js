'use strict';

module.exports = function setupDivisionPoliticaAdministrativa (api, controllers, middlewares) {
  const { DivisionPoliticaAdministrativaController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/dpas', AuthMiddleware.verificarToken(), DivisionPoliticaAdministrativaController.findAll);
  api.get('/dpas/:id', DivisionPoliticaAdministrativaController.findOne);
  api.post('/dpas', DivisionPoliticaAdministrativaController.crear);
  api.put('/dpas/:id', DivisionPoliticaAdministrativaController.actualizar);
  api.delete('/dpas/:id', DivisionPoliticaAdministrativaController.eliminar);

  return api;
};
