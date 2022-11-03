'use strict';

const { ErrorApp } = require('../../lib/error');

module.exports = function gestionService (repositories) {
  const { DetalleRepository, EjecucionRepository, EjecucionHistorialRepository, PresupuestoRepository, transaction } = repositories;

  async function findAll (params) {
    try {
      const ejecucion = await EjecucionRepository.findAll(params);
      return ejecucion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const ejecucion = await EjecucionRepository.findOne(params);
      return ejecucion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    let transaccion;
    try {
      transaccion = await transaction.create();
      if (datos?.id) {
        const execute = await EjecucionRepository.findOne({ id: datos.id }, transaccion);
        await EjecucionHistorialRepository.createOrUpdate({
          idOperacion    : execute.id,
          versionInicial : execute,
          versionFinal   : datos
        }, transaccion);
      } else {
        const ejecucion = await EjecucionRepository.createOrUpdate(datos, transaccion);
        datos.id = ejecucion.id;
      }
      if (datos?.detalles?.length > 0) {
        let montoTotal = 0;
        for (const detalle of datos.detalles) {
          const monto = (detalle.cantidad * detalle.precioUnitario);
          const presupuesto = await PresupuestoRepository.findOne({ id: detalle.idPresupuesto }, transaccion);
          if (!detalle?.id && presupuesto.saldo < monto) throw new Error('No puede realizar la acción debido que supera el monto presupuestado');
          if (detalle?.id) {
            const ejecucion = await DetalleRepository.sumEjecucion({ id: detalle.id, idPresupuesto: detalle.idPresupuesto }, transaccion);
            if (presupuesto.montoOficial < monto + ejecucion.montoAcumulado) throw new Error('No puede realizar la acción debido que supera el monto presupuestado');
          }
          await DetalleRepository.createOrUpdate({ ...detalle, idEjecucion: datos.id }, transaccion);
          montoTotal += monto;
        }
        datos.montoTotal = montoTotal;
        console.log(datos);
      }
      await transaction.commit(transaccion);
      await EjecucionRepository.createOrUpdate({ id: datos.id, montoTotal: datos.montoTotal });
      return [];
    } catch (err) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const detalle = await DetalleRepository.findAll({ idEjecucion: id });
      if (detalle.length > 0) throw new Error('No puede eliminar la ejecucion debido que tiene detalles asociados');
      const ejecucion = await EjecucionRepository.deleteItem(id);
      return ejecucion;
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
