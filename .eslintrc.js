module.exports = {
  'extends': 'airbnb-base',
  'plugins': [
    'import',
    'react',
  ],
  'rules': {
    'linebreak-style': 'off',
    'no-unused-vars': [2, {
      'varsIgnorePattern': 'h'
    }],
    'react/jsx-uses-vars': 2,
    'semi': ['error', 'never'], 
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'env': {
    "browser": true,
  }
};
