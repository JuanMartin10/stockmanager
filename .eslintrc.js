module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  settings: {
    'import/parser': 'babel-eslint',
  },
  rules: {
    'react/forbid-prop-types': [0],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
