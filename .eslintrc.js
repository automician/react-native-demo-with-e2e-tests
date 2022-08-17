module.exports = {
  plugins: ['jest'],
  root: true,
  extends: '@react-native-community',
  env: {
    'jest/globals': true,
  },
  globals: {
    globalThis: 'writable',
  },
  rules: {
    semi: ['error', 'never'],
  },
}
