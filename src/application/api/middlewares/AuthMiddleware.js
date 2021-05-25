const { verify } = require('../../lib/auth');
const { config } = require('../../../common');

const HTTP_CODES = {
  OK           : 200,
  CREATED      : 201,
  BAD_REQUEST  : 400,
  UNAUTHORIZED : 401,
  FORBIDDEN    : 403
};

function mensajeExito (res, code, mensaje, datos) {
  return res.status(code || HTTP_CODES.OK).json({
    finalizado : true,
    mensaje    : mensaje || 'OK',
    datos      : datos || null
  });
}

function mensajeError (res, code, mensaje, datos) {
  return res.status(code || HTTP_CODES.BAD_REQUEST).json({
    finalizado : false,
    mensaje    : mensaje || 'ERROR',
    datos      : datos || null
  });
}

function verificarEntidad (objeto, entidadesPermitidas) {
  if (objeto.idEntidad) {
    if (!entidadesPermitidas.includes(parseInt(objeto.idEntidad))) {
      throw new Error('No tiene permitido ver datos de esta entidad.');
    }
  }
}

const AuthMiddleware = function (services) {
  const { AuthService } = services;
  function verificarToken () {
    return async function _middleware (req, res, next) {
      let data;
      let tokenRequest = null;
      try {
        if (!req.headers.authorization) {
          throw new Error('No autorizado');
        }
        tokenRequest = req.headers.authorization.replace('Bearer ', '');
        data = await verify(tokenRequest, config.auth.secret);
        req.user = data;

        // verificarEnti  dad(req.params, req.user.entidadesDependientes);
        // verificarEntidad(req.query, req.user.entidadesDependientes);
        // verificarEntidad(req.body, req.user.entidadesDependientes);

        next();
      } catch (error) {
        mensajeError(res, HTTP_CODES.UNAUTHORIZED, error.message);
      }
    };
  }

  function verificarPermisos (permisos) {
    return async function _middleware (req, res, next) {
      try {
        const consulta = {
          roles    : req.user.idRoles,
          permisos : permisos
        };
        const tienePermiso = await AuthService.verificarPermisos(consulta);
        if (!tienePermiso) {
          throw new Error('No tiene permisos para realizar esta accion.');
        }
        next();
      } catch (error) {
        mensajeError(res, HTTP_CODES.UNAUTHORIZED, error.message);
      }
    };
  }

  return {
    verificarToken,
    verificarPermisos
  };
};

module.exports = function (services) {
  return new AuthMiddleware(services);
};
