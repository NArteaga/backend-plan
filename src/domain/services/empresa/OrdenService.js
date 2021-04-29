'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');
const fs = require('fs');
const ejs = require('ejs');
var pdf = require('html-pdf');
const ClienteRepository = require('../../../infrastructure/repositories/empresa/ClienteRepository');

module.exports = function ordenService (repositories, helpers, res) {
  const { OrdenRepository, OrdenProductoRepository, SucursalRepository, ClienteRepository, transaction } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const parametros = await OrdenRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    let orden;
    let transaccion;
    try {
      transaccion = await transaction.create();
      const _existeSucursal = await SucursalRepository.findOne({ id: data.idSucursal });
      if (!_existeSucursal) {
        throw new Error('No existe la sucursal de la orden');
      }

      if (data.nit) {
        const _existeCliente = await ClienteRepository.findOne({ nit: data.nit });
        const _clienteGuardar = {
          id            : _existeCliente ? _existeCliente.id : null,
          nombreCliente : data.nombreCliente,
          nit           : data.nit,
          direccion     : data.direccion,
          _user_created : data._user_created || data._user_updated
        };
        await ClienteRepository.createOrUpdate(_clienteGuardar, transaccion);
      }

      let siguiente = 0;
      if (!data.id) {
        siguiente = _existeSucursal.numeroOrden + 1;
        const codigo = await SucursalRepository.generarCodigo(_existeSucursal.formato, siguiente);
        data.numeroOrden = codigo.codigo;
      }
      orden = await OrdenRepository.createOrUpdate(data, transaccion);
      if (data.ordenProducto) {
        await OrdenProductoRepository.deleteItemCond({ idOrden: orden.id }, transaccion);
        const arrayOrdenProductos = [];
        for (const ordenProducto of data.ordenProducto) {
          delete ordenProducto.id;
          arrayOrdenProductos.push(OrdenProductoRepository.createOrUpdate({
            ...ordenProducto,
            idOrden       : orden.id,
            _user_created : data._user_created || data._user_updated
          }, transaccion));
        }
        await Promise.all(arrayOrdenProductos);
      }
      if (!data.id && siguiente) {
        await SucursalRepository.createOrUpdate({
          numeroOrden : siguiente,
          id          : _existeSucursal.id
        }, transaccion);
      }
      await transaction.commit(transaccion);
      return orden;
    } catch (err) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(err.message, 400);
    }
  }

  async function deleteItem (id) {
    let transaccion;
    try {
      transaccion = await transaction.create();
      await OrdenProductoRepository.deleteItemCond({ idOrden: id }, transaccion);
      const resultado = await OrdenRepository.deleteItem(id, transaccion);
      await transaction.commit(transaccion);
      return resultado;
    } catch (err) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(err.message, 400);
    }
  }

  async function _generatePDF (html, pathFile) {
    return new Promise((resolve, reject) => {
      try {
        const options = {
          width  : '80mm',
          height : '140mm',
          border : {
            top    : '3mm',
            right  : '5mm',
            bottom : '0mm',
            left   : '5mm'
          },
          phantomArgs: ['--ignore-ssl-errors=yes']
        };
        pdf.create(html, options).toBuffer((err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      } catch (error) {
        reject(error.message);
      }
    });
  }

  async function generarPdfComanda (id) {
    const rootPath = config.app.host.path;
    const reporte = null;
    try {
      const _existeOrden = await OrdenRepository.findById(id);
      if (!_existeOrden) {
        throw new Error('La orden no existe.');
      }
      // const dir = config.app.host.rutaReportes;
      // const pathFile = `${dir}/${_existeOrden.numeroOrden}.pdf`;
      // try {
      //   reporte = fs.readFileSync(pathFile, { encoding: 'base64' });
      //   if (reporte) {
      //     return reporte;
      //   }
      // } catch (error) {
      //   reporte = null;
      // }
      const html = await ejs.renderFile(`${rootPath}/../../views/orden.ejs`, {
        orden: _existeOrden
      });
      // if (!fs.existsSync(dir)) fs.mkdirSync(dir);

      const respuesta = await _generatePDF(html);
      // reporte = fs.readFileSync(pathFile, { encoding: 'base64' });
      return respuesta.toString('base64');
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function buscarCliente (nit) {
    let cliente = null;
    try {
      cliente = await ClienteRepository.findOne({ nit });
      return cliente;
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  return {
    buscarCliente,
    generarPdfComanda,
    listar,
    createOrUpdate,
    deleteItem
  };
};
