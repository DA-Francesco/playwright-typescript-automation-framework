import { test } from "../fixtures/testFixtures";
import { loginData } from "../test-data/loginData";

/**
 * UiBank login test scenarios.
 */
test.describe("UiBank Login", () => {
  test("should successfully login to UiBank", async ({ loginPage }) => {
    await loginPage.navigateTo("/");

    // Verify that the login page is displayed.
    await loginPage.verifyLoginPage();

    // Perform login using valid UiBank credentials.
    await loginPage.login(loginData.username, loginData.password);

    // Verify that login was successful.
    await loginPage.verifySuccessfulLogin();
  });
});
