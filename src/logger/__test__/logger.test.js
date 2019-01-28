const logger = require('../index');

test('Logger Test', () => {
  logger.info('tesst');
  expect(true).toBe(true);
});
