'use strict';

const { query } = require('express');
const { getQuery, errorHandler, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function usuariosRepository (models, Sequelize) {
  const Op = Sequelize.Op;
  const { usuario, rol, sucursal } = models;

  async function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'celular',
      'correoElectronico',
      'estado',
      'foto',
      'id',
      'nombres',
      'numeroDocumento',
      'primerApellido',
      'segundoApellido',
      'telefono',
      'usuario'
    ];
    query.where = {};
    const whereRol = {};

    if (params.estado) {
      query.where.estado = params.estado;
    }

    if (params.idRol) {
      query.where.idRol = params.idRol;
    }

    if (params.rol) {
      whereRol.nombre = {
        [Op.iLike]: `%${params.rol}%`
      };
    }

    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }

    if (params.numeroDocumento) {
      query.where.numeroDocumento = {
        [Op.iLike]: `%${params.numeroDocumento}%`
      };
    }

    if (params.correoElectronico) {
      query.where.correoElectronico = {
        [Op.iLike]: `%${params.correoElectronico}%`
      };
    }

    if (params.celular) {
      query.where.celular = {
        [Op.iLike]: `%${params.celular}%`
      };
    }

    query.include = [
      {
        model      : rol,
        as         : 'rol',
        attributes : ['id', 'nombre', 'descripcion'],
        where      : whereRol
      }
    ];

    const result = await usuario.findAndCountAll(query);
    return toJSON(result);
  }

  async function findOne (params = {}) {
    const query = {};
    query.attributes = [
      'id',
      'usuario',
      'nombres',
      'primerApellido',
      'segundoApellido',
      'numeroDocumento',
      'telefono',
      'celular',
      'correoElectronico',
      'foto',
      'estado'
    ];

    query.where = params;

    const result = await usuario.findOne(query);
    if (result) {
      return result.toJSON();
    }
    return null;
  }

  async function findById (id) {
    const query = {};

    query.where = {
      id,
      estado: 'ACTIVO'
    };

    const result = await usuario.findOne(query);
    if (result) {
      return result.toJSON();
    }
    return null;
  }

  async function createOrUpdate (usuarioParam, t) {
    const cond = {
      where: {
        id: usuarioParam.id || null
      }
    };

    const item = await usuario.findOne(cond);

    if (item) {
      let updated;
      try {
        if (t) {
          cond.transaction = t;
        }
        updated = await usuario.update(usuarioParam, cond);
      } catch (e) {
        errorHandler(e);
      }
      const result = updated ? await usuario.findOne(cond) : item;

      if (result) {
        return result.toJSON();
      }
      return null;
    }

    let result;
    try {
      result = await usuario.create(usuarioParam, t ? { transaction: t } : {});
    } catch (e) {
      errorHandler(e);
    }
    return result.toJSON();
  }

  async function verificarCorreoElectronico (params) {
    const query = {};
    query.where = {};
    if (params.correoElectronico) {
      query.where.correoElectronico = params.correoElectronico;
    }

    if (params.id) {
      query.where.id = {
        [Op.not]: params.id
      };
    }

    const result = await usuario.findOne(query);
    if (result) {
      return result.toJSON();
    }
    return null;
  }

  return {
    findById,
    verificarCorreoElectronico,
    findAll,
    findOne,
    createOrUpdate,
    deleteItem: (id, t) => Repository.deleteItem(id, usuario, t)
  };
};
