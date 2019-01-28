require('dotenv').config();
const Koa = require('koa');
const morgan = require('koa-morgan');
const Router = require('koa-router');
const logger = require('./logger');

const port = process.env.NODE_PORT || 3000;
const app = new Koa();
const router = new Router();

app.use(morgan('dev'));

/*
knex('User').insert({ Permissions: ['stestast', 'done', 'done'], Info: {} })
  .then(() => {
    logger.info('inser');
  })
  .catch((err) => {
    logger.info(`ERRR: ${err}`);
  });
*/

// response
app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.on('error', (err) => {
  logger.error(err);
});

app.use(router.routes());

module.exports = app;

if (process.env.NODE_ENV !== 'test') {
  app.listen(port);
}
logger.info(`Server running on port ${port}`);
