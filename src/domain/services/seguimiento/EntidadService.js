'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function entidadService (repositories, helpers, res) {
  const { EntidadRepository, CiteRepository } = repositories;
  const { FechaHelper } = helpers;

  async function findAll (params) {
    try {
      const parametros = await EntidadRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    let entidad;
    try {
      if (data.idEntidad) {
        const existeEntidad = await EntidadRepository.findOne({ id: data.idEntidad });
        if (!existeEntidad) {
          throw new Error('No existe la entidad superior.');
        }
        data.nivel = existeEntidad.nivel + 1;
      }

      entidad = await EntidadRepository.createOrUpdate(data);
      const existeCite = await CiteRepository.findOne({ idEntidad: entidad.id });
      const datosCite = { idEntidad: data.idEntidad };
      if (existeCite) {
        datosCite.id = existeCite.id;
        datosCite.prefijo = entidad.sigla;
        datosCite.userUpdated = data.userUpdated;
        await CiteRepository.createOrUpdate();
      } else {
        datosCite.prefijo = entidad.sigla;
        datosCite.correlativo = 0;
        datosCite.userCreated = data.userCreated;
        await CiteRepository.createOrUpdate();
      }
      return entidad;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function deleteItem (id) {
    debug('Eliminando rol', id);
    try {
      const resultado = await EntidadRepository.deleteItem(id);
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
