import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

  readonly productsLink: Locator;
  readonly products: Locator;
  readonly productList: Locator;
  readonly viewProductButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchedProducts: Locator;
  readonly productTitles: Locator;
  readonly continueShoppingButton: Locator;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    super(page);

    this.productsLink = page.getByRole('link', { name: 'Products' });

    this.products = page.locator('.product-image-wrapper');

    this.productList = page.locator('.features_items');

    this.viewProductButton = page.getByRole('link', { name: 'View Product' }).first();

    this.searchInput = page.locator('#search_product');

    this.searchButton = page.locator('#submit_search');

    this.searchedProducts = page.locator('.features_items .product-image-wrapper');

    this.productTitles = page.locator('.features_items .productinfo p');

    this.continueShoppingButton = page.getByText('Continue Shopping');

    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
  }

  async openProducts() {
  await this.productsLink.click();

  await this.products.first().waitFor({ state: 'visible' });
}

  async openFirstProduct() {
    await this.viewProductButton.click();
  }

  async searchProduct(product: string) {
    await this.searchInput.fill(product);
    await this.searchButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async viewCart() {
    await this.viewCartLink.click();
  }

async addProduct(index: number) {

  const count = await this.products.count();

  if (index >= count) {
    throw new Error(`Product index ${index} does not exist. Only ${count} products available.`);
  }

  const product = this.products.nth(index);

  await product.hover();
  await product.locator('a.add-to-cart').first().click();
}
  }
