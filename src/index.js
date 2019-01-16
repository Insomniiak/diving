require('dotenv').config();
const Koa = require('koa');
const logger = require('./logger');

const app = new Koa();

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  logger.info(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response
app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.on('error', (err) => {
  logger.error(err);
});

app.listen(process.env.PORT_NODE);
logger.info(`Server running on port ${process.env.PORT_NODE}`);