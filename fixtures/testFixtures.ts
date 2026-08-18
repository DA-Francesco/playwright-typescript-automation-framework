import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UiBankHomepage } from '../pages/UiBankHomepage';

/**
 * Defines the custom fixtures available to our tests.
 */
type TestFixtures = {
  loginPage: LoginPage;
  uiBankHomepage: UiBankHomepage;
};

/**
 * Extends Playwright's base test with our custom fixtures.
 */
export const test = base.extend<TestFixtures>({
  /**
   * Provides the LoginPage Page Object.
   */
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  /**
   * Provides the UiBankHomepage Page Object.
   */
  uiBankHomepage: async ({ page }, use) => {
    const uiBankHomepage = new UiBankHomepage(page);

    await use(uiBankHomepage);
  },
});

/**
 * Re-export Playwright's expect function.
 */
export { expect } from '@playwright/test';