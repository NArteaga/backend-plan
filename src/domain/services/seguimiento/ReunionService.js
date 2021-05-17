'use strict';

const debug = require('debug')('app:service:auth');
const { app } = require('../../../common/config');
const { ErrorApp } = require('../../lib/error');
const moment = require('moment');
const ejs = require('ejs');
const pdf = require('html-pdf');

module.exports = function reunionService (repositories, helpers, res) {
  const { ReunionRepository, ReunionTemaRepository, ReunionParticipanteRepository, CiteRepository, TareaRepository, transaction } = repositories;
  const { FechaHelper } = helpers;

  async function findAll (params) {
    try {
      const parametros = await ReunionRepository.findAll(params);
      return parametros;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    let reunion;
    let transaccion;
    try {
      console.log('==============================_ANTES_==============================');
      console.log(data);
      console.log('==============================_ANTES_==============================');
      transaccion = await transaction.create();

      data.fechaReunion = FechaHelper.formatearFecha(data.fechaReunion);

      console.log('==============================_DESPUES_==============================');
      console.log(data, new Date());
      console.log('==============================_DESPUES_==============================');

      const citeActual = await CiteRepository.findOne({ idEntidad: data.idEntidad });
      let cite = null;

      if (citeActual) {
        const siguienteCorrelativo = citeActual.correlativo + 1;
        cite = await  CiteRepository.generarCite(citeActual.prefijo, citeActual.sufijo, siguienteCorrelativo);
        data.cite = cite.codigo;
        await CiteRepository.createOrUpdate({ id: citeActual.id, correlativo: siguienteCorrelativo }, transaccion);
      }

      reunion = await ReunionRepository.createOrUpdate(data, transaccion);

      await ReunionParticipanteRepository.deleteItemCond({ idReunion: reunion.id }, transaccion);
      if (data.participantes && Array.isArray(data.participantes)) {
        for (const participante of data.participantes) {
          await ReunionParticipanteRepository.createOrUpdate({
            idUsuario   : participante,
            idReunion   : reunion.id,
            userCreated : data.userCreated || data.userUpdated
          }, transaccion);
        }
      }

      await transaction.commit(transaccion);
      return reunion;
    } catch (error) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(error.message, 400);
    }
  }

  async function deleteItem (id) {
    debug('Eliminando rol', id);
    try {
      const resultado = await ReunionRepository.deleteItem(id);
      return resultado;
    } catch (err) {
      debug(err);
      throw new ErrorApp(err.message, 400);
    }
  }

  async function _generatePDF (html, width = '216mm', height = '279mm') {
    return new Promise((resolve, reject) => {
      try {
        const options = {
          width  : width,
          height : height,
          border : {
            top    : '15mm',
            right  : '20mm',
            bottom : '15mm',
            left   : '30mm'
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

  async function reporteReunion (id) {
    const rootPath = app.path;
    try {
      const _existeReunion = await ReunionRepository.findOne({ id });
      if (!_existeReunion) {
        throw new Error('La reunion no existe.');
      }

      const fechaInicioConcluidos = moment(_existeReunion.fechaReunion, 'YYYY-MM-DD').subtract(8, 'days');
      const fechaFinProgramados = moment(_existeReunion.fechaReunion, 'YYYY-MM-DD').add(7, 'days');

      const tareasConcluidas = await TareaRepository.findAll({ finalizado: true, fechaIni: fechaInicioConcluidos, fechaFin: _existeReunion.fechaReunion });
      const tareasProgramadas = await TareaRepository.findAll({ finalizado: false, fechaIni: _existeReunion.fechaReunion, fechaFin: fechaFinProgramados });
      _existeReunion.tareasConcluidas = tareasConcluidas.rows;
      for (const tareaProgramada of tareasProgramadas.rows) {
        const fecha = moment(tareaProgramada.fechaFinalizacion, 'DD-MM-YYYY hh:mm:ss').format('DD-MM-YYYY');
        tareaProgramada.fechaFinalizacion = fecha;
      }

      _existeReunion.tareasProgramadas = tareasProgramadas.rows;
      _existeReunion.fechaReunion = moment(_existeReunion.fechaReunion).format('DD-MM-YYYY');
      const html = await ejs.renderFile(`${rootPath}/../../views/reunion.ejs`, {
        reunion: _existeReunion
      });
      const respuesta = await _generatePDF(html);
      return respuesta.toString('base64');
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  return {
    reporteReunion,
    findAll,
    createOrUpdate,
    deleteItem
  };
};
