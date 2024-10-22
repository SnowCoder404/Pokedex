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
        quotes: ['error', 'backtick'], // Verwendung von Backticks
        'max-lines-per-function': ['error', { max: 14, skipBlankLines: true, skipComments: true }], // Maximale Anzahl von Zeilen pro Funktion
        'padding-line-between-statements': [
          'error',
          { blankLine: 'any', prev: '*', next: '*' } // Maximal 1 leere Zeile zwischen den Funktionen
        ],
        indent: ['error', 4],
        'space-before-blocks': ['error', 'always'],
        'keyword-spacing': ['error', { before: true, after: true }]
      }
    }
];  