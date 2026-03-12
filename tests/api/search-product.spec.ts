import { test, expect } from '@playwright/test';

test('API Test: Validate product fields', async ({ request }) => {

  const response = await request.get(
    'https://automationexercise.com/api/productsList'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  const product = body.products[0];

  expect(product).toHaveProperty('id');
  expect(product).toHaveProperty('name');
  expect(product).toHaveProperty('price');

});

test('API + UI product validation', async ({ page, request }) => {

  const response = await request.get(
    'https://automationexercise.com/api/productsList'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  const apiProducts = body.products.map((p: any) =>
    p.name.toLowerCase()
  );

  await page.goto('https://automationexercise.com/products');

  // wait for product section
  await expect(page.locator('.features_items')).toBeVisible();

  const uiProducts = (
    await page.locator('.features_items .productinfo p').allTextContents()
  ).map(p => p.toLowerCase());

  const match = uiProducts.some(ui =>
    apiProducts.includes(ui)
  );

  expect(match).toBeTruthy();

});
