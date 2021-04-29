'use strict';
const { config } = require('../../../../common');

module.exports = function setupAuth (api, controllers, middlewares) {
  const { AuthController } = controllers;
  const { PermisosMiddleware } = middlewares;

  // api.post('/login', AuthController.login);
  api.get('/codigo', AuthController.codigo);

  api.get('/autorizar', AuthController.autorizar);
  api.post('/logout', AuthController.logout);

  // api.get('/refresh-token', AuthController.refreshToken);

  return api;
};
