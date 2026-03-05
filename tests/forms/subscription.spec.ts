import{test,expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import{faker} from '@faker-js/faker';
test.beforeEach(async({page})=>{//beforeEach is used to run before every test
    await page.goto('/')//navigates to base url,starts fresh from the homepage to avoid state leakage between tests

});
test('Test case 10:Verify Subscription in Homepage',async({page})=>{
    const homepage = new HomePage(page);
    await homepage.subscribe(faker.internet.email());
    await expect(
        homepage.subscriptionSuccessMessage).toBeVisible();
    

});
test('Test case 11: Verify Subscription in cart page',async({page})=>{
    const homepage = new HomePage(page);
    await homepage.openCart();
    await homepage.subscribe(faker.internet.email());
    await expect(homepage.subscriptionSuccessMessage).toBeVisible();
});