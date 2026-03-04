import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly signupName: Locator;
  readonly signupEmail: Locator;
  readonly signupButton: Locator;

  readonly loginEmail: Locator;
  readonly loginPassword: Locator;
  readonly loginButton: Locator;

  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);

    this.signupName = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');

    this.loginEmail = page.locator('[data-qa="login-email"]');
    this.loginPassword = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');

    // ✅ Correct placement
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  async goToLogin() {
    await this.navigate('/');
    await this.page.getByRole('link', { name: 'Signup / Login' }).click();
  }

  async register(name: string, email: string) {
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
  }

  async login(email: string, password: string) {
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }
}