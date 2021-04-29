'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function guarnicionService (repositories, helpers, res) {
  const { GuarnicionRepository } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const parametros = await GuarnicionRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    let rol;
    try {
      rol = await GuarnicionRepository.createOrUpdate(data);
      return rol;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function deleteItem (id) {
    debug('Eliminando rol', id);
    try {
      const resultado = await GuarnicionRepository.deleteItem(id);
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
