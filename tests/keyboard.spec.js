const { test, expect } = require('@playwright/test');

test('verify keyboards', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.locator("//textarea[@name='q']").click();
  await page.keyboard.type('Prime minister');

  await page.waitForSelector("div[role='presentation']");

  const allValues = page.locator("div[role='presentation']");
  const count = await allValues.count();

  for (let i = 0; i < count; i++) {
    const singleVal = await allValues.nth(i).textContent();
    if (singleVal && singleVal.includes('of uk')) {
      await allValues.nth(i).click();
      break;
    }
  }

  await page.waitForTimeout(4000);
});