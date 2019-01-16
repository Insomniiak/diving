const metrics = require('../index');

test('test metrics', () => {
  metrics.increment('test');
  metrics.p_errorFunc('Error test');
  expect(true).toBe(true);
});

afterAll((done) => {
  metrics.close(() => {
    done();
  });
});
