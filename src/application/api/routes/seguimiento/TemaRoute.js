'use strict';
const temaSchema = require('../../../schemas/TemaSchema');

module.exports = function setupSocio (api, controllers, middlewares) {
  const { TemaController } = controllers;
  const { SchemaMiddleware } = middlewares;

  api.get('/temas', TemaController.listar);
  api.post('/temas', SchemaMiddleware.validarSchema(temaSchema), TemaController.crear);
  api.put('/temas/:id', SchemaMiddleware.validarSchema(temaSchema), TemaController.actualizar);
  api.delete('/temas/:id', TemaController.eliminar);

  return api;
};
