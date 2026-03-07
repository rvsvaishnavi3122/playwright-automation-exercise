import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';

test('Test case 9: Search Product', async ({ page }) => {

  const homepage = new HomePage(page);
  const productPage = new ProductPage(page);

  await homepage.openHome();

  await productPage.openProducts();

  await expect(page).toHaveURL(/products/);

  await productPage.searchProduct('Top');

  await expect(productPage.searchedProducts.first()).toBeVisible();
  const count = await productPage.searchedProducts.count();
  expect(count).toBeGreaterThan(0);
  
  const keyword = 'Top';
await productPage.searchProduct(keyword);

const titles = await productPage.productTitles.allTextContents();

const hasMatch = titles.some(title =>
  title.toLowerCase().includes(keyword.toLowerCase())
);

expect(hasMatch).toBeTruthy();

});
