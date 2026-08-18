import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],

    plugins: {
      playwright,
    },

    rules: {
      // Warn when console statements are used.
      "no-console": "warn",

      // Prevent the use of the `any` type.
      "@typescript-eslint/no-explicit-any": "error",

      // Prevent unused variables and imports.
      "@typescript-eslint/no-unused-vars": "error",

      // Prevent accidentally skipped tests.
      "playwright/no-skipped-test": "warn",

      // Prevent accidentally committing test.only().
      "playwright/no-focused-test": "error",

      // Prevent hard-coded waits such as page.waitForTimeout().
      "playwright/no-wait-for-timeout": "warn",
    },
  },
);
