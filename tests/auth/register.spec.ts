import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { faker } from '@faker-js/faker';

test('Test Case 1: Register User', async ({ page }) => {
  const loginPage = new LoginPage(page);

  const name = faker.person.firstName();
  const email = faker.internet.email();

  await loginPage.goToLogin();
  await loginPage.register(name, email);

  await expect(
    page.getByText('Enter Account Information')
  ).toBeVisible();
});