module.exports = {
  // what
  testRegex: '\\.test\\.(js|ts)$',
  // how "compile"
  transform: {'\\.[jt]sx?$': ['babel-jest', {rootMode: 'upward'}]},
  // given most general framework extensions/etc initialised
  setupFiles: ['./global.js', './setup.selenidejs.extensions.js'],
  // given test framework configured (context setup (divers), reporting, etc)
  testEnvironment: './setup.appiumContext.env.js',
  // given tests pre- and post- conditions
  setupFilesAfterEnv: ['./setup.app.js'],
  // etc...
  testTimeout: 90000,
  verbose: true,
  bail: 1, // stop test run on 1st test failure
  maxWorkers: 1,
}
