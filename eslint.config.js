export default [
    {
      ignores: ['node_modules/**']
    },
    {
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
      },
      rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'double'],
        'max-lines-per-function': ['error', { max: 14, skipBlankLines: true, skipComments: true }],
        'space-before-blocks': ['error', 'always']
      }
    }
  ];
  