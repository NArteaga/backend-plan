'use strict';

const Repository = require('../Repository');

module.exports = function authRepository (models) {
  const { ordenProducto } = models;

  return {
    findOne        : (params) => Repository.findOne(params, ordenProducto),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, ordenProducto, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, ordenProducto, t)
  };
};
