'use strict';

// const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');
// const ejs = require('ejs');
// const fs = require('fs');
// const path = require('path');

// const wkhtmltopdf = require('wkhtmltopdf');
/* if (process.platform === 'win32') {
  wkhtmltopdf.command = 'C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe';
} else {
  wkhtmltopdf.command = 'wkhtmltopdf';
} */

module.exports = function operacionService (repositories, helpers, res) {
  const { OperacionRepository, OperacionHistorialRepository, CronogramaRepository, EstructuraRepository, FormulacionRepository } = repositories;
  async function findAll (params) {
    try {
      const operacion = await OperacionRepository.findAll(params);
      return operacion;
    } catch (err) {
      console.log(err)
      throw new ErrorApp(err.message, 400);
    }
  }

  async function calificaciones (params) {
    try {
      const result = await OperacionRepository.calificaciones(params)
      if (!result) return null
      const data = {}
      for (const item of result) {
        if (!data[item.entidad]) data[item.entidad] = {}
        if (!data[item.entidad][item.tipo]) data[item.entidad][item.tipo] = item.calificacion
        else data[item.entidad][item.tipo] += item.calificacion
      }
      return data
    } catch (err) {
      console.log(err)
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const operacion = await OperacionRepository.findOne(params);
      if (!operacion) {
        throw new Error('La operacion no existe');
      }
      return operacion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (id) {
    try {
      console.log(id)
      const cantidadOperaciones = await OperacionRepository.countOperaciones({ idOperacionPadre: id });
      console.log(cantidadOperaciones)
      if (cantidadOperaciones > 0) {
        throw new Error('No puede eliminar el registro por que tiene dependencias');
      }
      const operacion = await OperacionRepository.findOne({ id });
      const codigo = operacion.codigo.split('.').pop();
      await OperacionRepository.deleteItem(id);
      const operacionPadre = await OperacionRepository.findOne({ id: operacion.idOperacionPadre });
      if (!operacionPadre?.nroHijasDesAsociadas?.length > 0) operacionPadre.nroHijasDesAsociadas = [parseInt(codigo)];
      else operacionPadre.nroHijasDesAsociadas.push(codigo);
      await OperacionRepository.createOrUpdate({
        id                   : operacionPadre.id,
        nroHijas             : operacionPadre.nroHijas - 1,
        nroHijasDesAsociadas : operacionPadre.nroHijasDesAsociadas
      });
      return operacion;
    } catch (err) {
      console.log(err)
      throw new ErrorApp(err.message, 400);
    }
  }

  async function activarInactivar (id, usuario) {
    try {
      const operacion = await OperacionRepository.findOne({ id: id });
      const data = {
        id,
        activo      : !operacion.activo,
        userUpdated : usuario
      };
      return await OperacionRepository.createOrUpdate(data);
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      if (datos?.id && datos?.id === datos?.idOperacionPadre) {
        throw new Error('La operación no se puede relacionar a la misma operacion');
      }
      const operacionPadre = await OperacionRepository.findOne({ id: datos.idOperacionPadre });
      if (operacionPadre && !operacionPadre?.activo) {
        throw new Error('La operación se encuentra inactiva. Por favor contactese con el administrador.');
      }
      if (datos.idEstructura) {
        const sumaPonderacion = await OperacionRepository.sumarPonderacionPorEstructura({
          idOperacionPadre : datos.idOperacionPadre || null,
          idEstructura     : datos.idEstructura,
          idEntidad        : datos.entidad.id,
          idOperacion      : datos.id || null
        });
        const totalPonderacion = sumaPonderacion + Number(datos.ponderacion);
        if (totalPonderacion > 100) {
          throw new Error(`Error: La suma de las ponderaciones es ${totalPonderacion}, debe ser menor o igual a 100`);
        }
      }
      const estructura = await EstructuraRepository.findOne({ id: datos.idEstructura });
      if (estructura?.codigo && !datos?.codigo) {
        let codigo = 0;
        if (estructura.nivel === 1) codigo = await OperacionRepository.countOperaciones({ idEstructura: estructura.id });
        else {
          codigo = operacionPadre.nroHijas + 1;
          if (operacionPadre?.nroHijasDesAsociadas?.length > 0) {
            const codigos = operacionPadre.nroHijasDesAsociadas.sort();
            codigo = codigos.shift();
          }
          await OperacionRepository.createOrUpdate({ id: operacionPadre.id, nroHijas: operacionPadre.nroHijas + 1 })
        }
        datos.codigo = `${operacionPadre.codigo}.${codigo}`;
      }
      const formulacion = await FormulacionRepository.findOne({ idEntidad: datos.entidad.id, idGestion: estructura.idGestion })
      if (!formulacion?.id) {
        throw new Error(`Error: La gestión no tiene una formulación creada en la gestión seleccionada y la entidad seleccionada`);
      }
      datos.idEntidad = datos.entidad.id;
      datos.idFormulacion = formulacion.id;
      if (datos?.id) {
        const operacion = await OperacionRepository.findOne({ id: datos.id });
        delete datos.children;
        delete datos.estructuraHija;
        await OperacionHistorialRepository.createOrUpdate({
          idOperacion    : operacion.id,
          versionInicial : operacion,
          versionFinal   : datos,
          observaciones  : ''
        });
      }
      const operacion = await OperacionRepository.createOrUpdate(datos);
      const { cronograma } = datos;
      if (cronograma) {
        for (const mes of cronograma) {
          const data = {
            ...mes,
            idOperacion: operacion.id
          };
          if (mes.id) {
            data.userUpdated = datos.userUpdated;
          } else {
            data.userCreated = datos.userCreated || datos.userUpdated;
          }
          await CronogramaRepository.createOrUpdate(data);
        }
      }
      return operacion;
    } catch (err) {
      console.log(err)
      throw new ErrorApp(err.message, 400);
    }
  }

  async function recuperarHijos (idPadre) {
    try {
      const hijos = await OperacionRepository.recuperarHijos(idPadre);
      return hijos;
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function getOperacionesPoa (data) {
    try {
      let estructura = await EstructuraRepository.ultimaEstructura({ idGestion: data.idGestion });
      const nivel = estructura.nivel;
      if (!estructura) {
        throw new Error('Aun no existen estructuras para la gestion');
      }
      const { rows } = await OperacionRepository.findAll({ idEntidad: data.idEntidad, idEstructura: estructura.id });
      let idPadres = [...new Set(rows.map(e => e.idOperacionPadre))];
      let operaciones = [...rows];
      console.log(data)
      for (let i = 1; i < nivel; i++) {
        const estructuraHija = estructura;
        const { rows: operacionesPadre } = await OperacionRepository.findIn({
          ids: idPadres,
          idsEstructura: estructura.idEstructuraPadre,
          idEntidad: data.idEntidad
        });
        if (operacionesPadre.length > 0) {
          for (const padre of operacionesPadre) {
            padre.estructuraHija = estructuraHija;
            padre.children = operaciones.filter(e => e.idOperacionPadre === padre.id) || [];
          }
          operaciones = [...operacionesPadre];
        }
        if (operaciones.length > 0) {
          idPadres = [...new Set(operaciones.map(e => e.idOperacionPadre))];
        }
        estructura =  await EstructuraRepository.findOne({ id: estructura.idEstructuraPadre });
      }
      return operaciones
    } catch (error) {
      console.log(error)
      throw new ErrorApp(error.message, 400);
    }
  }

  return {
    findAll,
    findOne,
    activarInactivar,
    getOperacionesPoa,
    calificaciones,
    createOrUpdate,
    eliminar,
    recuperarHijos
  };
};
