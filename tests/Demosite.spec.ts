
import { test, expect } from '@playwright/test';
import registeruser from '../testdata/registeruser.json';


test('verify registe page', async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/register")

  for (const user of registeruser) {

    await page.locator("#gender-male").check()
    await page.locator("#FirstName").fill(user.firsname)
    await page.locator("#LastName").fill(user.lastname)
    await page.locator("#Email").fill(user.password)
  }

})


test("verify test via excel data", async({page})=>{
  
})