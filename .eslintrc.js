module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-async-promise-executor' : 'off',
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    "linebreak-style": 0,
    'vue/no-v-html': 0,
    'no-shadow': ['error', { 'allow': ['state'] }],
    'import/no-unresolved': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "import/extensions": 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': 'off',
    'max-len': ['error', { "code": 500 }],
    'no-underscore-dangle': 0,
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    }],
  },
};
