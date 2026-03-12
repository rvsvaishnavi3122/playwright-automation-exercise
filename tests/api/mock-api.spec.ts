import{test,expect} from '../fixtures/test-fixtures';
test('Mock products API',async({page})=>{
    await page.route('**/api/productList',async route=>{
        await route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify({
                products:[
                    {id:1,name:'Mock Product 1',price:'$10'},]
        })
    });
});
await page.goto('https://automationexercise.com/products');

await expect(page.locator('Mock Playwright Product')).toBeVisible();
});