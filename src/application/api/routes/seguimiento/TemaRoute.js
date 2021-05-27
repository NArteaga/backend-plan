'use strict';
const temaSchema = require('../../../schemas/TemaSchema');

module.exports = function setupSocio (api, controllers, middlewares) {
  const { TemaController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/temas', AuthMiddleware.verificarPermisos(['temas:listar']), TemaController.listar);

  api.get('/temas/:id/tareas', AuthMiddleware.verificarPermisos(['temas:listar', 'tareas:listar']), TemaController.listarTareas);

  api.post('/temas', AuthMiddleware.verificarPermisos(['temas:crear']), TemaController.crear);
  api.put('/temas/:id', AuthMiddleware.verificarPermisos(['temas:actualizar']), TemaController.actualizar);
  api.delete('/temas/:id', AuthMiddleware.verificarPermisos(['temas:eliminar']), TemaController.eliminar);

  return api;
};
