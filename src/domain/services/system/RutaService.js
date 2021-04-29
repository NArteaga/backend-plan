'use strict';

const debug = require('debug')('app:service:modulo');

module.exports = function menuService (repositories, helpers, res) {
  const { RutaRepository } = repositories;

  async function recuperarTodo () {
    debug(`Obteniendo rutas`);
    try {
      const items = await RutaRepository.findAll();
      // Reordenando módulos en forma de árbol
      return items;
    } catch (err) {
      throw err;
    }
  }

  return {
    recuperarTodo
  };
};
