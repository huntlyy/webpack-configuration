import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReactConfig from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import airbnbConfig from 'eslint-config-airbnb';
import typescriptParser from '@typescript-eslint/parser';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactPluginImport from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                __IS_DEV__: true,
            },
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    {
        plugins: {
            react: pluginReactConfig,
            react_hooks: reactHooksPlugin,
            jsx_a11y: jsxA11y,
            import: reactPluginImport,
            tseslint,
            pluginJs,
            prettier: prettier,
        },
    },
    {
        rules: {
            ...airbnbConfig.rules,
            'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
            'react/jsx-filename-extension': [
                2,
                { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
            ],
            'import/no-unresolved': 'off',
            'import/order': 'warn',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'off',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'max-len': ['warn', { ignoreComments: true, code: 135 }],
            'jsx_a11y/no-static-element-interactions': 'off',
            'jsx_a11y/click-events-have-key-events': 'off',
            'react_hooks/rules-of-hooks': 'error', // Checks rules of Hooks
            'react_hooks/exhaustive-deps': 'error', // Checks effect dependencies,
            'no-param-reassign': 'off',
            'no-undef': 'off',
            'react/no-array-index-key': 'off',
        },
    },
    {
        ignores: ['node_modules/'],
    },
];
