'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');
const fs = require('fs');
const ejs = require('ejs');
var pdf = require('html-pdf');

module.exports = function reporteService (repositories, helpers, res) {
  const { ReporteRepository } = repositories;
  const { FechaHelper } = helpers;

  async function ingresos (params) {
    try {
      const parametros = await ReporteRepository.ganancias(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function productosVendidos (params) {
    try {
      const parametros = await ReporteRepository.productos(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function ventas (params) {
    try {
      const parametros = await ReporteRepository.ingresos(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    ingresos,
    productosVendidos,
    ventas
  };
};
