import { test as base, expect } from "@playwright/test";
import { AutomationExerciseHomepage } from "../pages/AutomationExerciseHomepage";
import { LoginPage } from "../pages/LoginPage";

/**
 * Defines the custom fixtures available to our test cases.
 *
 * Fixtures provide ready-to-use Page Object instances,
 * allowing tests to focus on business scenarios instead
 * of manually creating Page Objects.
 */
type Fixtures = {
  homePage: AutomationExerciseHomepage;
  loginPage: LoginPage;
};

/**
 * Extends Playwright's base test with framework-specific fixtures.
 *
 * Each fixture receives the Playwright Page instance and
 * creates the corresponding Page Object.
 */
export const test = base.extend<Fixtures>({
  // Provides the Automation Exercise homepage Page Object.
  homePage: async ({ page }, use) => {
    await use(new AutomationExerciseHomepage(page));
  },

  // Provides the Automation Exercise Login Page Object.
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

// Re-export expect so tests can import everything from the framework fixture.
export { expect };