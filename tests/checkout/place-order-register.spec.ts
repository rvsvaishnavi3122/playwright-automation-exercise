import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { PaymentPage } from '../../pages/PaymentPage';
import { LoginPage } from '../../pages/LoginPage';
import { faker } from '@faker-js/faker';

test('Test Case 14: Place Order Register while Checkout', async ({ page }) => {

  const homepage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);
  const loginPage = new LoginPage(page);

  const name = faker.person.firstName();
  const email = faker.internet.email();

  await homepage.openHome();

  await productPage.openProducts();

  await productPage.addProduct(0);

  await productPage.viewCart();

  await checkoutPage.proceedToCheckout();
await checkoutPage.goToRegister();

await loginPage.register(name, email);

// complete account info
await loginPage.fillAccountDetails();

//await page.getByRole('button', { name: 'Create Account' }).click();

//await page.getByText('Account Created!').waitFor();

//await page.getByText('Continue').click();

// now cart is accessible again
await page.goto('/view_cart');
await checkoutPage.proceedToCheckout();

await checkoutPage.placeOrder();
});