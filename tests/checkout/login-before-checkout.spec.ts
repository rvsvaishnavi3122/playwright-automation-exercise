import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { LoginPage } from '../../pages/LoginPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { faker } from '@faker-js/faker';

test('Test Case 16: Login before Checkout', async ({ page }) => {

  const homepage = new HomePage(page);
  const productPage = new ProductPage(page);
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);

  await homepage.openHome();

  await loginPage.goToLogin();

  await loginPage.login(
    'testuser@gmail.com',
    'Test@123'
  );
 // await expect(page.getByText('Logged in as')).toBeVisible();

  await productPage.openProducts();
  await productPage.addProduct(0);

  await productPage.viewCart();

  await checkoutPage.proceedToCheckout();

  await checkoutPage.placeOrder();

});