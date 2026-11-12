const config = require('./jest.config');
module.exports = {
  ...config,
  testMatch: ['<rootDir>/demonstracoes/**/*.demo.ts'],
  setupFilesAfterEnv: [],
  coverageThreshold: undefined
};
