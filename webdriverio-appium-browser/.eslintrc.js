module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier', 'wdio'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {},
    requireConfigFile: false
  },
  rules: {
    'constructor-super': 'error',
		'for-direction': 'error',
		'getter-return': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-const-assign': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-pattern': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-fallthrough': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-misleading-character-class': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-new-symbol': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-self-assign': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-this-before-super': 'error',
		'no-undef': 'off',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-labels': 'error',
		'no-useless-catch': 'error',
		'no-useless-escape': 'error',
		'no-with': 'error',
		'require-atomic-updates': 'error',
		'require-yield': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'default-param-last': 'error',
		'dot-notation': 'error',
		'func-names': 'error',
		'guard-for-in': 'error',
		'max-params': ['error', 12],
		'newline-before-return': 'error',
		'no-empty-function': 'warn',
		'no-trailing-spaces': 'error',
		'no-use-before-define': 'error',
		'no-useless-concat': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-unused-vars': 'warn',
		'no-var': 'error',
		'prefer-const': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-destructuring': 'error',
		'quotes': ['error', 'single', { 'avoidEscape': true }],
		'rest-spread-spacing': 'error',
		'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true }],
		'arrow-spacing': 'error',
		'block-spacing': 'error',
		'semi-spacing': 'error',
		'key-spacing': 'error',
		'comma-spacing': 'error',
		'keyword-spacing': 'error',
		'semi': ['error', 'never'],
		'vars-on-top': 'error',
		'no-continue': 'error',
		'comma-dangle': ['error', 'never']
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  }
}
