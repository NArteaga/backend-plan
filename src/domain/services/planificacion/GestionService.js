'use strict';

const { ErrorApp } = require('../../lib/error');

module.exports = function gestionService (repositories, helpers, res) {
  const { GestionRepository, FormulacionRepository, EntidadRepository } = repositories;

  async function findAll (params) {
    try {
      const gestion = await GestionRepository.findAll(params);
      return gestion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const gestion = await GestionRepository.findOne(params);
      if (!gestion) {
        throw new Error('El gestion no existe');
      }
      return gestion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (datos) {
    try {
      const gestion = await GestionRepository.createOrUpdate(datos);
      if (datos.etapa) {
        if (gestion.etapa === 'FORMULACION' || gestion.etapa === 'SEGUIMIENTO') {
          const formulaciones = await FormulacionRepository.findAll({ tipo: gestion.etapa, idGestion: gestion.id });
          if (formulaciones.count > 0) {
            const data = {
              fechaInicio   : datos.fechaInicio,
              fechaFin      : datos.fechaFin,
              idSeguimiento : datos.idSeguimiento
            };

            // actualizamos formulaciones
            for (const formulacion of formulaciones.rows) {
              data.id = formulacion.id;
              await FormulacionRepository.createOrUpdate(data);
            }
          } else {
            // crear por cada unidad organizacional con tipo
            const Entidades = await EntidadRepository.findAll();
            for (const entidad of Entidades.rows) {
              const data = {
                idEntidad     : entidad.id,
                idGestion     : gestion.id,
                idSeguimiento : datos.idSeguimiento,
                tipo          : datos.etapa,
                fechaInicio   : datos.fechaInicio,
                fechaFin      : datos.fechaFin,
                userCreated   : gestion.userCreated,
                estado        : 'ACTIVO'
              };
              await FormulacionRepository.createOrUpdate(data);
            }
          }
        }
      }
      return gestion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function validarActivo (id) {
    const gestiones = await GestionRepository.findAll({ ejecutando: true });
    console.log(gestiones);
    if (gestiones.count > 1) throw new Error('Solo puede tener una gestión en ejecución a la vez.');
    if (gestiones.count === 1) {
      const gestion = await GestionRepository.findOne({ id });
      if (gestiones.rows[0].id !== gestion.id) throw new Error('Solo puede tener una gestión en ejecución activa a la vez.');
    }
  }

  async function eliminar (id) {
    try {
      const gestion = await GestionRepository.deleteItem(id);
      return gestion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function activarInactivar (id, datos) {
    try {
      if (datos.ejecutando) await validarActivo(id);
      const data = {
        id,
        estado        : datos.estado,
        ejecutando    : datos.ejecutando,
        _user_updated : datos.idUsuario
      };
      const gestion = await GestionRepository.createOrUpdate(data);
      return gestion;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    findOne,
    eliminar,
    createOrUpdate,
    findAll,
    activarInactivar
  };
};
