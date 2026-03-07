import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';

test('Test Case 13: Verify Product Quantity in Cart', async ({ page }) => {

  const homepage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await homepage.openHome();

  await productPage.openProducts();

  await productPage.openFirstProduct();

  await productPage.setQuantity(4);

  await productPage.addProductFromDetail();

  await productPage.viewCart();

  await expect(cartPage.productQuantity.first()).toHaveText('4');

});