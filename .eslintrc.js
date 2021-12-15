module.exports = {
    'env': {
        'es2021': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 13,
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
        'unused-imports',
    ],
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'array-bracket-newline': [
            'error',
            { 'multiline': true },
        ],
        'array-element-newline': [
            'error',
            'always',
            {minItems: 2},
        ],
        'no-trailing-spaces': ['error'],
        'no-multiple-empty-lines': ['error'],
        'eol-last': [
            'error',
            'always',
        ],
        'object-property-newline': [
            'error',
            {'allowAllPropertiesOnSameLine': true},
        ],
        'function-call-argument-newline': [
            'error',
            'always',
        ],
        'function-paren-newline': [
            'error',
            'multiline-arguments',
        ],
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' },
        ],
    },
};
