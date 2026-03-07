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

  // NEW locators for account creation
  readonly passwordInput: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipcode: Locator;
  readonly mobileNumber: Locator;
  readonly createAccountButton: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);

    this.signupName = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');

    this.loginEmail = page.locator('[data-qa="login-email"]');
    this.loginPassword = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');

    this.logoutButton = page.getByRole('link', { name: 'Logout' });

    // account creation
    this.passwordInput = page.locator('#password');
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.address = page.locator('#address1');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobileNumber = page.locator('#mobile_number');

    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.continueButton = page.getByRole('link', { name: 'Continue' });
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

  await Promise.all([
    this.page.waitForLoadState('domcontentloaded'),
    this.loginButton.click()
  ]);
}
  

  async logout() {
    await this.logoutButton.click();
  }

  // NEW method for account creation
  async fillAccountDetails() {

  await this.passwordInput.fill('Test@123');

  await this.firstName.fill('Test');
  await this.lastName.fill('User');
  await this.address.fill('Test Street');

  await this.state.fill('Telangana');
  await this.city.fill('Hyderabad');
  await this.zipcode.fill('500001');

  await this.mobileNumber.fill('9999999999');

  await this.createAccountButton.click();

  await this.page.getByText('Account Created!').waitFor();

  await this.continueButton.click();
}
    
}