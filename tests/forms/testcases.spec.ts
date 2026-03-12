import{test,expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
test('Test case 7:Verify test cases page',async ({page})=>{
    const homepage = new HomePage(page);
    await homepage.openHome();
    await homepage.openTestCases();
    await expect(page).toHaveURL(/test_cases/);
});