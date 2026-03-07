import{Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';
export class CheckoutPage extends BasePage{
    readonly proceedToCheckoutButton:Locator;
    readonly registerLoginLink:Locator;
    readonly placeOrderButton:Locator;
    constructor(page:Page){
        super(page);
        this.proceedToCheckoutButton=page.getByText('Proceed To Checkout');
        this.registerLoginLink=page.getByRole('link',{name:'Register / Login'});
        this.placeOrderButton=page.getByText('Place Order');
    }
    async proceedToCheckout(){
        await this.proceedToCheckoutButton.click();
    }
    async goToRegister(){
        await this.registerLoginLink.click();
    }
    async placeOrder(){
        await this.placeOrderButton.click();
    }
}