'use strict';

const { ErrorApp } = require('../../lib/error');

module.exports = function gestionService (repositories) {
  const { DetalleRepository, EjecucionRepository, PresupuestoRepository } = repositories;

  async function findAll (params) {
    try {
      const detalle = await DetalleRepository.findAll(params);
      return detalle;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const detalle = await DetalleRepository.findOne(params);
      return detalle;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      const presupuesto = await PresupuestoRepository.findOne({ id: datos.idPresupuesto });
      const detalles = await DetalleRepository.findAll({ idPresupuesto: datos.idPresupuesto });
      let montoPresupuestado = 0;
      if (detalles.rows.length > 0) {
        for (const detalle of detalles.rows) {
          if (detalle?.id === datos.id) montoPresupuestado += (datos.cantidad * datos.precioUnitario);
          else montoPresupuestado += (detalle.cantidad * detalle.precioUnitario);
        }
        if (!datos?.id) montoPresupuestado += (datos.cantidad * datos.precioUnitario);
      }
      if (montoPresupuestado > presupuesto.montoOficial) throw new Error('No puede realizar la acción debido que supera el monto presupuestado');
      const ejecucion = await EjecucionRepository.findOne({ id: datos.idEjecucion });
      if (datos?.id && ejecucion?.detalles?.length > 0) {
        let montoTotal = 0;
        for (const detalle of ejecucion.detalles) {
          if (datos.id === detalle.id) montoTotal += (datos.cantidad * datos.precioUnitario);
          else montoTotal += (detalle.cantidad * detalle.precioUnitario);
        }
        datos.montoTotal = montoTotal;
      } else ejecucion.montoTotal += (datos.cantidad * datos.precioUnitario);
      await EjecucionRepository.createOrUpdate({ id: ejecucion.id, montoTotal: ejecucion.montoTotal });
      const detalle = await DetalleRepository.createOrUpdate(datos);
      return detalle;
    } catch (err) {
      console.log(err);
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const detalle = await DetalleRepository.findOne({ id: id });
      const ejecucion = await EjecucionRepository.findOne({ id: detalle.idEjecucion });
      await EjecucionRepository.createOrUpdate({ id: ejecucion.id, montoTotal: ejecucion.montoTotal - (detalle.cantidad * detalle.precioUnitario) });
      await DetalleRepository.deleteItem(id);
      return detalle;
    } catch (err) {
      console.log(err);
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
