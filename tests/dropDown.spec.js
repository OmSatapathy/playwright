const { test, expect } = require('@playwright/test');

test('dropdown selection test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');

  // Option 1: Using selectOption with label
  await page.locator("//select[@name='state']").selectOption({ label: 'Assam' });
  await page.waitForTimeout(1000); // Reduced timeout

  // Option 2: Using selectOption with value
  await page.locator("//select[@name='state']").selectOption({ value: 'Jammu and Kashmir' });
  await page.waitForTimeout(1000); // Reduced timeout

  // Get all options and print their text content
  const states = page.locator("//select[@name='state']");
  const allStates = states.locator("option");
  const count = await allStates.count(); // Get the count of options

   let status=false;
  for (let i = 0; i < count; i++) {
    const item = allStates.nth(i); // Use nth() to get the specific locator
    const value = await item.textContent(); // Await textContent()
    console.log(value);

    if(value.includes("Mizoram")){
              status=true;
              break;
    }
    
}
await expect(status).toBeTruthy()

await page.locator("//select[@id='hobbies']").selectOption(['Reading','Playing'])
await page.waitForTimeout(3000)
});