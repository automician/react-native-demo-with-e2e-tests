module.exports = {
  testEnvironment: 'node',
  testTimeout: 90000,
  testRegex: '\\.test\\.(js|ts)$',
  verbose: true,
  setupFiles: ['./global.js', './setup.selenidejs.extensions.js'],
  setupFilesAfterEnv: ['./setup.appium.js'],
  bail: 1,
  maxWorkers: 1,
}
