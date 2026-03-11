import { test, expect,chromium } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { testuser, invalidUser } from '../../fixtures/test-data';
//import { chromium, test } from '@playwright/test';

test('launch browser manually', async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://automationexercise.com');
  await browser.close();
});
test('Test case 2: Login user with correct email and password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToLogin();
  await loginPage.login(testuser.email, testuser.password);

  await expect(
    page.getByText('Logged in as')
  ).toBeVisible();
});

test('Test case 3: Login user with incorrect creds', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToLogin();
  await loginPage.login(invalidUser.email, invalidUser.password);

  await expect(
    page.getByText('Your email or password is incorrect!')
  ).toBeVisible();
});

test('Test case 4: Logout user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToLogin();
  await loginPage.login(testuser.email, testuser.password);

  await expect(page.getByText('Logged in as')).toBeVisible();

  await loginPage.logout();

  await expect(
    page.getByText('Login to your account')
  ).toBeVisible();
});

test('Test case 5:Register with existing email', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToLogin();
  await loginPage.register(testuser.name, testuser.email);

  await expect(
    page.getByText('Email Address already exist!')
  ).toBeVisible();
});