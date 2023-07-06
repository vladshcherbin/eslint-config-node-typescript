module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base'
  ],
  ignorePatterns: ['graphql.d.ts'],
  plugins: [
    'sort-destructure-keys'
  ],
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'sort-keys': ['error', 'asc', { natural: true }]
  }
}
