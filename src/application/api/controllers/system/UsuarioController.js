'use strict';

const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');
const { config } = require('../../../../common');
const fs = require('fs');
const path = require('path');

module.exports = function setupUsuarioController (services) {
  const { UsuarioService } = services;

  async function listar (req, res) {
    try {
      const respuesta = await UsuarioService.listarUsuarios(req.query);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function mostrar (req, res) {
    try {
      const { id } = req.params;
      const respuesta = await UsuarioService.mostrar(id);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function crear (req, res) {
    try {
      const data = req.body;
      data.userCreated = req.user.idUsuario;
      const respuesta = await UsuarioService.createOrUpdate(data);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function actualizar (req, res) {
    try {
      const data = req.body;
      data.userUpdated = req.user.idUsuario;
      data.id = req.params.id;
      const respuesta = await UsuarioService.createOrUpdate(data);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function cambiarContrasena (req, res) {
    try {
      const data = req.body;
      data.id = req.params.id;
      if (data.id.toString() !== req.user.idUsuario.toString()) {
        throw new Error('El identificacdor del usuario no corresponde al token de autenticación.');
      }
      const respuesta = await UsuarioService.cambiarContrasena(data);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function eliminar (req, res) {
    try {
      const { id } = req.params;
      const respuesta = await UsuarioService.eliminar(id);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function asignarRoles (req, res) {
    try {
      const respuesta = await UsuarioService.asignarRoles(req.body);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function uploadDocumento (req, res) {
    try {
      const dir = 'public/documento';
      const { backendUrl } = config.app;
      const archivos = req.files;
      let fileName = null;
      if (archivos.documento) {
        const ext = (archivos.documento.name.split('.').pop()).toLowerCase();
        fileName = `${req.query.idEntidad}/${req.params.id}.${ext}`;
        const pathFile = `${dir}/${fileName}`;
        let outPath = path.resolve(`${dir}`);
        if (!fs.existsSync(outPath)) fs.mkdirSync(outPath);
        outPath += `/${req.query.idEntidad}`;
        if (!fs.existsSync(outPath)) fs.mkdirSync(outPath);
        await archivos.documento.mv(pathFile);
      } else {
        return res.status(404).json(new Respuesta(
          'faltan parametros', Finalizado.FAIL));
      }

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, `${backendUrl}documento/${fileName}`));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    cambiarContrasena,
    asignarRoles,
    listar,
    mostrar,
    crear,
    actualizar,
    uploadDocumento,
    eliminar
  };
};
