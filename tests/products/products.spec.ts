import{test,expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
test('Test case 8:Verify all the products and product detail page',async ({page})=>{
    const homepage =  new HomePage(page);
    const productPage = new ProductPage(page);
    await homepage.openHome();
    await productPage.openProducts();
    await expect(page).toHaveURL(/products/);
    await productPage.openFirstProduct();
    await expect(page).toHaveURL(/product_details/);

});