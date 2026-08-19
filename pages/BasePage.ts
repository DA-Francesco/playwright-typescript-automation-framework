import { Page } from "@playwright/test";

/**
 * Base Page Object containing common browser interactions.
 *
 * Page-specific classes inherit from this class so that
 * common functionality does not need to be duplicated.
 */
export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to a relative application URL.
   *
   * The base URL is managed by Playwright configuration.
   *
   * @param path Relative path within the application.
   */
  async navigateTo(path: string = "/"): Promise<void> {
    await this.page.goto(path);
  }

  /**
   * Returns the current page title.
   */
  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /**
   * Returns the current page URL.
   */
  getCurrentUrl(): string {
    return this.page.url();
  }
}
