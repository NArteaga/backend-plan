'use strict';

const debug = require('debug')('apostilla:correo');

const correoConfig = {
  origen    : process.env.EMAIL_SENDER || 'info@agetic.gob.bo',
  host      : process.env.EMAIL_HOST || 'smtp.agetic.gob.bo', // localhost en el test o prod
  port      : process.env.EMAIL_PORT || 587, // 25 en el test o prod
  secure    : false,
  ignoreTLS : false,
  auth      : {
    user : '<unusuario@agetic.gob.bo>', // Obligatorio para desarrollo
    pass : '<password>' // Obligatorio para desarrollo
  },
  tls: {
    rejectUnauthorized: false
  },
  logging: s => debug(s)
};

module.exports = correoConfig;
