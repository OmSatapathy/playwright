import{test,expect} from '@playwright/test'

test.use({
    viewport: { width: 1600, height: 1200 },
  });

test('saucelab login test', async({page})=>{
   await page.goto('https://www.saucedemo.com/v1/')

  await  page.locator("//input[@id='user-name']").fill('standard_user')
  await  page.locator("//input[@id='password']").fill('secret_sauce')

  await  page.locator("//input[@id='login-button']").click()
   
 await expect(page).toHaveURL(/.*inventory.html/)

 const itemLocators  = await page.locator("//div[@class='inventory_item_name']")
 const itemCount = await itemLocators.count();
 const itemNames = [];

 for (let i = 0; i < itemCount; i++) {
   const itemName = await itemLocators.nth(i).innerText();
   itemNames.push(itemName);
 }

 console.log("Inventory Item Names (innerText):");
 for (const name of itemNames) {
   console.log("- " + name);
 }
 expect(itemNames.length).toBe(6);
})



test('saucelab inventory items simple', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator("#user-name").fill('standard_user');
  await page.locator("#password").fill('secret_sauce');
  await page.locator("#login-button").click();
  await expect(page).toHaveURL(/.*inventory.html/);

  const itemNames = await page.locator(".inventory_item_name").allTextContents();

  itemNames.forEach(name => console.log("- " + name));
  expect(itemNames.length).toBe(6);

 const itemValues = await page.locator("//div[@class='inventory_item_price']").allTextContents()
 itemValues.forEach(price => console.log("- " + price));

 const itemPrices = itemValues.map(price => parseFloat(price.replace('$', '')));

 // Find the highest price
 const highestPrice = Math.max(...itemPrices);
 console.log(`Highest Price: $${highestPrice}`);
});