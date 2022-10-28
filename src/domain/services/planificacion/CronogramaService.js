'use strict';
const { ErrorApp } = require('../../lib/error');
module.exports = function CronogramaRepository (repositories, helpers, res) {
  const { CronogramaRepository } = repositories;

  async function findAll (params) {
    try {
      const cronograma = await CronogramaRepository.findAll(params);
      return cronograma;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const cronograma = await CronogramaRepository.findOne(params);
      if (!cronograma) {
        throw new Error('El cronograma no existe');
      }
      return cronograma;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      const cronograma = await CronogramaRepository.createOrUpdate(datos);
      return cronograma;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const cronograma = await CronogramaRepository.deleteItem(id);
      return cronograma;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function adicionarDocumento (id, data) {
    try {
      let cronograma = await CronogramaRepository.findOne({ id });
      cronograma.documentos.push(data);
      cronograma = await CronogramaRepository.createOrUpdate({
        id,
        documentos: cronograma.documentos
      });
      return cronograma;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function actualizarDocumentos (id, data) {
    try {
      const cronograma = await CronogramaRepository.createOrUpdate({
        id,
        documentos   : data.documentos,
        userUpdateAt : data.userUpdateAt
      });
      return cronograma;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    findOne,
    eliminar,
    createOrUpdate,
    findAll,
    adicionarDocumento,
    actualizarDocumentos
  };
};
