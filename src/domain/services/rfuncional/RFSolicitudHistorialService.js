'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function menuService (repositories, helpers, res) {
  const { RFSolicitudHistorialRepository, RFSolicitudRepository } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const comentarios = await RFSolicitudHistorialRepository.findAll(params);
      return comentarios;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const comentario = await RFSolicitudHistorialRepository.findOne(params);
      if (!comentario) {
        throw new Error('El comentario no existe');
      }
      return comentario;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    let menu;
    try {
      console.log(data);
      menu = await RFSolicitudHistorialRepository.createOrUpdate(data);
      const _ = await RFSolicitudRepository.createOrUpdate({
        id: menu.rfuncionalSolicitudId,
        estado: menu.estado,
      })
      return menu;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (params) {
    try {
      const resultado = await RFSolicitudHistorialRepository.deleteItemCond(params);
      return resultado;
    } catch (err) {
      debug(err);
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    findOne,
    listar,
    createOrUpdate,
    eliminar
  };
};
