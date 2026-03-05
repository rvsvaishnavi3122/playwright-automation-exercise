import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly contactUsLink: Locator;
  readonly testCasesLink: Locator;
  readonly cartLink: Locator;
  readonly subscriptionEmail: Locator;
  readonly subscribeButton: Locator;
  readonly subscriptionSuccessMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.contactUsLink = page.getByRole('link', { name: 'Contact us' });
    this.testCasesLink = page.locator('a[href="/test_cases"]').first();
    this.cartLink = page.getByRole('link', { name: 'Cart' });

    this.subscriptionEmail = page.locator('#susbscribe_email');
    this.subscribeButton = page.locator('#subscribe');
    this.subscriptionSuccessMessage =
      page.getByText('You have been successfully subscribed!');
  }

  async openHome() {
    await this.navigate('/');
  }

  async openContactUs() {
    await this.contactUsLink.click();
  }

  async openTestCases() {
    await this.testCasesLink.click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async subscribe(email: string) {
    await this.subscriptionEmail.fill(email);
    await this.subscribeButton.click();
  }
}