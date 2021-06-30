module.exports = {
  extends: ['standard', 'prettier'],
  env: {
    es2021: true,
    node: true,
    browser: true,
    jest: true
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: ['standard-with-typescript', 'prettier'],
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    {
      files: ['*.tsx'],
      extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
      ],
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        'react/react-in-jsx-scope': 'off'
      },
      settings: {
        react: {
          version: 'latest'
        }
      }
    }
  ]
}
