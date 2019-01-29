const Router = require('koa-router');
const { get, post } = require('../controllers/userControllers');

const users = new Router();

users.get('/', get);
users.post('/', post);

module.exports = users.routes();
