const winston = require('winston');

const MESSAGE = Symbol.for('message');

const jsonFormatter = (logEntry) => {
  const base = { timestamp: new Date(), severity: logEntry.level.toUpperCase() };
  const json = Object.assign(base, logEntry);
  const logFinal = logEntry;
  logFinal[MESSAGE] = JSON.stringify(json);
  return logFinal;
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ handleExceptions: true }),
    new (winston.transports.File)({
      name: 'pokie-app',
      filename: 'pokie-app.log',
      json: true,
      level: 'info',
    }),
  ],
  format: winston.format(jsonFormatter)(),
});

logger.p_jsonFormatter = jsonFormatter;
module.exports = logger;
