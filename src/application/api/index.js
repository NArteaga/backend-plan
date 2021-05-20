'use strict';

const debug = require('debug')('app:api');
const chalk = require('chalk');
const routes = require('./routes');
const { loadControllers, loadMiddlewares } = require('../lib/util');
const path = require('path');
const { verify } = require('../lib/auth');
const { config } = require('../../common');
const webpush = require('web-push');

module.exports = async function setupApi (app, services) {
  debug('Iniciando API-REST');

  // Load controllers
  const controllers = loadControllers(path.join(__dirname, 'controllers'), services);

  const middlewares = loadMiddlewares(path.join(__dirname, 'middlewares'), services);

  const { AuthMiddleware } = middlewares;
  /// para verficar con token

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

  const vapidKeys = {
    publicKey:
    'BJ5IxJBWdeqFDJTvrZ4wNRu7UY2XigDXjgiUBYEYVXDudxhEs0ReOJRBcBHsPYgZ5dyV8VjyqzbQKS8V7bUAglk',
    privateKey: 'ERIZmc5T5uWGeRxedxu92k3HnpVwy_RCnQfgek1x2Y4'
  };
  // setting our previously generated VAPID keys
  webpush.setVapidDetails(
    'mailto:vantcfanel123@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );

  app.post('/save-subscription', async (req, res, next) => {
    console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
    console.log(req.body);
    console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
    return res.json({
      success : true,
      message : 'Registro completado'
    });
  });

  const sendNotification = (subscription, dataToSend) => {
    webpush.sendNotification(subscription, dataToSend);
  };

  app.get('/send-notification', async (req, res) => {
    try {
      const { AuthService } = services;
      const { suscripcion } = await AuthService.getSubscription(1); // get subscription from your databse here.
      const params = {
        title   : 'Test title',
        message : 'Test message',
        icon    : '/api/push/icon/', // icon served by my API
        tag     : 'message-tag'
      };
      console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
      console.log(suscripcion);
      console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
      await sendNotification(suscripcion, Buffer.from(JSON.stringify(params)).toString('utf8'));
      res.json({ message: 'Mensaje Enviado' });
    } catch (error) {
      res.json({ message: 'Error al enviar notificacion' });
    }
  });

  app.get('/public/status', (req, res, next) => {
    const date = new Date();
    return res.status(200).send({
      finalizado : true,
      mensaje    : 'Funcionando correctamente',
      datos      : {
        code : Buffer.from(date.toString()).toString('base64'),
        anio : date.getFullYear(),
        mes  : date.getMonth() + 1,
        dia  : date.getDate()
      }
    });
  });

  console.log(' -', { method: 'GET', url: '/public/status' });
  console.log(' -', { method: 'POST', url: '/auth/login' });
  console.log(' -', { method: 'POST', url: '/auth/refresh-token' });
  console.log(' -', { method: 'POST', url: '/save-subscription' });

  return app;
};
