module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "parser":"babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "import"
  ],
  "rules": {
    "indent": [
      2,
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "quotes": [
      2,
      "single"
    ],
    "semi": [
      2,
      "always"
    ],
    "max-lines": [
      1,
      { max: 250 }
    ],
    "arrow-body-style": 1,
    "arrow-spacing": 1,
    "camelcase": 1,
    "import/max-dependencies": [1, {"max": 10}],
    "keyword-spacing": 1,
    "max-len": [
      1,
      {
        "code": 120,
        "ignoreUrls": true,
        "ignoreComments": true,
        "ignorePattern": "^import\\s.+\\s*from"
      }
    ],
    "newline-per-chained-call": 1,
    "no-negated-condition": 1,
    "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
    "no-underscore-dangle": 1,
    "no-whitespace-before-property": 1,
    "no-var": 1,
    "object-shorthand": 1,
    "padded-blocks": [1, "never"],
    "prefer-const": 1,
    "prefer-template": 1,
    "quote-props": [1, "as-needed"],
    "space-before-blocks": 1,
    "space-infix-ops": 1,
    "space-in-parens": [1, "never"],
    "template-curly-spacing": 1,
    "no-tabs": 2,
    // React
    "react/prefer-es6-class": 1,
    "react/prefer-stateless-function": 1
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "src"
        ]
      }
    }
  }
};