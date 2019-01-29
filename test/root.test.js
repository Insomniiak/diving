const request = require('supertest');
const app = require('../src');

const token = 'to determine';

describe('User test', () => {
  test('Create user basic', async () => {
    const user = {
      provider: 'manual',
      registrationInfo: {
        username: 'test@test.com',
        password: '1234',
      },
    };
    const response = await request(app.callback())
      .post('/users')
      .send(user)
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('string');
  });

  test('Get User', async () => {
    const response = await request(app.callback())
      .get('/users')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body.length).toEqual(2);
  });
});
