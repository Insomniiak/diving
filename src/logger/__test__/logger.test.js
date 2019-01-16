const logger = require('../index');

test('Logger Test', () => {
  logger.p_jsonFormatter({ test: 'testing' });
  expect(true).toBe(true);
});
