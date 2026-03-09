import{test,expect} from '../fixtures/test-fixtures';
test('API Test:Get all products',async({request})=>{
    const response = await request.get('https://automationexercise.com/api/productsList');
    expect (response.status()).toBe(200);
    const body = await response.json();
    expect(body.products.length).toBeGreaterThan(0);
});