import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * Page Object representing the Automation Exercise homepage.
 *
 * Responsibilities:
 * - Navigate to the Automation Exercise homepage
 * - Verify that the homepage is displayed
 * - Navigate to the Login page
 *
 * Common browser functionality is inherited from BasePage.
 */
export class AutomationExerciseHomepage extends BasePage {
  // Homepage elements
  private readonly signupLoginButton: Locator;
  private readonly homePageHeading: Locator;

  /**
   * Initializes the homepage locators.
   *
   * @param page Playwright Page instance used to interact with the browser.
   */
  constructor(page: Page) {
    super(page);

    this.signupLoginButton = page.getByRole("link", {
      name: "Signup / Login",
    });

    this.homePageHeading = page
      .getByRole("heading", {
        name: "Full-Fledged practice website for Automation Engineers",
      })
      .first();
  }

  /**
 * Navigates to the Automation Exercise homepage.
 *
 * The base URL is managed centrally through Playwright configuration,
 * allowing the same Page Object to work across different environments.
 */
async navigateToHomePage(): Promise<void> {
  await this.navigateTo("/");
}

  /**
   * Verifies that the Automation Exercise homepage is displayed.
   */
  async verifyHomePageIsVisible(): Promise<void> {
    await expect(this.page).toHaveURL(/automationexercise\.com/);
    await expect(this.homePageHeading).toBeVisible();
  }

  /**
   * Navigates from the homepage to the Login page.
   */
  async navigateToLoginPage(): Promise<void> {
    await this.signupLoginButton.click();
  }
}