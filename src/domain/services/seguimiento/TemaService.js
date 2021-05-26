'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function temaService (repositories, helpers, res) {
  const { TemaRepository, ComentarioRepository, TemaEntidadRepository, transaction } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const parametros = await TemaRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function listarTareas (params) {
    try {
      const _existeTema = await TemaRepository.findOne({ id: params.idTema, entidades: params.entidades });
      if (!_existeTema) {
        throw new Error('El tema no existe o no tiene permisos para verlo');
      }
      delete params.entidades;
      const tareas = await TemaRepository.findAllTareas(params);
      return tareas;
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
      await TemaEntidadRepository.deleteItemCond({ idTema: tema.id }, transaccion);

      for (const idEntidad of data.entidades) {
        await TemaEntidadRepository.createOrUpdate({
          idEntidad,
          idTema      : tema.id,
          userCreated : data.userCreated || data.userUpdated
        }, transaccion);
      }

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
    let transaccion;
    try {
      transaccion = await transaction.create();

      await TemaEntidadRepository.deleteItemCond({ idTema: id }, transaccion);
      const resultado = await TemaRepository.deleteItem(id, transaccion);

      await transaction.commit(transaccion);
      return resultado;
    } catch (error) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(error.message, 400);
    }
  }

  return {
    listar,
    createOrUpdate,
    deleteItem,
    listarTareas
  };
};
