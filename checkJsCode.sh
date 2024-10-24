#!/bin/bash

FOLDER="node_modules"

if [ ! -d $FOLDER ]; then
    npm install eslint --save-dev
    echo "module.exports = [
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
];;" >> eslint.config.js 
    echo "package.json" >> .gitignore
    echo "package-lock.json" >> .gitignore
    echo "node-modules/" >> .gitignore
    echo "eslint.config.js" >> .gitignore
fi

OUTPUT=$(npx eslint 'scripts/script.js')

if [ -z "$OUTPUT" ]; then 
    git add .
    git commit -m $
    git push
else
    echo "There were problems with the code style."
    echo "$OUTPUT"
    echo  "Please fix this before committing."
fi