'use strict';

const debug = require('debug')('app:service:modulo');
const { ErrorApp } = require('../../lib/error');

module.exports = function moduloService (repositories, helpers, res) {
  const { ModuloRepository, PermisoRepository } = repositories;

  async function listar (params = {}) {
    debug('Obteniendo menú del rol seleccionado');
    try {
      const modulos = await ModuloRepository.findAll(params);
      return modulos;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params = {}) {
    debug('Obteniendo menú del rol seleccionado');
    try {
      const modulos = await ModuloRepository.findOne(params);
      return modulos;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function mostrar (idModulo = null) {
    debug('Obteniendo menú del rol seleccionado');
    try {
      const modulos = await ModuloRepository.findOne({ id: idModulo });
      return modulos;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function getPermisos (params = {}) {
    const permisos = await PermisoRepository.findOne(params);
    return permisos;
  }

  async function createOrUpdate (datos) {
    try {
      const parametros = await ModuloRepository.createOrUpdate(datos);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const parametros = await ModuloRepository.deleteItem(id);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    createOrUpdate,
    eliminar,
    findOne,
    getPermisos,
    listar,
    mostrar
  };
};
