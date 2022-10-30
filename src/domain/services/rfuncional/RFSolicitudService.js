"use strict";

const debug = require("debug")("app:service:auth");
const { config } = require("../../../common");
const { ErrorApp } = require("../../lib/error");
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const { createPdf } = require('../../lib/pdf');
const { rootPath, ARCHIVOS_PRIVADOS } = require('../../../common/config/app');

module.exports = function menuService(repositories, helpers, res) {
  const { RFSolicitudRepository } = repositories;
  const { FechaHelper } = helpers;

  async function listar(params) {
    try {
      const comentarios = await RFSolicitudRepository.findAll(params);
      return comentarios;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne(params) {
    try {
      const comentario = await RFSolicitudRepository.findOne(params);
      if (!comentario) {
        throw new Error("El comentario no existe");
      }
      return comentario;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate(data) {
    debug("Crear o actualizar rol");
    let menu;
    try {
      menu = await RFSolicitudRepository.createOrUpdate(data);
      return menu;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar(params) {
    try {
      const resultado = await RFSolicitudRepository.deleteItemCond(params);
      return resultado;
    } catch (err) {
      debug(err);
      throw new ErrorApp(err.message, 400);
    }
  }

  async function generarCertificado (data) {
    try {
      const solicitud = await RFSolicitudRepository.findOne({ id: data.idSolicitud });
      if (!solicitud) throw new Error('El solicitud no existe');
      if (solicitud.estado != "CERTIFICADO") throw new Error('La solicitud no esta aprobada');
      const pathFile = `${ARCHIVOS_PRIVADOS}/adjuntos/${data.idSolicitud}`;
      const logoMinisterio = fs.readFileSync(path.resolve('public/images/logoMinisterio.png'), 'base64');
      const logoVdduc = fs.readFileSync(path.resolve('public/images/logoSippase.jpeg'), 'base64');
      const html = await ejs.renderFile(path.resolve(`${rootPath}/../../views/CertificadoRedFuncional.ejs`), { logoVdduc, logoMinisterio, solicitud: solicitud });
      if (!fs.existsSync(pathFile)) {
        fs.mkdirSync(pathFile);
      }
      const finalPath = `${pathFile}/solicitud-${data.idSolicitud}.pdf`;
      await createPdf(html, { output: finalPath });
      const contenidoBase64 = fs.readFileSync(finalPath, 'base64');
      return contenidoBase64;
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function reporte(params) {
    try {
      const comentarios = await RFSolicitudRepository.findAll(params);
      return comentarios;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function cantidades (params) {
    try {
      const comentarios = await RFSolicitudRepository.cantidadSolitudesPorEntidadDepartamento(params);
      return comentarios;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    findOne,
    listar,
    createOrUpdate,
    eliminar,
    generarCertificado,
    cantidades,
  };
};
