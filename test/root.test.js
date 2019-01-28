const request = require('supertest');
const app = require('../src');

test.only('root route', async () => {
  const response = await request(app.callback()).get('/');

  expect(response).toBeDefined();
});
