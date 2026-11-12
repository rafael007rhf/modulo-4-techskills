const { createDefaultPreset } = require('ts-jest');

/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  transform: createDefaultPreset().transform,
  testMatch: ['<rootDir>/src/__tests__/**/*.spec.ts'],
  setupFilesAfterEnv: ['<rootDir>/scripts/garantir-assercoes.cjs'],
  collectCoverageFrom: ['src/**/*.ts', '!src/__tests__/**', '!src/server.ts'],
  coverageReporters: ['text', 'json', 'json-summary', 'lcov'],
  coverageThreshold: {
    global: { statements: 80, branches: 70, functions: 80, lines: 80 }
  }
};
