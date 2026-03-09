import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Test Case 21: Verify Scroll Up', async ({ page }) => {

  const homepage = new HomePage(page);

  await homepage.openHome();

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  await page.locator('#scrollUp').click();

await expect(
  page.getByRole('heading', { name: /Full-Fledged practice website/ }).first()
).toBeVisible();

});