'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function categoriaService (repositories, helpers, res) {
  const { ReunionRepository, ReunionTemaRepository, ReunionParticipanteRepository, transaction } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const parametros = await ReunionRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    let reunion;
    let transaccion;
    try {
      transaccion = await transaction.create();
      reunion = await ReunionRepository.createOrUpdate(data, transaccion);
      for (const tema of data.temas) {
        await ReunionTemaRepository.createOrUpdate({
          idTema      : tema,
          idReunion   : reunion.id,
          userCreated : data.userCreated || data.userUpdated
        }, transaccion);
      }

      for (const participante of data.participantes) {
        await ReunionParticipanteRepository.createOrUpdate({
          idUsuario   : participante,
          idReunion   : reunion.id,
          userCreated : data.userCreated || data.userUpdated
        }, transaccion);
      }

      await transaction.commit(transaccion);
      return reunion;
    } catch (error) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(error.message, 400);
    }
  }

  async function deleteItem (id) {
    debug('Eliminando rol', id);
    try {
      const resultado = await ReunionRepository.deleteItem(id);
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
