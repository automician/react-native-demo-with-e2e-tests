module.exports = {
  testEnvironment: 'node',
  testTimeout: 90000,
  testRegex: '\\.test\\.(js|ts)$',
  verbose: true,
  setupFilesAfterEnv: ['./setup.appium.js'],
  bail: 1,
  maxWorkers: 1,
}
