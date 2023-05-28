module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "no-console": off
  },
};
