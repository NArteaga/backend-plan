'use strict';

const { getQuery, errorHandler, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function rolUsuarioRepository (models, Sequelize) {
  const { rol, rolUsuario } = models;
  const Op = Sequelize.Op;

  async function findOne (params = {}) {
    const query = {};
    query.where = {};
    if (params.id) {
      query.where.id = params.id;
    }
    if (params.idUsuario) {
      query.where.idUsuario = params.idUsuario;
    }

    if (params.idRol) {
      query.where.idRol = params.idRol;
    }
    const result = await rolUsuario.findOne(query);
    if (result) {
      return result.toJSON();
    }
    return null;
  }

  async function eliminarRolesAsociados (idUsuario) {
    const query = {};
    query.where = {
      idUsuario
    };
    return rolUsuario.destroy(query);
  }

  async function crearRolesAsociados (idUsuario, roles) {
    const items = [];
    let rolCiudadano = await rol.findOne({ where: { ciudadano: true } });
    rolCiudadano = rolCiudadano.toJSON();
    for (const rol of roles) {
      if (rolCiudadano.id !== rol) {
        items.push({
          idUsuario,
          idRol: rol
        });
      }
    }
    return rolUsuario.bulkCreate(items);
  }

  return {
    findOne,
    crearRolesAsociados,
    eliminarRolesAsociados,
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, rolUsuario, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, rolUsuario, t)
  };
};
