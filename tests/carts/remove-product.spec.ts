import { CartPage } from '../../pages/CartPage';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { test, expect } from '@playwright/test';

test('Test Case 17: Remove product from cart', async ({ page }) => {

  const homepage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await homepage.openHome();

  await productPage.openProducts();

  // Add first product
  await productPage.addProduct(0);

  // Click "View Cart" from popup
  await productPage.viewCart();

  // Remove product
  await cartPage.removeProduct();

  // Verify cart is empty
  await expect(cartPage.emptyCart).toBeVisible({ timeout: 10000 });

});