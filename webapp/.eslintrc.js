module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/no-unused-vars': 'warn',
    // '@typescript-eslint/no-var-requires': 0,
    // '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'no-console': 'warn',
    'max-len': ['warn', { code: 120 }],
    /*
    'comma-dangle': ["error", {
      "functions": "never"
    }],
    */
    semi: [2, 'always'],
    // 'arrow-parens': ['error', 'always'],
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    /*
    'sort-imports': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    */
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
};
