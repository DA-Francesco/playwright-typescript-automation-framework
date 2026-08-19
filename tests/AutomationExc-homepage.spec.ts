import { test } from "../fixtures/testFixtures";

/**
 * Test suite covering Automation Exercise homepage scenarios.
 */
test.describe("Automation Exercise - Homepage", () => {

  /**
   * Verifies that the Automation Exercise homepage
   * is displayed successfully.
   */
  test("should display the Automation Exercise homepage", async ({
    homePage,
  }) => {

    // Navigate to the Automation Exercise homepage.
    await homePage.navigateToHomePage();

    // Verify that the homepage URL and main heading are displayed.
    await homePage.verifyHomePageIsVisible();
  });
});