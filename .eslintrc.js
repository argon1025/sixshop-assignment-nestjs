module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // NOTE: nestjs환경에서 비활성화 해야하는 규칙
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    "import/order": ["error", {
      "newlines-between": "always",
      "groups": ['builtin', 'external', 'type'],
      "pathGroups": [
        {
          "pattern": "@nestjs/**",
          "group": "builtin",
        },
        {
          "pattern": "@prisma/**",
          "group": "builtin",
        },
        {
          "pattern": "{.,..}/**/*.controller",
          "group": "external",
        },
        {
          "pattern": "{.,..}/**/*.service",
          "group": "external",
        },
        {
          "pattern": "{.,..}/**/*.module",
          "group": "external",
        },
        {
          "pattern": "**/type/**",
          "group": "type",
        },
        {
          "pattern": "**/error-message/**",
          "group": "type",
        },
        {
          "pattern": "**/dto/**",
          "group": "type",
        },
      ],
      "alphabetize": {
        "order": 'asc',
        "caseInsensitive": true,
      },
      "pathGroupsExcludedImportTypes": ["type"]
    }]
  },
};
