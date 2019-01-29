require('dotenv').config();
const Koa = require('koa');
const morgan = require('koa-morgan');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const users = require('./routes/users');
const logger = require('./logger');

const port = process.env.NODE_PORT || 3000;
const app = new Koa();
const router = new Router();

app.use(bodyparser());
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
router.get('/', (ctx, next) => {
  ctx.body = 'Default Page';
  next();
});

router.use('/users', users);

app.use(router.routes());

module.exports = app;

app.on('error', (err) => {
  logger.error(err);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port);
}
logger.info(`Server running on port ${port}`);
