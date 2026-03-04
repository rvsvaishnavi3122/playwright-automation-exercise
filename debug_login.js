const { chromium } = require('@playwright/test');
(async()=>{
  const browser = await chromium.launch({headless:true});
  const page = await browser.newPage();
  // first register a new user
  await page.goto('https://automationexercise.com/signup');
  const email = `debuguser${Date.now()}@example.com`;
  const password = 'Test@123';
  // fill in signup name and email
  await page.fill('[data-qa="signup-name"]','debuguser');
  await page.fill('[data-qa="signup-email"]',email);
  await page.click('[data-qa="signup-button"]');
  await page.waitForLoadState('networkidle');
  // after signup, the site might require additional form; skip for now and go to login
  await page.goto('https://automationexercise.com/login');
  await page.fill('[data-qa="login-email"]', email);
  await page.fill('[data-qa="login-password"]',password);
  await page.click('[data-qa="login-button"]');
  await page.waitForLoadState('networkidle');
  console.log('used email',email);


  const content = await page.content();
  if(content.includes('Logged in as')){
    console.log('Found Logged in as');
  } else {
    console.log('Did NOT find Logged in as');
  }
  console.log(' snippet:');
  const parts=content.match(/.{1,1000}/g)||[];
  console.log(parts.slice(0,20).join('\n---\n'));
  await browser.close();
})();