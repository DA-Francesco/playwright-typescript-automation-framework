import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * Page Object representing the UiBank login page.
 *
 * This class contains:
 * - Login page locators
 * - Login-related actions
 * - Login page validations
 *
 * Common browser functionality is inherited from BasePage.
 */
export class LoginPage extends BasePage {
  // Login page elements
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);

    /**
     * Username field.
     *
     * The ID is stable and explicitly provided by the application.
     */
    this.usernameInput = page.locator("#username");

    /**
     * Password field.
     */
    this.passwordInput = page.locator("#password");

    /**
     * Login button.
     */
    this.loginButton = page.locator("text=Sign In");
  }

  /**
   * Verifies that the UiBank login page is displayed.
   *
   * This checks the page title to confirm that navigation
   * reached the expected UiBank application.
   */
  async verifyLoginPage(): Promise<void> {
    await expect(this.page).toHaveTitle("UiBank-Welcome");
  }

  /**
   * Enters the username.
   */
  async enterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  /**
   * Enters the password.
   */
  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  /**
   * Clicks the login button.
   */
  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  /**
   * Performs the complete login operation.
   *
   * This method combines the individual login actions
   * into one reusable business-level operation.
   */
  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  /**
   * Verifies that the user has successfully logged in.
   *
   * UiBank redirects authenticated users to the accounts page
   * and displays the "Welcome!" heading.
   */
  async verifySuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL("https://uibank.uipath.com/accounts");

    await expect(
      this.page.getByRole("heading", { name: "Welcome!" }),
    ).toBeVisible();
  }
}
