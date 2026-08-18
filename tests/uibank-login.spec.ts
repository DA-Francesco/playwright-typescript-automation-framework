import { test } from '../fixtures/testFixtures';

/**
 * UiBank login test scenarios.
 */
test.describe('UiBank Login', () => {
  test('should display the UiBank login page', async ({ loginPage }) => {
    await loginPage.navigate();

    // Verify that the login page is displayed.
    await loginPage.verifyLoginPage();
  });
});