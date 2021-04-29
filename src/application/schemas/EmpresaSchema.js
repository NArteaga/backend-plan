
module.exports = {
  title    : 'Empresa',
  required : [
    'razonSocial',
    'rotuloComercial',
    'parIdOrigenCapital',
    'idPaisOrigen',
    'parIdAmbitoAccion',
    'parIdTipoUnidadEconomica',
    'parIdRegimen',
    'objetoSocial'
  ],
  type       : 'object',
  properties : {
    id: {
      type: 'number'
    },
    razonSocial: {
      type: 'string'
    },
    rotuloComercial: {
      type: 'string'
    },
    sigla: {
      type: 'string'
    },
    nit: {
      type: 'string'
    },
    matriculaComercio: {
      type: 'string'
    },
    idPersona: {
      type: 'number'
    },
    parIdOrigenCapital: {
      type: 'number'
    },
    idPaisOrigen: {
      type: 'number'
    },
    parIdAmbitoAccion: {
      type: 'number'
    },
    parIdTipoUnidadEconomica: {
      type: 'number'
    },
    parIdRegimen: {
      type: 'number'
    },
    idDependenciaAdministrativa: {
      type: 'number'
    },
    duracionSociedad: {
      type: 'number'
    },
    paginaWeb: {
      type: 'string'
    },
    telefonos: {
      type: 'string'
    },
    correoElectronico: {
      type: 'string'
    },
    objetoSocial: {
      type: 'string'
    },
    participacionOtrasSociedades: {
      type: 'boolean'
    },
    parIdTipoConformacion: {
      type: 'number'
    },
    capitalAutorizado: {
      type: 'number'
    },
    valorNominalAccion: {
      type: 'number'
    },
    valorCuota: {
      type: 'number'
    },
    totalNumeroAcciones: {
      type: 'number'
    },
    totalCapitalSuscrito: {
      type: 'number'
    },
    totalCapitalPagado: {
      type: 'number'
    },
    totalParticipacionPorcentual: {
      type: 'number'
    },
    totalNumeroCuotas: {
      type: 'number'
    },
    totalAporteCapital: {
      type: 'number'
    },
    estado: {
      type: 'string'
    }
  }
};
