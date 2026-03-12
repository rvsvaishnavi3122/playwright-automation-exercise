import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
export class CartPage extends BasePage{
    readonly cartItems:Locator;
    readonly removeButton:Locator;
    readonly productQuantity: Locator;
    readonly deleteButton = this.page.locator('.cart_quantity_delete');
    readonly emptyCart = this.page.getByText('Cart is empty');


    constructor(page:Page){
        super(page);
        this.cartItems=page.locator('.cart_description');
        this.removeButton=page.locator('.cart_quantity_delete');
        this.productQuantity = page.locator('.cart_quantity button');
    }
    async removeProduct(){
        await this.deleteButton.first().click();
    }
    
}