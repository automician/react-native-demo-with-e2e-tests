module.exports = {
  plugins: ['jest'],
  root: true,
  extends: '@react-native-community',
  env: {
    'jest/globals': true,
  },
  rules: {
    semi: ['error', 'never'],
  },
}
