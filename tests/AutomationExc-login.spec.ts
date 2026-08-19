import { test } from "../fixtures/testfixtures";
import { validLoginData } from "../test-data/loginData";

/**
 * Test suite covering Automation Exercise authentication scenarios.
 */
test.describe("Automation Exercise Portal Login", () => {

  /**
   * Verifies that a registered user can successfully log in
   * using valid credentials.
   */
  test("should login successfully with valid credentials", async ({
    homePage,
    loginPage,
  }) => {

    // Navigate to the application homepage.
    await homePage.navigateToHomePage();

    // Verify that the homepage has loaded successfully.
    await homePage.verifyHomePageIsVisible();

    // Navigate to the Login page through the application UI.
    await homePage.navigateToLoginPage();

    // Verify that the Login page is displayed.
    await loginPage.verifyLoginPageIsVisible();

    // Authenticate using credentials stored in environment variables.
    await loginPage.login(
      validLoginData.email,
      validLoginData.password
    );

    // Verify that the expected user is displayed after successful login.
    await loginPage.verifySuccessfulLogin(
      validLoginData.username
    );
  });
});