import{Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage'
export class ContactPage extends BasePage{
    readonly nameInput:Locator;
    readonly emailInput:Locator;
    readonly subjectInput:Locator;
    readonly messageInput:Locator;
    readonly fileUpload:Locator;
    readonly submitButton:Locator;
    readonly successMessage:Locator;
    constructor(page:Page){
        super(page);
        this.nameInput = page.locator('[data-qa="name"]');
        this.emailInput=page.locator('[data-qa="email"]');
        this.subjectInput= page.locator('[data-qa="subject"]');
        this.messageInput=page.locator('[data-qa="message"]');
        this.fileUpload=page.locator('[name="upload_file"]');
        this.submitButton=page.locator('[data-qa="submit-button"]');
        this.successMessage = page.locator('#contact-page .alert-success');
    }
    async submitForm(name:string,email:string){
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.subjectInput.fill('Automation test');
        await this.messageInput.fill('Testing contact form');
        await this.fileUpload.setInputFiles({
            name:'test.txt',
            mimeType:'text/plain',
            buffer: Buffer.from('Playwright Test file')

        });
        //handle alert
        this.page.once('dialog',dialog=>dialog.accept());
        await this.submitButton.click();
    }
}