module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'tailwindcss'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:tailwindcss/recommended',
      'prettier'
    ],
    rules: {
      // tus reglas personalizadas aquí
      'react/react-in-jsx-scope': 'off', // porque Vite ya no lo necesita
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }