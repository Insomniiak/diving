const StatsD = require('hot-shots');
const logger = require('../logger');

const errorFunc = (error) => {
  logger.error(`Error in socket: ${error}`);
};

const client = new StatsD({
  host: 'datadog-agent',
  globalTags: { app: 'socket-endpoint' },
  errorHandler: errorFunc,
});

client.p_errorFunc = errorFunc;
module.exports = client;
