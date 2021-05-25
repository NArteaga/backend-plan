'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function reunionRepository (models, Sequelize) {
  const { reunion, usuario, tarea, entidad } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    const query = getQuery(params);
    // query.attributes = [];
    query.distinct = true;

    query.where = {};
    query.include = [
      {
        through : { attributes: [] },
        model   : usuario,
        as      : 'participantes'
      },
      {
        through : { attributes: [] },
        model   : tarea,
        as      : 'tareas'
      }
    ];

    return reunion.findAndCountAll(query);
  }

  async function findOne (params = {}) {
    const query = {};

    query.where = params;

    query.include = [
      {
        through : { attributes: [] },
        model   : usuario,
        as      : 'participantes'
      },
      {
        through : { attributes: [] },
        model   : tarea,
        as      : 'tareas'
      },
      {
        model : entidad,
        as    : 'entidad'
      }
    ];
    const result = await reunion.findOne(query);
    if (result) {
      return result.toJSON();
    }
    return null;
  }

  return {
    findAll,
    findOne,
    findById       : id => Repository.findById(id, reunion),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, reunion, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, reunion, t)
  };
};
