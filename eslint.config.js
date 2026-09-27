module.exports = [
  {
    ignores: ["node_modules/**", "coverage/**", "eslint.config.js"]
  },
  {
    files: ["**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "semi": ["error", "always"],
      "quotes": ["error", "single"]
    }
  }
];