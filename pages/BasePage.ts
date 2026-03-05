import {Page} from '@playwright/test';//we write this way when we want to import any one class from playwright test package
export class BasePage{//creating a base page class which will be extended by all other page classes
    protected page:Page;//why protected> because we want to access this page variable in all other page classes which will ecxtend this page base
    constructor(page:Page){// we are parsing the object of page class to constructor of the page base class
        this.page = page;
    }
    async navigate(path:string='/'){// we are creating a navigate method which will take the path as an argument and navigate to the url
        await this.page.goto(path, { waitUntil: 'domcontentloaded' })// we are using template literal to navigate to the url and we are passing the path as an argument to the navigate method
    }
}