const validateJS = require('validate.js');

const HTTP_CODES = {
  OK           : 200,
  CREATED      : 201,
  BAD_REQUEST  : 400,
  UNAUTHORIZED : 401,
  FORBIDDEN    : 403
};

function mensajeError (res, code, mensaje, datos) {
  return res.status(code || HTTP_CODES.BAD_REQUEST).json({
    finalizado : false,
    mensaje    : mensaje || 'ERROR',
    datos      : datos || null
  });
}

validateJS.validators.type.types.enum = function (value) {
  return ['ACTIVO', 'INACTIVO'].includes(value);
};

const SchemaMiddleware = function (services) {
  function validarSchema (schema) {
    return async function _middleware (req, res, next) {
      try {
        const respuesta = validateJS(req.body, schema);
        if (respuesta) {
          const errores = [];
          for (const key in respuesta) {
            for (const error of respuesta[key]) {
              errores.push(error);
            }
          }
          throw new Error(errores);
        }
        next();
      } catch (error) {
        mensajeError(res, HTTP_CODES.UNAUTHORIZED, error.message);
      }
    };
  }

  return {
    validarSchema
  };
};

module.exports = function (services) {
  return new SchemaMiddleware(services);
};
