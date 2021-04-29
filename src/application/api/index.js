'use strict';

const debug = require('debug')('app:api');
const chalk = require('chalk');
const routes = require('./routes');
const { loadControllers, loadMiddlewares } = require('../lib/util');
const path = require('path');
const { verify } = require('../lib/auth');
const { config } = require('../../common');
module.exports = async function setupApi (app, services) {
  debug('Iniciando API-REST');

  // Load controllers
  const controllers = loadControllers(path.join(__dirname, 'controllers'), services);

  const middlewares = loadMiddlewares(path.join(__dirname, 'middlewares'), services);

  const { AuthMiddleware } = middlewares;

  app.use('/api/*', AuthMiddleware.verificarToken());

  // Load routes
  app.use('/api', routes(controllers, middlewares));

  app.use(function (err, req, res, nxt) {
    if (err.code === 'invalid_token') {
      res.status(403).send({
        finalizado : false,
        mensaje    : 'No autorizado',
        datos      : null
      });
    }
    if (err.code === 'permission_denied') {
      res.status(403).send({
        finalizado : false,
        mensaje    : 'No tiene permisos para realizar esta accion',
        datos      : null
      });
    }
  });
  // login Route
  console.log('🚀  ' + chalk.yellow('RUTAS: ') + chalk.redBright('AUTH'));

  app.post('/auth/login', controllers.AuthController.login);
  app.get('/auth/refresh-token', async (req, res, next) => {
    let data;
    try {
      data = await verify((req.headers.authorization || '').replace('Bearer ', ''), config.auth.secret);
      req.idUsuario = data.id;
    } catch (err) {
      console.log(err);
      return res.json({
        success : false,
        message : err.message || 'Su token de autenticación no es válido.'
      });
    }
    return next();
  }, controllers.AuthController.refreshToken);

  app.get('/public/status', (req, res, next) => {
    const date = new Date();
    return res.status(200).send({
      finalizado : true,
      mensaje    : 'Funcionando correctamente',
      datos      : {
        anio : date.getFullYear(),
        mes  : date.getMonth() + 1,
        dia  : date.getDate()
      }
    });
  });

  console.log(' -', { method: 'GET', url: '/public/status' });
  console.log(' -', { method: 'POST', url: '/auth/login' });
  console.log(' -', { method: 'POST', url: '/auth/refresh-token' });

  return app;
};
