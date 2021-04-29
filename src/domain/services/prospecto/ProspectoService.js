'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');
const fs = require('fs');
const pdf = require('html-pdf');

module.exports = function parametroService (repositories, helpers, res) {
  const { UsuarioRepository, RolUsuarioRepository } = repositories;

  async function listar (params) {
    try {
      params.rol = 'PROSPECTO';
      const parametros = await UsuarioRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      if (datos.superior.celular) {
        const existeUsuario = await UsuarioRepository.findOne({ celular: datos.superior.celular });
        let idUsuario = null;
        if (!existeUsuario) {
          throw new Error('El codigo de referido no existe');
        }
        idUsuario = existeUsuario.id;
        datos.idUsuario = idUsuario;
      }
      const usuarioCreado = await UsuarioRepository.createOrUpdate(datos);
      const existeRolUsuario = await RolUsuarioRepository.findOne({
        idUsuario : usuarioCreado.id,
        idRol     : config.constants.ROL_PROSPECTO
      });
      if (!existeRolUsuario) {
        await RolUsuarioRepository.createOrUpdate({
          idUsuario     : usuarioCreado.id,
          idRol         : config.constants.ROL_PROSPECTO,
          _user_created : datos._user_created
        });
      }
      return usuarioCreado;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      const parametros = await UsuarioRepository.deleteItem(id);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function generatePDF (html, pathFile) {
    return new Promise((resolve, reject) => {
      try {
        const options = {
          format : 'Letter',
          border : {
            top    : '3mm',
            right  : '5mm',
            bottom : '0mm',
            left   : '5mm'
          },
          phantomArgs: ['--ignore-ssl-errors=yes']
        };
        pdf.create(html, options).toFile(pathFile, (err, res) => {
          if (err) reject(err);
          resolve(res);
        });
      } catch (error) {
        reject(error.message);
      }
    });
  }

  function camelize (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  async function importarCsv (archivoCSV, idUsuario) {
    try {
      const dir = `${config.app.host.archivosPrivados}/${archivoCSV.name}`;
      await archivoCSV.mv(dir);
      const csv = fs.readFileSync(dir, { encoding: 'utf8' });
      const filas = csv.split('\r\n');
      const columnas = filas[0].split(';').map(x => camelize(x));
      const jsonFinal = [];
      for (let index = 1; index < filas.length; index++) {
        const elementosFila = filas[index].split(';');
        jsonFinal.push({});
        for (let j = 0; j < columnas.length; j++) {
          if (columnas[j]) {
            Object.assign(jsonFinal[index - 1], { [columnas[j]]: elementosFila[j], _user_created: idUsuario });
          }
        }
      }
      for (const prospecto of jsonFinal) {
        const referenciador = await UsuarioRepository.findOne({ celular: prospecto.referenciador });
        if (!referenciador) {
          throw new Error('El codigo de referenciador no existe');
        }
        prospecto.idUsuario = referenciador.id;
        if (prospecto.correoElectronico && prospecto.celular) {
          const existeProspecto = await UsuarioRepository.findOne({
            correoElectronico : prospecto.correoElectronico,
            celular           : prospecto.celular
          });
          if (!existeProspecto) {
            const usuarioCreado = await UsuarioRepository.createOrUpdate(prospecto);
            await RolUsuarioRepository.createOrUpdate({
              idUsuario     : usuarioCreado.id,
              idRol         : config.constants.ROL_PROSPECTO,
              _user_created : idUsuario
            });
          }
        }
      }
      return jsonFinal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    importarCsv,
    eliminar,
    createOrUpdate,
    listar
  };
};
