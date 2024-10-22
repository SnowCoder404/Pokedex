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
        indent: ['error', 4],
        'space-before-blocks': ['error', 'always'],
        'keyword-spacing': ['error', { before: true, after: true }]
      }
    }
  ];
  