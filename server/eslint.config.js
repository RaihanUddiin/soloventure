import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Include browser globals
        ...globals.node,    // Include Node.js globals
      },
      ecmaVersion: 2021, // Use modern ECMAScript features
      sourceType: "module", // If using ES Modules
    },
    rules: {
      "no-undef": "error", // Flag undefined variables/functions
      "no-unused-vars": "warn", // Warn about unused variables
      "no-console": "off", // Allow console statements
    },
  },
  pluginJs.configs.recommended,
];
