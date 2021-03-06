module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
    jquery: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'consistent-return': 'off',
  },
};
