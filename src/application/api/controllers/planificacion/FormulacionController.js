'use strict';

const debug = require('debug')('app:controller:auth');
const { Respuesta } = require('../../../lib/respuesta');
const { config } = require('../../../../common');
const fs = require('fs');
const path = require('path');
const { Finalizado, HttpCodes } = require('../../../lib/globals');
// const AreaService = require('../../../../domain/services/system/AreaService');

module.exports = function setupFormulacionController (services) {
  const {
    FormulacionService,
    FormulacionValidacionesService,
    OperacionService,
    AprobacionDocumentosService,
    EstructuraService,
    TechoPresupuestarioService,
    PresupuestoService,
    AreaService,
    GestionService
  } = services;

  async function findAll (req, res) {
    try {
      const respuesta = await FormulacionService.findAll(req.query);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function mostrar (req, res) {
    try {
      debug('Recuperando modulos');
      const respuesta = await FormulacionService.findOne({ id: req.params.id });
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function crear (req, res) {
    try {
      const datos = req.body;
      datos.userCreated = req.user.idUsuario;
      const respuesta = await FormulacionService.createOrUpdate(datos);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function actualizar (req, res) {
    try {
      const datos = req.body;
      datos._user_updated = req.user.idUsuario;
      datos.id = req.params.id;
      const respuesta = await FormulacionService.createOrUpdate(datos);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function enviar (req, res) {
    try {
      const formulacion = await FormulacionService.findOne({ id: req.params.id });
      if(formulacion.etapa != 'OBSERVADO'){
        const ahora = Date.now()
        const [day, month, year] = formulacion.fechaFin.split('/')
        const fin = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), 23, 59, 59, 999).getTime()
        const tiempoRestante = fin-ahora
        
        const tiempo = {
          dias: Math.floor(tiempoRestante / (1000 * 60 * 60 * 24)),
          horas: Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((tiempoRestante % (1000 * 60)) / 1000)
        }
  
        if(tiempo.minutos<0 && tiempo.segundos<0){
          throw new Error(`Fuera de plazo, fecha limite ${formulacion.fechaFin} 23:59:59, comuniquese con la Direccion de Planificacion`);
        }
      }
      // validacion de al menos una estructura de ultimo nivel
      const ultimaEstructura = await EstructuraService.ultimaEstructura({ gestion: formulacion.gestion.gestion });
      const cantidadOperaciones = await OperacionService.cantidadOperaciones({
        idUnidadOrganizacional : formulacion.idUnidadOrganizacional,
        idEstructura           : ultimaEstructura.id
      });

      if (cantidadOperaciones < 1) {
        throw new Error(`La Formulacion debe tener al menos un registro de ${ultimaEstructura.nombre}`);
      }
      // validacion de techo presupuestario asignado
      const montoTecho = await TechoPresupuestarioService.sumarMonto({
        idUnidadOrganizacional : formulacion.idUnidadOrganizacional,
        idGestion              : formulacion.gestion.id
      });

      const montoAsignado = await PresupuestoService.sumarMonto({
        idUnidadOrganizacional : formulacion.idUnidadOrganizacional,
        idGestion              : formulacion.gestion.id
      });

      const monstoSinAsignar = montoTecho - montoAsignado;

      if (monstoSinAsignar > 0) {
        throw new Error(`Falta la asignacion de ${monstoSinAsignar} Bs del techo presupuestario`);
      }

      const datos = {
        id            : req.params.id,
        etapa         : 'POR REVISAR',
        fechaElaboracion : new Date(),
        _user_updated : req.user.idUsuario,
        observacion   : null
      };

      const area = await AreaService.findOne({ id: formulacion.idUnidadOrganizacional });
      const aprobadores = area.configuracion.filter(e=>e.aprobacion)
      
      if(aprobadores.length<1){
        throw new Error(`Primero debes configurar usuarios aprobadores`);
      }

      if (datos.etapa === 'POR REVISAR') {
        const usuarios = area.configuracion.filter(e => e.revision).map(e => ({
          idUsuario     : e.idUsuario,
          idFormulacion : formulacion.id,
          tipo          : 'REVISOR',
          cargo         : e.cargo,
          userCreated   : req.user.idUsuario
        })) || [];
        usuarios.unshift({
          idUsuario       : req.user.idUsuario,
          idFormulacion   : formulacion.id,
          tipo            : 'ELABORADOR',
          aceptado        : true,
          fechaValidacion : new Date(),
          userCreated     : req.user.idUsuario
        });
        await FormulacionValidacionesService.createOrUpdate(usuarios);
      }

      const respuesta = await FormulacionService.createOrUpdate(datos);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function eliminar (req, res) {
    try {
      const respuesta = await FormulacionService.eliminar(req.params.id);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function firmar (req, res) {
    try {
      const { fileStoragePath } = config.app;
      const formulacion = await FormulacionService.findOne({ id: req.params.id });
      const nombreArchivo = `/poa/poa-ppto/${formulacion.idUnidadOrganizacional}-${formulacion.gestion.gestion}.pdf`;
      const pathFile = `${fileStoragePath}${nombreArchivo}`;
      if (!fs.existsSync(pathFile)) {
        await OperacionService.documentoPoa({ idUnidadOrganizacional: formulacion.idUnidadOrganizacional, gestion: formulacion.gestion.gestion });
      }
      const aprobacion = await AprobacionDocumentosService.registroSolicitudAprobacion({
        tokenSistema  : req.user.token,
        idUsuario     : req.user.idUsuario,
        nombreArchivo,
        descripcion   : 'FORMULACION POA 2022',
        idFormulacion : req.params.id
      });
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, aprobacion));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function poaPdf (req, res) {
    try {
      const { fileStoragePath } = config.app;
      const formulacion = await FormulacionService.findOne({ id: req.params.id });
      const contenidoBase64 =  fs.readFileSync(path.resolve(`${fileStoragePath}/poa/poa-ppto/${formulacion.idUnidadOrganizacional}-${formulacion.gestion.gestion}.pdf`), { encoding: 'base64' });
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, contenidoBase64));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function observar (req, res) {
    try {
      let formulacion = await FormulacionService.findOne({ id: req.params.id });
      await FormulacionValidacionesService.eliminarValidaciones({ idFormulacion: formulacion.id, userDeleted:req.user.idUsuario });
      formulacion = await FormulacionService.createOrUpdate({
        id            : formulacion.id,
        etapa         : 'OBSERVADO',
        observacion   : req.body.observacion,
        _user_updated : req.user.idUsuario
      });
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, formulacion));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function uploadAdjunto (req, res) {
    try {
      let ruta = config.app?.formulacionArchivoAdjunto || `./files/poa/poa-ppto/`;
      let nombre = '';

      const { gestion, idUnidadOrganizacional } = req.params;
      let resp = await GestionService.findAll({ gestion })
      resp = resp.rows[0];
      resp = await FormulacionService.findAll({ idGestion: resp.id, idUnidadOrganizacional });
      resp = resp.rows[0];

      if (resp?.id && req.files?.archivo?.mv) {
        if (req.body.nombre) {
          nombre = `${resp.id}-${req.body.nombre}`
        } else {
          nombre = `${resp.id}-${req.files.archivo.name}`
        }
        await req.files.archivo.mv(`${ruta}/${nombre}`)
      } else {
        throw new Error('Formulación no encontrado')
      }

      const data = {
        id: resp.id,
        archivoAdjunto: nombre
      }
      const respuesta = await  FormulacionService.createOrUpdate(data)
      resp = {
        id: respuesta.id,
        archivoAdjunto: respuesta.archivoAdjunto,
      }
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, resp));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function downloadAdjunto (req, res) {
    try {
      let ruta = config.app?.formulacionArchivoAdjunto || `./files/poa/poa-ppto/`;
      const { gestion, idUnidadOrganizacional } = req.params;
      let resp = await GestionService.findAll({ gestion })
      resp = resp.rows[0];
      resp = await FormulacionService.findAll({ idGestion: resp.id, idUnidadOrganizacional });
      resp = resp.rows[0];
      if (resp.archivoAdjunto) {
        ruta = `${ruta}/${resp.archivoAdjunto}`
      } else {
        return res.status(200).send(null);
      }
      if (!fs.existsSync(ruta)) {
        throw new Error(`Error al descargar el archivo`)
      }
      return res.download(ruta);
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    mostrar,
    crear,
    actualizar,
    enviar,
    findAll,
    eliminar,
    firmar,
    poaPdf,
    uploadAdjunto,
    downloadAdjunto,
    observar
  };
};
