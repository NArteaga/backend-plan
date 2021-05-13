'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function etiquetaService (repositories, helpers, res) {
  const { EtiquetaRepository, TemaRepository } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const parametros = await EtiquetaRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    let etiqueta;
    try {
      const existeTema = await TemaRepository.findOne({ id: data.idTema });
      if (!existeTema) {
        throw new Error('El tema de la etiqueta no existe.');
      }
      etiqueta = await EtiquetaRepository.createOrUpdate(data);
      return etiqueta;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function deleteItem (id) {
    debug('Eliminando rol', id);
    try {
      const resultado = await EtiquetaRepository.deleteItem(id);
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
