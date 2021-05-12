'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function temaService (repositories, helpers, res) {
  const { TemaRepository, ComentarioRepository, transaction } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const parametros = await TemaRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    let tema;
    let transaccion;
    try {
      transaccion = await transaction.create();
      tema = await TemaRepository.createOrUpdate(data, transaccion);
      if (data.id) {
        await ComentarioRepository.createOrUpdate({
          idUsuario   : data.userCreated || data.userUpdated,
          idTema      : tema.id,
          descripcion : 'ha modificado este tema.',
          userCreated : data.userCreated || data.userUpdated
        }, transaccion);
      } else {
        await ComentarioRepository.createOrUpdate({
          idUsuario   : data.userCreated || data.userUpdated,
          idTema      : tema.id,
          descripcion : 'ha creado este tema.',
          userCreated : data.userCreated || data.userUpdated
        }, transaccion);
      }
      await transaction.commit(transaccion);
      return tema;
    } catch (error) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(error.message, 400);
    }
  }

  async function deleteItem (id) {
    debug('Eliminando rol', id);
    try {
      const resultado = await TemaRepository.deleteItem(id);
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
