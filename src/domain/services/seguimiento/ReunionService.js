'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function categoriaService (repositories, helpers, res) {
  const { ReunionRepository, ReunionTemaRepository, ReunionParticipanteRepository, CiteRepository, transaction } = repositories;
  const { FechaHelper } = helpers;

  async function findAll (params) {
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

      const citeActual = await CiteRepository.findOne({ idEntidad: data.idEntidad });
      let cite = null;

      if (citeActual) {
        const siguienteCorrelativo = citeActual.correlativo + 1;
        cite = await  CiteRepository.generarCite(citeActual.prefijo, citeActual.sufijo, siguienteCorrelativo);
        data.cite = cite.codigo;
        await CiteRepository.createOrUpdate({ id: citeActual.id, correlativo: siguienteCorrelativo }, transaccion);
      }

      reunion = await ReunionRepository.createOrUpdate(data, transaccion);

      await ReunionTemaRepository.deleteItemCond({ idReunion: reunion.id }, transaccion);
      if (data.temas && Array.isArray(data.temas)) {
        for (const tema of data.temas) {
          await ReunionTemaRepository.createOrUpdate({
            idTema      : tema,
            idReunion   : reunion.id,
            userCreated : data.userCreated || data.userUpdated
          }, transaccion);
        }
      }

      await ReunionParticipanteRepository.deleteItemCond({ idReunion: reunion.id }, transaccion);
      if (data.temas && Array.isArray(data.temas)) {
        for (const participante of data.participantes) {
          await ReunionParticipanteRepository.createOrUpdate({
            idUsuario   : participante,
            idReunion   : reunion.id,
            userCreated : data.userCreated || data.userUpdated
          }, transaccion);
        }
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
    findAll,
    createOrUpdate,
    deleteItem
  };
};
