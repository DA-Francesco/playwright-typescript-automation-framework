import { Page, Locator } from "@playwright/test";

export class UiBankHomepage {
  readonly page: Page;
  readonly getStartedButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getStartedButton = page.getByRole("link", {
      name: "Get started",
    });
  }

  /**
   * Navigates to the application's home page.
   *
   * The base URL is configured in playwright.config.ts,
   * keeping environment-specific URLs outside the Page Object.
   */
  async navigate(): Promise<void> {
    await this.page.goto("/");
  }

  /**
   * Clicks the Get Started link.
   */
  async clickGetStarted(): Promise<void> {
    await this.getStartedButton.click();
  }

  /**
   * Returns the current page title.
   *
   * Keeping this interaction inside the Page Object allows
   * tests to avoid directly depending on the Playwright page object.
   */
  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /**
   * Returns the current URL.
   */
  getCurrentUrl(): string {
    return this.page.url();
  }
}
