import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
export class PaymentPage extends BasePage{
    readonly nameOnCard:Locator;
    readonly CardNumber:Locator;
    readonly cvv:Locator;
    readonly expiryMonth:Locator;
    readonly expiryYear:Locator;
    readonly payButton:Locator;
    readonly successMessage:Locator;
    constructor(page:Page){
        super(page);
        this.nameOnCard=page.locator('[name="name-on-card"]');
        this.CardNumber=page.locator('[name="card_number"]');
        this.cvv=page.locator('[name="cvc"]');
    this.expiryMonth = page.locator('[name="expiry_month"]');
    this.expiryYear = page.locator('[name="expiry_year"]');

    this.payButton = page.getByText('Pay and Confirm Order');
    this.successMessage = page.getByText('Congratulations! Your order has been confirmed!');
    }
    async completePayment(){
        await this.nameOnCard.fill('Test User');
        await this.CardNumber.fill('411111111111111');
        await this.cvv.fill('123');
        await this.expiryMonth.fill('12');    
        await this.expiryYear.fill('2030');
        await this.payButton.click();
    }
}