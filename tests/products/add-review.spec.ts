import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';
import { HomePage } from '../../pages/HomePage';

test('Test Case 20: Add Review on Product', async ({ page }) => {

  const homepage = new HomePage(page);
  const productPage = new ProductPage(page);

  await homepage.openHome();

  await productPage.openProducts();

  await productPage.openFirstProduct();

  await page.locator('#name').fill('Test User');

  await page.locator('#email').fill('test@test.com');

  await page.locator('#review').fill('Great product automation test');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Thank you for your review.')).toBeVisible();

});