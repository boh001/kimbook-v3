module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": 0,
    quotes: [2, "double", { allowTemplateLiterals: true }],
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx"] }],
    "no-unused-vars": [1, { vars: "all", args: "all" }],
    "import/prefer-default-export": "off",
    rules: {
      "no-param-reassign": 0,
    },
  },
};
