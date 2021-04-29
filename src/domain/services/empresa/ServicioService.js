'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function servicioService (repositories, helpers, res) {
  const { ServicioRepository, UsuarioServicioRepository, transaction } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const parametros = await ServicioRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    data.fecha = FechaHelper.formatearFecha(data.fecha);
    let servicio;
    let transaccion;
    try {
      transaccion = await transaction.create();
      servicio = await ServicioRepository.createOrUpdate(data, transaccion);
      if (data.usuarioServicio) {
        if (data.id) {
          await UsuarioServicioRepository.deleteItemCond({ idServicio: servicio.id }, transaccion);
        }
        const promesas = [];
        for (const usuarioServicio of data.usuarioServicio) {
          promesas.push(UsuarioServicioRepository.createOrUpdate({
            idUsuario     : usuarioServicio,
            idServicio    : servicio.id,
            _user_created : data._user_created,
            _user_updated : data._user_updated
          }, transaccion));
        }
        await Promise.all(promesas);
      }
      await transaction.commit(transaccion);
      return servicio;
    } catch (err) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(err.message, 400);
    }
  }

  async function deleteItem (id) {
    debug('Eliminando rol', id);
    try {
      const resultado = await ServicioRepository.deleteItem(id);
      return resultado;
    } catch (err) {
      debug(err);
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    listar,
    createOrUpdate,
    deleteItem
  };
};
