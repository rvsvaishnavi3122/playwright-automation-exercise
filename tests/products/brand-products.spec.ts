import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Test Case 19: View Brand Products', async ({ page }) => {

  const homepage = new HomePage(page);

  await homepage.openHome();

  await page.getByRole('link', { name: 'Polo' }).click();

  await expect(page).toHaveURL(/brand_products/);

});