'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function tareaService (repositories, helpers, res) {
  const { TareaRepository, TemaRepository, EtiquetaTareaRepository, ComentarioRepository, transaction } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const parametros = await TareaRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function cambiarEstado (data) {
    debug('Crear o actualizar rol');
    let transaccion;
    try {
      transaccion = await transaction.create();

      const existeTareaFinalizada = await TareaRepository.findOne({ id: data.id });

      if (!existeTareaFinalizada) {
        throw new Error('La tarea no existe.');
      }

      data.finalizado = !existeTareaFinalizada.finalizado;

      await ComentarioRepository.createOrUpdate({
        idUsuario   : data.userCreated || data.userUpdated,
        idTarea     : data.id,
        descripcion : data.finalizado ? 'ha marcado como finalizada esta tarea' : 'ha reabierto esta tarea',
        userCreated : data.userCreated || data.userUpdated
      }, transaccion);

      await TareaRepository.createOrUpdate(data, transaccion);

      await transaction.commit(transaccion);

      return data.finalizado;
    } catch (error) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(error.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    let tarea;
    let transaccion;
    try {
      transaccion = await transaction.create();
      data.fechaFinalizacion = FechaHelper.formatearFecha(data.fechaFinalizacion);

      if (!data.idTema) {
        throw new Error('Debe enviar el tema al que se le adicionará la tarea.');
      }

      const existeTema = await TemaRepository.findOne({ id: data.idTema });
      if (!existeTema) {
        throw new Error('El tema de la etiqueta no existe.');
      }

      if (data.id) {
        const existeTarea = await TareaRepository.findOne({ id: data.id });
        if (!existeTarea) {
          throw new Error('La tarea no existe');
        }

        const existeTareaFinalizada = await TareaRepository.findOne({ id: data.id, finalizado: true });
        if (existeTareaFinalizada) {
          throw new Error('La tarea ya fue marcada como finalizada y no se puede modificar');
        }
      }
      tarea = await TareaRepository.createOrUpdate(data, transaccion);

      if (data.etiquetas) {
        if (data.id) {
          await ComentarioRepository.createOrUpdate({
            idUsuario   : data.userCreated || data.userUpdated,
            idTarea     : tarea.id,
            descripcion : 'ha modificado esta tarea.',
            userCreated : data.userCreated || data.userUpdated
          }, transaccion);
          await EtiquetaTareaRepository.deleteItemCond({ idTarea: tarea.id }, transaccion);
        } else {
          await ComentarioRepository.createOrUpdate({
            idUsuario   : data.userCreated || data.userUpdated,
            idTarea     : tarea.id,
            descripcion : 'ha creado esta tarea.',
            userCreated : data.userCreated || data.userUpdated
          }, transaccion);
        }

        for (const etiqueta of data.etiquetas) {
          await EtiquetaTareaRepository.createOrUpdate({
            idEtiqueta  : etiqueta,
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

  async function verficarDependencia (entidadesDependientes, idTarea) {
    try {
      const resultado = await TareaRepository.findByEntidad({ id: idTarea, entidades: entidadesDependientes });
      if (!resultado) {
        return false;
      }
      return true;
    } catch (err) {
      debug(err);
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    verficarDependencia,
    cambiarEstado,
    listar,
    createOrUpdate,
    deleteItem
  };
};
