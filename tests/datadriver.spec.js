import { test, expect } from '@playwright/test';
const testdata = JSON.parse(JSON.stringify(require("../testdata/userdetails.json")));

test('login with multiple testdata', async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  // Assuming your testdata.json is an array of user objects.
  if (Array.isArray(testdata)) {
    for (const user of testdata) {
      await page.locator("input[placeholder='Enter Email']").fill(user.email);
      // Add other interactions here, like filling password and clicking login.
      // Example:
      await page.locator("input[placeholder='Enter Password']").fill(user.password);
      await page.locator("button[type='submit']").click();

      await page.waitForTimeout(2000)
      
      await page.goto("https://freelance-learn-automation.vercel.app/login"); // Or use page.reload()

    }
  } else {
    // If testdata is a single object, you can still use it.
    await page.locator("input[placeholder='Enter Email']").fill(testdata.email);
    await page.waitForTimeout(2000)

    // add other interactions here.
  }
});