'use strict';

const debug = require('debug')('app:service:modulo');
const { ErrorApp } = require('../../lib/error');

module.exports = function permisoService (repositories, helpers, res) {
  const { PermisoRepository } = repositories;

  async function listar (params = {}) {
    debug('Obteniendo menú del rol seleccionado');
    try {
      const permisos = await PermisoRepository.findAll(params);
      return permisos;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos = {}) {
    debug('Creando o actualizando permisos');
    try {
      const permiso = await PermisoRepository.createOrUpdate(datos);
      return permiso;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params = {}) {
    debug('Obteniendo menú del rol seleccionado');
    try {
      const permisos = await PermisoRepository.findOne(params);
      return permisos;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function mostrar (idModulo = null) {
    debug('Obteniendo menú del rol seleccionado');
    try {
      const permisos = await PermisoRepository.findOne({ id: idModulo });
      return permisos;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    createOrUpdate,
    findOne,
    listar,
    mostrar
  };
};
