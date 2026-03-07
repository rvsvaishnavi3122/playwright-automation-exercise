import{test,expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
test('Test Case 12: Add Products in Cart', async ({ page }) => {

  const homepage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await homepage.openHome();

  await productPage.openProducts();

  await productPage.addProduct(0);
  await productPage.continueShopping();

  await productPage.addProduct(1);
  await productPage.viewCart();

  await expect(cartPage.cartItems).toHaveCount(2);

});
