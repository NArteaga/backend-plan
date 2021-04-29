'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function productoService (repositories, helpers, res) {
  const { ProductoRepository, ProductoGuarnicionRepository } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const parametros = await ProductoRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar producto');
    let producto;
    try {
      producto = await ProductoRepository.createOrUpdate(data);
      if (data.guarnicionesProducto) {
        const arrayGuarniciones = [];
        await ProductoGuarnicionRepository.deleteItemCond({ idProducto: producto.id });
        for (const guarnicion of data.guarnicionesProducto) {
          const idGuarnicion = guarnicion.id || guarnicion;
          arrayGuarniciones.push(ProductoGuarnicionRepository.createOrUpdate({
            idProducto    : producto.id,
            idGuarnicion  : idGuarnicion,
            _user_created : data._user_created || data._user_updated
          }));
        }
        await Promise.all(arrayGuarniciones);
      }
      return producto;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function deleteItem (id) {
    debug('Eliminando rol', id);
    try {
      const resultado = await ProductoRepository.deleteItem(id);
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
