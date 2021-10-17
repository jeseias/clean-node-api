module.exports = {
  roots: ['<root-dir>/src'],
  collectCoverageFrom: ['<root-dir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
