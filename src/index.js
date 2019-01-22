require('dotenv').config();
const Koa = require('koa');
const morgan = require('koa-morgan');
const logger = require('./logger');

const port = process.env.NODE_PORT || 3000;
const app = new Koa();

app.use(morgan('dev'));

// response
app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.on('error', (err) => {
  logger.error(err);
});

app.listen(port);
logger.info(`Server running on port ${port}`);
