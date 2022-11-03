'use strict';

const { ErrorApp } = require('../../lib/error');

module.exports = function gestionService (repositories) {
  const { PresupuestoRepository, DetalleRepository, PresupuestoHistorialRepository, PartidaPresupuestariaRepository } = repositories;

  async function findAll (params) {
    try {
      if (params?.idPartidaPresupuestaria) {
        const partidaPresupuestaria = PartidaPresupuestariaRepository.findAll({ idPartidaPadre: params.idPartidaPresupuestaria });
        if (partidaPresupuestaria?.rows?.length > 0) params.idPartidaPresupuestaria = partidaPresupuestaria.map(item => { return item.id; });
      }
      const presupuesto = await PresupuestoRepository.findAll(params);
      return presupuesto;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const presupuesto = await PresupuestoRepository.findOne(params);
      return presupuesto;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      if (datos?.id) {
        const ejecucion = await DetalleRepository.findAll({ idPresupuesto: datos.id });
        let monto = 0;
        for (const item of ejecucion.rows) {
          monto += (item.cantidad * item.precioUnitario);
        }
        if (datos.montoOficial < monto) throw new Error('No puede actualizar el monto presupuestario debido a que es menor al monto ejecutado actualmente');
        const execute = await PresupuestoRepository.findOne({ id: datos.id });
        await PresupuestoHistorialRepository.createOrUpdate({
          idOperacion    : execute.id,
          versionInicial : execute,
          versionFinal   : datos
        });
      } else {
        datos.montoInicial = datos.montoOficial;
      }
      const presupuesto = await PresupuestoRepository.createOrUpdate(datos);
      return presupuesto;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const detalle = await DetalleRepository.findAll({ idPresupuesto: id });
      if (detalle.length > 0) throw new Error('No puede eliminar el presupuesto debido a que se tiene ejecuciones presupuestarias asociadas');
      const presupuesto = await PresupuestoRepository.deleteItem(id);
      return presupuesto;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    findOne,
    eliminar,
    createOrUpdate,
    findAll
  };
};
