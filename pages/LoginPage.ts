import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * Page Object representing the Automation Exercise Login page.
 *
 * Responsibilities:
 * - Verify the Login page
 * - Enter login credentials
 * - Authenticate the user
 * - Verify successful login
 * - Delete the logged-in user's account
 * - Verify account deletion
 *
 * Common browser functionality is inherited from BasePage.
 */
export class LoginPage extends BasePage {
  // Login page elements
  private readonly loginHeading: Locator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  // Account management elements
  private readonly deleteAccountButton: Locator;
  private readonly accountDeletedMessage: Locator;

  /**
   * Initializes the Login page locators.
   *
   * @param page Playwright Page instance used to interact with the browser.
   */
  constructor(page: Page) {
    super(page);

    this.loginHeading = page.getByRole("heading", {
      name: "Login to your account",
    });

    this.emailInput = page.locator('[data-qa="login-email"]');

    this.passwordInput = page.locator('[data-qa="login-password"]');

    this.loginButton = page.locator('[data-qa="login-button"]');

    this.deleteAccountButton = page.getByRole("link", {
      name: "Delete Account",
    });

    this.accountDeletedMessage = page.getByText("ACCOUNT DELETED!");
  }

  /**
   * Verifies that the Login page is displayed.
   */
  async verifyLoginPageIsVisible(): Promise<void> {
    await expect(this.loginHeading).toBeVisible();
  }

  /**
   * Authenticates the user using the supplied credentials.
   *
   * @param email Registered user email address.
   * @param password Registered user password.
   */
  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Verifies that the user has successfully logged in.
   *
   * @param username Expected username displayed after successful authentication.
   */
  async verifySuccessfulLogin(username: string): Promise<void> {
    const loggedInUser = this.page.getByText(
      `Logged in as ${username}`,
      { exact: false }
    );

    await expect(loggedInUser).toBeVisible();
  }

  /**
   * Deletes the currently logged-in user's account.
   */
  async deleteAccount(): Promise<void> {
    await this.deleteAccountButton.click();
  }

  /**
   * Verifies that the account deletion confirmation is displayed.
   */
  async verifyAccountDeleted(): Promise<void> {
    await expect(this.accountDeletedMessage).toBeVisible();
  }
}