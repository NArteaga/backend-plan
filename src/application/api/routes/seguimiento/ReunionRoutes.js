'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { ReunionController } = controllers;

  api.get('/reuniones', ReunionController.listar);
  api.post('/reuniones', ReunionController.crear);
  api.put('/reuniones/:id', ReunionController.actualizar);
  api.delete('/reuniones/:id', ReunionController.eliminar);

  api.post('/reuniones/reporte/:id', ReunionController.reporteReunion);

  api.post('/reuniones/adicionar-tarea', ReunionController.asignarTarea);
  api.delete('/reuniones/remover-tarea', ReunionController.removerTarea);

  return api;
};
