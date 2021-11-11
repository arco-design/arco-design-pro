module.exports = {
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "import/no-anonymous-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/alt-text": 0,
    "array-callback-return": 0,
    "no-loop-func": 0,
  }
};