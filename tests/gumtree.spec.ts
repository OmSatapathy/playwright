import { test, expect } from '@playwright/test'
import { gumtreeHome } from '../page/gumtree/homepage'

test('Verify Gumtree website', async ({ page }) => {
    await page.goto("https://www.gumtree.com/")

    const obj = new gumtreeHome(page)
    await obj.navigation()
    await obj.verifyCar()

    expect(await page.url()).toContain('/cars')

})


test("verify carrer page", async ({ page }) => {

    await page.goto("https://willwaretech.com/career/")
    await page.waitForLoadState("domcontentloaded")

    await page.locator("//div[@class='career-part']").waitFor({state:'visible'})

    const alliteam = await page.locator("//div[@class='career-part']")
    

    const total = await alliteam.count()

    for (let i = 0; i < total; i++) {
       const values = await alliteam.nth(i).textContent()
        console.log(values)
    }

})