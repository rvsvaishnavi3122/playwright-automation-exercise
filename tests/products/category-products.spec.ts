import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Test Case 18: View Category Products', async ({ page }) => {

  const homepage = new HomePage(page);

  await homepage.openHome();

  // Expand Women category
  await page.getByRole('link', { name: 'Women' }).click();

  // Click Dress subcategory
  await page.getByRole('link', { name: 'Dress' }).click();

  // Verify category page
  await expect(page).toHaveURL(/category_products/);

});