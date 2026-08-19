import { Page } from "@playwright/test";

/**
 * Base Page
 *
 * Contains common browser actions that can be reused
 * by all Page Objects in the framework.
 *
 * Page-specific locators and validations should remain
 * inside their respective Page Object classes.
 */
export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL.
   */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Get the current page URL.
   */
  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  /**
   * Reload the current page.
   */
  async reloadPage(): Promise<void> {
    await this.page.reload();
  }

  /**
   * Navigate back to the previous page.
   */
  async goBack(): Promise<void> {
    await this.page.goBack();
  }

  /**
   * Navigate forward to the next page.
   */
  async goForward(): Promise<void> {
    await this.page.goForward();
  }

  /**
   * Wait for the page to reach the specified load state.
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }
}
