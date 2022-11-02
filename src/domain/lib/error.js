// const Logs = require('app-logs');
const log4js = require('log4js');
const { config, errors } = require('../../common');
const { logsConfig } = config.app;
log4js.configure({
  appenders: {
    app: { type: 'file', filename: logsConfig.path }
  },
  categories: { default: { appenders: ['app'], level: logsConfig.level } }
});
class ErrorApp extends Error {
  constructor (errorMessage, httpCode = 400, name = 'ErrorAplicacion', log = true, errorCode = 1) {
    super(errorMessage);
    this.name = name;
    this.message = errorMessage || 'Ha ocurrido un error';
    this.codigoError = errorCode || 0;
    this.httpCode = httpCode;
    this.stack = (new Error(errorMessage)).stack;
    if (log) {
      this.guardarLogs();
    }
  }

  async guardarLogs () {
    const logger = log4js.getLogger();
    // const logs = await Logs(config.db).catch(errors.handleFatalError);
    switch (this.httpCode) {
      case 400:
        logger.warn(this.message, this.name, `${this.httpCode} ${this.stack}`);
        break;
      case 500:
        logger.error(this.message, this.name, `${this.httpCode} ${this.stack}`);
        break;
    }
  }
}
module.exports = { ErrorApp };
