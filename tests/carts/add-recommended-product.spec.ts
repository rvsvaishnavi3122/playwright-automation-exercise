import { test, expect } from '@playwright/test';

test('Test Case 22: Add recommended product to cart', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  await page.locator('#recommended-item-carousel').scrollIntoViewIfNeeded();

  await page.locator('#recommended-item-carousel .add-to-cart').first().click();

  await page.getByRole('link', { name: 'View Cart' }).click();

  await expect(page.locator('.cart_info')).toBeVisible();
  await expect(page.locator('#address_delivery')).toContainText('Hyderabad');
 await expect(page.locator('#address_invoice')).toContainText('Hyderabad');

});
test('Test Case 24: Download invoice', async ({ page }) => {

  const downloadPromise = page.waitForEvent('download');

  await page.getByText('Download Invoice').click();

  const download = await downloadPromise;

  expect(download.suggestedFilename()).toContain('invoice');

});
test('Test Case 24: Download invoice', async ({ page }) => {

  const downloadPromise = page.waitForEvent('download');

  await page.getByText('Download Invoice').click();

  const download = await downloadPromise;

  expect(download.suggestedFilename()).toContain('invoice');

});
test('Test Case 26: Scroll up using arrow', async ({ page }) => {

  await page.goto('https://automationexercise.com');

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  await page.locator('#scrollUp').click();

  await expect(
    page.getByRole('heading', { name: 'AutomationExercise' })
  ).toBeVisible();

});