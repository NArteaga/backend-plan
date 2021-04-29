'use strict';

const debug = require('debug')('app:service:persona');
const { config } = require('../../../common');
const Service = require('../Service');

module.exports = function personaService (repositories, helpers, res) {
  const { PersonaRepository, Iop } = repositories;
  const { FechaHelper } = helpers;

  async function contrastacion (persona, tipo = 1) {
    let data = {
      numero_documento : persona.nro_documento,
      fecha_nacimiento : persona.fecha_nacimiento,
      primer_apellido  : persona.primer_apellido,
      segundo_apellido : persona.segundo_apellido,
      nombres          : persona.nombres
    };
    if (typeof data.numero_documento === 'string' && data.numero_documento.split('-').length > 1) {
      const doc = data.numero_documento.split('-');
      data.numero_documento = doc[0];
      data.complemento = doc[1];
    }
    if (typeof data.fecha_nacimiento === 'string' && data.fecha_nacimiento.split('-').length > 1) {
      const fechaArray = data.fecha_nacimiento.split('-');
      data.fecha_nacimiento = fechaArray[2] + '/' + fechaArray[1] + '/' + fechaArray[0];
    }
    if (persona.segundo_apellido) {
      data.segundo_apellido = persona.segundo_apellido;
    }
    const result = await Iop.segip.contrastacion(data, tipo);

    console.log('RESULTADO CONTRASTACION: ', result);
    if (result.warning) {
      data = {
        data   : result.warning,
        estado : 'OBSERVADO_SEGIP'
      };
    } else if (result.error) {
      data = {
        data   : result.error,
        estado : 'NO_EXISTE_SEGIP'
      };
    } else {
      const message = [];
      const keys = [
        { value: 'NumeroDocumento', text: 'Número de documento' },
        { value: 'Nombres', text: 'Nombres' },
        { value: 'PrimerApellido', text: 'Primer apellido' },
        { value: 'SegundoApellido', text: 'Segundo apellido' },
        { value: 'FechaNacimiento', text: 'Fecha de nacimiento' }
      ];
      if (data.complemento) {
        keys.push({ value: 'Complemento', text: 'Complemento' });
      }
      for (const i in keys) {
        if (result[keys[i].value] !== '') {
          if (result[keys[i].value] === 0) {
            message.push(`${keys[i].text} es incorrecto`);
          } else if (result[keys[i].value] === 2) {
            message.push(`${keys[i].text} no se pudo verificar esta información`);
          }
        }
      }
      data = {
        data   : message.join(', '),
        estado : 'VERIFICADO_SEGIP'
      };
    }
    console.log('RESPUESTA CONTRASTACIÓN ======================', data);
    return data;
  }

  async function verificaContrastacion (persona) {
    let numeroDocumento = persona.numeroDocumento;
    let verificar = false;
    let tipoDocumento = 1;
    if (persona.complemento) {
      numeroDocumento += `-${persona.complemento}`;
    }
    const personaContrastacion = {
      nro_documento    : numeroDocumento,
      nombres          : persona.nombres,
      primer_apellido  : persona.primerApellido || '--',
      segundo_apellido : persona.segundoApellido || '--',
      fecha_nacimiento : FechaHelper.formatearFecha(persona.fechaNacimiento)
    };
    if (persona.parIdTipoDocumento === config.constants.TIPO_DOCUMENTO_CI) {
      verificar = true;
    } else if (persona.parIdTipoDocumento === config.constants.TIPO_DOCUMENTO_CI_EXTRANJERIA) {
      tipoDocumento = 2;
      verificar = true;
    } else {
      throw new Error('No se permiten personas registradas con pasaporte.');
    }
    let personaBD = await PersonaRepository.findOne({
      numeroDocumento : numeroDocumento,
      nombres         : persona.nombres,
      primerApellido  : persona.primerApellido || '--',
      segundoApellido : persona.segundoApellido || '--',
      fechaNacimiento : FechaHelper.formatearFecha(persona.fechaNacimiento)
    });
    let idPersona = null;
    if (personaBD) {
      idPersona = personaBD.id;
      personaBD = {
        nro_documento    : personaBD.numeroDocumento,
        nombres          : personaBD.nombres,
        primer_apellido  : personaBD.primerApellido || '--',
        segundo_apellido : personaBD.segundoApellido || '--',
        fecha_nacimiento : personaBD.fechaNacimiento
      };
      if (personaBD.nro_documento === personaContrastacion.nro_documento &&
        personaBD.nombres === personaContrastacion.nombres &&
        personaBD.primer_apellido === personaContrastacion.primer_apellido &&
        personaBD.segundo_apellido === personaContrastacion.segundo_apellido &&
        personaBD.fecha_nacimiento === personaContrastacion.fecha_nacimiento) {
        verificar = false;
      }
    } else {
      verificar = true;
    }
    return {
      idPersona,
      verificar,
      tipoDocumento,
      personaContrastacion
    };
  }
  async function findById (id) {
    debug('Buscando persona por ID');

    return Service.findById(id, PersonaRepository, res, 'Persona');
  }

  async function find (params) {
    debug('Buscando persona por Parametros', params);

    let persona;
    try {
      if (params.fechaNacimiento) {
        params.fechaNacimiento = FechaHelper.formatearFecha(params.fechaNacimiento);
      }
      persona = await PersonaRepository.find(params);
    } catch (e) {
      return res.error(e);
    }

    if (!persona) {
      return res.warning(new Error('Persona not found'));
    }

    return res.success(persona);
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar persona');
    data.fechaNacimiento = FechaHelper.formatearFecha(data.fechaNacimiento);
    return Service.createOrUpdate(data, PersonaRepository, res, 'Persona');
  }

  async function deleteItem (id) {
    debug('Eliminando persona');

    return Service.deleteItem(id, PersonaRepository, res, 'Persona');
  }

  return {
    verificaContrastacion,
    findById,
    find,
    createOrUpdate,
    deleteItem,
    contrastacion
  };
};
