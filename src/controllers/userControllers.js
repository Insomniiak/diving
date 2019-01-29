const get = (ctx, next) => {
  ctx.body = { name: 'test ' };
  ctx.response.status = 200;
  next();
};

const post = (ctx, next) => {
  ctx.response.status = 200;
  next();
};

module.exports = {
  get,
  post,
};
