const jwt = require('jsonwebtoken');
const { config } = require('../../../common');

module.exports = (permisos) => async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error('No autorizado.');
    }
    const token = authorization.split('Bearer ');
    if (!token[1]) {
      throw new Error('No se envio el token de autorizacion.');
    }
    const decoded = await jwt.verify(token[1], config.auth.secret);
    req.usuarioNumeroDocumento = decoded.user;
    req.idUsuario = decoded.id;
    req.idPersona = decoded.idPersona;
    req.idEmpresa = decoded.idEmpresa;
    if (!permisos.includes(decoded.rol)) {
      throw new Error('No tiene permisos para realizar esta accion.');
    }
    next();
  } catch (error) {
    res.status(401).json({
      finalizado : false,
      mensaje    : error.message,
      data       : null
    });
  }
};
