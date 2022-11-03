'use strict';
const debug = require('debug')('app:controller:REPORTE');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');
const { Parser } = require('json2csv');

module.exports = function setupRFSolicitudController (services) {
  const { RFSolicitudService } = services;

  async function listar (req, res) {
    try {
      // List all registers by user entity
      req.query.entity = req.user.idEntidad;
      const respuesta = await RFSolicitudService.listar(req.query);
      return res
        .status(200)
        .send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res
        .status(error.httpCode || HttpCodes.userError)
        .json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function findOne (req, res) {
    try {
      const respuesta = await RFSolicitudService.findOne({
        id        : req.params.id,
        entidadId : req.user.idEntidad
      });
      return res
        .status(200)
        .send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res
        .status(error.httpCode || HttpCodes.userError)
        .json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function crear (req, res) {
    try {
      const data = req.body;
      debug('creando solicitud');
      data.userCreated = req.user.idUsuario; // corregir
      // Overwrite Entidad and fechaSolicitud
      data.entidadId = req.user.idEntidad;
      data.fechaSolicitud = new Date();
      if (!['INICIO', 'PENDIENTE'].includes(data.estado)) {
        throw new Error(
          'Solo puede crear la solicitud en estado INICIO y PENDIENTE'
        );
      }
      const respuesta = await RFSolicitudService.createOrUpdate(data);
      return res
        .status(200)
        .send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res
        .status(error.httpCode || HttpCodes.userError)
        .json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function actualizar (req, res) {
    try {
      debug('actualizando solicitud');
      const data = req.body;
      data.id = req.params.id;

      // Update validation by Entity
      const solicitud = await RFSolicitudService.findOne({
        id        : req.params.id,
        entidadId : req.user.idEntidad
      });
      if (!solicitud) {
        throw new Error('No tiene permisos para editar este registro');
      }
      if (!['INICIO'].includes(solicitud.estado)) {
        throw new Error('No puede editar este registro');
      }
      // Delete fechaSolicitud from params to avoid save in new updates
      delete data.fechaSolicitud;
      data._user_updated = req.user.id;
      await RFSolicitudService.createOrUpdate(data);
      return res
        .status(200)
        .send(new Respuesta('OK', Finalizado.OK, solicitud));
    } catch (error) {
      return res
        .status(error.httpCode || HttpCodes.userError)
        .json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function enviar (req, res) {
    try {
      debug('enviar solicitud');

      // Update validation by Entity
      const solicitud = await RFSolicitudService.findOne({
        id        : req.params.id,
        entidadId : req.user.idEntidad
      });
      if (!solicitud) {
        throw new Error('No tiene permisos para editar este registro');
      }
      if (!['INICIO'].includes(solicitud.estado)) {
        throw new Error('No puede editar este registro');
      }
      await RFSolicitudService.createOrUpdate({
        id            : req.params.id,
        entidadId     : req.user.idEntidad,
        estado        : 'PENDIENTE',
        _user_updated : req.user.id
      });
      return res
        .status(200)
        .send(new Respuesta('OK', Finalizado.OK, solicitud));
    } catch (error) {
      return res
        .status(error.httpCode || HttpCodes.userError)
        .json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function eliminar (req, res) {
    try {
      debug('Eliminando solicitud');
      const solicitud = await RFSolicitudService.findOne({
        id        : req.params.id,
        entidadId : req.user.idEntidad
      });
      if (!solicitud) {
        throw new Error('No tiene permisos para eliminar esta solicitud');
      }
      if (!['INICIO'].includes(solicitud.estado)) {
        throw new Error('No puede eliminar esta solicitud');
      }
      const respuesta = await RFSolicitudService.eliminar({
        id        : req.params.id,
        entidadId : req.user.idEntidad
      });
      return res
        .status(200)
        .send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res
        .status(error.httpCode || HttpCodes.userError)
        .json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function listarEnAprobacion (req, res) {
    try {
      req.query.notInEstado = ['INICIO'];
      const respuesta = await RFSolicitudService.listar(req.query);
      return res
        .status(200)
        .send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res
        .status(error.httpCode || HttpCodes.userError)
        .json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function findOneEnAprobacion (req, res) {
    try {
      const data = { id: req.params.id };
      const respuesta = await RFSolicitudService.findOne(data);
      return res
        .status(200)
        .send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res
        .status(error.httpCode || HttpCodes.userError)
        .json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function crearCertificado (req, res) {
    try {
      debug('Recuperando modulos');
      const respuesta = await RFSolicitudService.generarCertificado({
        idSolicitud: req.params.id
      });
      return res
        .status(200)
        .send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res
        .status(error.httpCode || HttpCodes.userError)
        .json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function cantidades (req, res) {
    try {
      // const departamentoOficina = await armarQueryOficina(req);
      // const datos = { idOficina: req.user.idOficina, departamentoOficina };
      // const datos = {};
      // TODO: si es de la entidad que solo muestre de la entidad si es del admin mostrara de todos
      const resultado = await RFSolicitudService.cantidades();
      // return res.status(200).send(new Respuesta('OK', Finalizado.OK, resultado));

      // console.log(resultado)
      const catidadFinalReclamos = [
        {
          titulo  : 'Reclamos',
          color   : 'white',
          reporte : [
            {
              item: resultado.find((x) => x.estado === 'PENDIENTE') || {
                estado   : 'PENDIENTE',
                cantidad : 0
              },
              color: 'accent'
            },
            {
              item: resultado.find((x) => x.estado === 'CERTIFICADO') || {
                estado   : 'CERTIFICADO',
                cantidad : 0
              },
              color: 'positive'
            },
            {
              item: resultado.find((x) => x.estado === 'CANCELADO') || {
                estado   : 'CANCELADO',
                cantidad : 0
              },
              color: 'indigo'
            },
            {
              item: resultado.find((x) => x.estado === 'RECHAZADO') || {
                estado   : 'RECHAZADO',
                cantidad : 0
              },
              color: 'negative'
            }
          ]
        }
      ];
      // return catidadFinalReclamos;
      return res.send(new Respuesta('OK', Finalizado.OK, catidadFinalReclamos));
    } catch (error) {
      return res
        .status(error.httpCode || HttpCodes.userError)
        .json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function reporte (req, res) {
    try {
      const fields = ['fechaSolicitud', 'nombre', 'departamento', 'estado'];
      // req.query.entity = req.user.idEntidad;
      const respuesta = await RFSolicitudService.listar(req.query);
      const json2csvParser = new Parser({ fields });
      const csv = json2csvParser.parse(respuesta.rows);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, csv));
    } catch (error) {
      return res
        .status(error.httpCode || HttpCodes.userError)
        .json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    listar,
    findOne,
    eliminar,
    actualizar,
    enviar,
    crear,
    listarEnAprobacion,
    findOneEnAprobacion,
    crearCertificado,
    cantidades,
    reporte
  };
};
