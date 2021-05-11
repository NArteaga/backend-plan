'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function tareaService (repositories, helpers, res) {
  const { TareaRepository, TemaRepository, CategoriaTareaRepository, transaction } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const parametros = await TareaRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    let tarea;
    let transaccion;
    try {
      transaccion = await transaction.create();
      if (!data.idTema) {
        throw new Error('Debe enviar el tema al que se le adicionará la tarea.');
      }
      const existeTema = await TemaRepository.findOne({ id: data.idTema });
      if (!existeTema) {
        throw new Error('El tema de la categoria no existe.');
      }
      tarea = await TareaRepository.createOrUpdate(data, transaccion);
      if (data.categorias) {
        if (data.id) {
          await CategoriaTareaRepository.deleteItemCond({ idTarea: tarea.id }, transaccion);
        }

        for (const categoria of data.categorias) {
          await CategoriaTareaRepository.createOrUpdate({
            idCategoria : categoria,
            idTarea     : tarea.id,
            userCreated : data.userCreated || data.userUpdated
          }, transaccion);
        }
      }

      await transaction.commit(transaccion);
      return tarea;
    } catch (error) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(error.message, 400);
    }
  }

  async function deleteItem (id) {
    debug('Eliminando rol', id);
    try {
      const resultado = await TareaRepository.deleteItem(id);
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
