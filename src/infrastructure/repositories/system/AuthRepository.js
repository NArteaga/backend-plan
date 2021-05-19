'use strict';

const Repository = require('../Repository');
const { saltRounds } = require('../../../common/config/auth');
const bcrypt = require('bcrypt');

module.exports = function authRepository (models) {
  const { auth } = models;

  function codificarContrasena (password) {
    return bcrypt.hash(password, saltRounds);
  }

  function verificarContrasena (password, hash) {
    return bcrypt.compare(password, hash);
  }

  return {
    codificarContrasena,
    verificarContrasena,
    findOne        : (params) => Repository.findOne(params, auth),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, auth, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, auth, t)
  };
};
