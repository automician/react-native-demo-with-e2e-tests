module.exports = {
  testEnvironment: 'node',
  testTimeout: 90000,
  testRegex: '\\.test\\.(js|ts)$',
  transform: {'\\.[jt]sx?$': ['babel-jest', {rootMode: 'upward'}]},
  verbose: true,
  setupFiles: ['./global.js', './setup.selenidejs.extensions.js'],
  setupFilesAfterEnv: ['./setup.appium.js'],
  bail: 1,
  maxWorkers: 1,
}
