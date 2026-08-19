import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * Page Object representing the UiBank home page.
 *
 * This class contains UiBank home-page-specific
 * locators and actions.
 *
 * Common browser functionality is inherited from BasePage.
 */
export class UiBankHomepage extends BasePage {
  // Home page elements
  private readonly getStartedButton: Locator;

  constructor(page: Page) {
    super(page);

    /**
     * Get Started link available on the UiBank home page.
     */
    this.getStartedButton = page.getByRole("link", {
      name: "Get started",
    });
  }

  /**
   * Clicks the Get Started link.
   */
  async clickGetStarted(): Promise<void> {
    await this.getStartedButton.click();
  }
}
