import { test, expect } from '@playwright/test';
const Signup = require('../pageobjects/signup'); 

test('POM for signup page', async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    const signupPage = new Signup(page);
    await signupPage.register("John Doe", "john.doe@example.com", "Test@123");

   
    await expect(page).toHaveURL(/dashboard/); 
});
