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
        quotes: ['error', 'backtick']
      }
    }
];