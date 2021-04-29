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
        if (req.user.idRol !== config.constants.ROL_SUPER_ADMIN) {
          req.query.idSucursal = req.user.idSucursal;
        }
        next();
      } catch (error) {
        mensajeError(res, HTTP_CODES.UNAUTHORIZED, error.message);
      }
    };
  }

  function verificarPermisos (permiso) {
    return async function _middleware (req, res, next) {
      try {
        let consulta = {};
        const [ruta, acceso] = permiso.split(':');
        consulta = {
          idUsuario : req.user.idUsuario,
          idRol     : req.user.idRol,
          ruta      : ruta,
          permiso   : { [acceso]: true }
        };
        const tienePermiso = await AuthService.verificarPermisos(consulta);
        if (!tienePermiso) {
          throw new Error('No tiene permisos para realizar esta accion.');
        }
        // console.log(`tiene permisos de --->>> ${acceso} a --->>> ${ruta}`);
        // const tieneAcceso = await AuthService.verificarHorarios(req.user.idUsuario);
        // if (!tieneAcceso) {
        //   throw new Error('No tiene acceso al sistema en este horario.');
        // }
        // console.log('tiene acceso en el horario');

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
