import{test as base} from '@playwright/test';
import{HomePage} from '../../pages/HomePage';
import{LoginPage} from '../../pages/LoginPage';
import{ProductPage} from '../../pages/ProductPage';
import{CartPage} from '../../pages/CartPage';
import{CheckoutPage} from '../../pages/CheckoutPage';

type Fixtures={
    homePage:HomePage;
    loginPage:LoginPage;
    cartPage:CartPage;
    checkoutPage:CheckoutPage;
    productPage:ProductPage;
};
export const test = base.extend<Fixtures>({
    homePage:async({page},use)=>{
        await use(new HomePage(page));
    },
    productPage:async({page},use)=>{
        await use(new ProductPage(page));
    },
    loginPage:async({page},use)=>{
        await use(new LoginPage(page));
    },
    cartPage:async({page},use)=>{
        await use(new CartPage(page));
    },
    checkoutPage:async({page},use)=>{
        await use(new CheckoutPage(page));
    },
    
});
export {expect} from '@playwright/test';
