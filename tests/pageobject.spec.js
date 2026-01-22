import{test,expect} from'@playwright/test'
const Loginpage = require('../pageobjects/login');

test('test with POM framework',async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

  const loginpage = new Loginpage(page);
    await loginpage.loginToApp();


})