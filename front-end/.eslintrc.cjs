require('@rushstack/eslint-config/patch/modern-module-resolution');

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/strict',
    'plugin:import/typescript',
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/friendly-locals',
    '@rushstack/eslint-config/mixins/react',
    '@rushstack/eslint-config/mixins/packlets',
    '@rushstack/eslint-config/mixins/tsdoc',
  ],
  overrides: [
    {
      files: ['*.{ts,tsx,js,jsx}'],
      parser: '@typescript-eslint/parser',
      rules: {
        /**
         * Allow `private get _propertyName()`.
         */
        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            modifiers: ['private'],
            selector: 'accessor',
          },
        ],

        /**
         * Slow rules (and not that useful.)
         */
        '@typescript-eslint/no-floating-promises': 'off',

        /**
         * Do not allow unused variables.
         */
        '@typescript-eslint/no-unused-vars': 'error',

        /**
         * Allow using variables before their definition.
         */
        '@typescript-eslint/no-use-before-define': 'off',

        /**
         * Make code easier to read by ensuring padding between some kinds of expressions.
         */
        '@typescript-eslint/padding-line-between-statements': [
          'error',
          { blankLine: 'any', next: ['expression'], prev: ['expression'] },
          {
            blankLine: 'always',
            next: '*',
            prev: [
              'const',
              'let',
              'var',
              'type',
              'interface',
              'throw',
              'block',
              'block-like',
              'class',
              'multiline-expression',
            ],
          },
          {
            blankLine: 'always',
            next: [
              'const',
              'let',
              'var',
              'type',
              'interface',
              'throw',
              'block',
              'block-like',
              'class',
              'multiline-expression',
            ],
            prev: '*',
          },
          {
            blankLine: 'any',
            next: ['singleline-const', 'singleline-let', 'singleline-var'],
            prev: ['singleline-const', 'singleline-let', 'singleline-var'],
          },
        ],

        /**
         * Slow rules.
         */
        'import/default': 'off',
        'import/namespace': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',

        'no-void': 'off',

        /* Replaced by @typescript-eslint */
        'padding-line-between-statements': 'off',
      },
    },
    {
      files: ['*.{tsx,jsx}'],
      rules: {
        /**
         * Allow use of `null` in React components.
         */
        '@rushstack/no-new-null': 'off',

        /**
         * Allow defining React components without an explicit return-type.
         */
        '@typescript-eslint/explicit-function-return-type': 'off',

        'jsx-a11y/anchor-has-content': [
          2,
          {
            components: ['Link'],
          },
        ],
      },
    },
    {
      files: ['*.{ts,tsx}'],
      rules: {
        /**
         * Allow the use of `any`.
         */
        '@typescript-eslint/no-explicit-any': 'off',

        /**
         * Allow use of namespaces.
         */
        '@typescript-eslint/no-namespace': 'off',

        /**
         * Sorting union (`|`) and intersection (`&`) types.
         */
        // '@typescript-eslint/sort-type-constituents': 'error',

        /**
         * Require type declarations for members and function parameters, excluding arrow functions.
         */
        '@typescript-eslint/typedef': [
          'error',
          {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: true,
            objectDestructuring: false,
            parameter: true,
            propertyDeclaration: true,
            variableDeclaration: false,
            variableDeclarationIgnoreFunction: true,
          },
        ],

        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
      },
    },
    {
      /**
       * Allow default exports have a different name than the file name for pages
       * and index files.
       */
      files: ['*/routes/**/*.{ts,tsx,js,jsx}', '*/src/root.{ts,tsx,js,jsx}', 'index.{ts,tsx,js,jsx}'],
      rules: {
        'consistent-default-export-name/default-export-match-filename': 'off',
      },
    },
    {
      /**
       * Apply looser linting for exports in configuration, page, test and Storybook files, because these exports
       * are not imported by other parts of the codebase. Additionally, structures and typings are
       * clear, recurring, and well-known.
       */
      files: [
        './*.{ts,tsx,js,jsx}',
        '*/routes/**/*.{ts,tsx,js,jsx}',
        '*/root.{ts,tsx,js,jsx}',
        '*/entry.*.{ts,tsx,js,jsx}',
        '*/devlink/**/*.{ts,tsx,js,jsx}',
        '*/tests/**/*.{ts,tsx,js,jsx}',
        '*.test.{ts,tsx,js,jsx}',
        '*.e2e.{ts,tsx,js,jsx}',
        '*.stories.{ts,tsx,js,jsx,mdx}',
      ],
      rules: {
        '@rushstack/typedef-var': 'off',
        'func-style': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      extends: ['plugin:jsonc/recommended-with-jsonc'],
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      extends: ['plugin:yml/standard'],
      files: ['*.yml'],
      parser: 'yaml-eslint-parser',
      rules: { 'prettier/prettier': 'off' },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'prettier',
    'import',
    'sort-exports',
    'sort-export-all',
    'sort-keys-fix',
    'typescript-sort-keys',
    'formatjs',
  ],
  rules: {
    /**
     * Do not allow use of `null`.
     */
    '@rushstack/no-new-null': 'error',

    // /**
    //  * Make sure the name of the default export matches the file name (later excluded for pages and index files.)
    //  */
    // 'consistent-default-export-name/default-export-match-filename': 'error',

    /**
     * Require use of `!==` instead of `!=` except for null.
     */
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    /**
     * Disallow declaring functions as arrow functions.
     */
    'func-style': ['error', 'declaration'],

    /**
     * Make sure the name of a default import matches the file name.
     */
    'import/no-named-default': 'error',

    /**
     * Disable false positives when `tsconfig-paths` is used for import resolution.
     */
    'import/no-unresolved': 'off',

    /**
     * Sort `lib`-imports differently and make sure `react`-imports come first.
     */
    'import/order': [
      2,
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: ['builtin', 'external', 'unknown', 'internal', ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
        pathGroups: [
          { group: 'builtin', pattern: '{react,react-dom,vike}{/**,}', position: 'before' },
          { group: 'unknown', pattern: '{packlets,lib}/**', position: 'before' },
          { group: 'internal', pattern: '~~/lib/**', position: 'after' },
          {
            group: 'internal',
            pattern: '{lib}{,/**}',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-dom', 'vike'],
      },
    ],

    /**
     * Sort `export * from "..."` alphabetically, which is useful for index files.
     */
    'sort-export-all/sort-export-all': ['error', 'asc', { caseSensitive: false, natural: true }],

    /**
     * Sort exports consistently. It may be annoying in some cases, but it is better to have a rule for it than not.
     */
    'sort-exports/sort-exports': [
      'error',
      { ignoreCase: true, sortDir: 'asc', sortExportKindFirst: 'value' },
    ],

    /**
     * Sort named imports (import/order only handles the order of import statements.)
     */
    'sort-imports': ['error', { ignoreCase: false, ignoreDeclarationSort: true, ignoreMemberSort: false }],

    /**
     * Sort object property keys.
     */
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],
  },
  settings: {
    react: { version: '18.2.0' },
  },
};
