import{test,expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ContactPage } from '../../pages/ContactPage';
import { faker } from '@faker-js/faker';
test('Test case 6:Contact Us form',async({page})=>{
    const homepage = new HomePage(page);
    const contactpage = new ContactPage(page);
    await homepage.openHome();
    await homepage.openContactUs();
    await contactpage.submitForm(
        faker.person.fullName(),
        faker.internet.email()
    );
    await expect(contactpage.successMessage).toBeVisible();

})