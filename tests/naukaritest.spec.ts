import { test, expect, Browser, chromium } from '@playwright/test'
import { NaukariHome } from '../page/naukari/Homepage'

test.use({
    viewport: { width: 1500, height: 1550 }
})

test.beforeEach('browssr setup', async ({ page}) => {


    await page.goto("https://www.naukri.com/")
    await page.waitForLoadState('load')
})

test(`verify naukari homepage`, async ({ page }) => {

    const obj = new NaukariHome(page);
    await obj.verifyHeader()
    await obj.verifyOpenField()
    await page.waitForTimeout(3000)
    await obj.verifyLogin()

    const currentURL = await page.url()

    expect(currentURL).toContain('/recruit/login')

})

test("verify trending jobs", async ({ page }) => {
    await page.locator("//div[@class='naukri-trending-container']//div//a").first().waitFor({ state: 'visible' })

    const totalTrendingjob = await page.locator("//div[@class='naukri-trending-container']//div//a").count()

    for (let i = 0; i < await totalTrendingjob; i++) {
        const value = await page.locator("//div[@class='naukri-trending-container']//div//a").nth(i).textContent()
        console.log(value?.trim())
        if (value?.includes('Internship')) {
            await page.locator("//div[@class='naukri-trending-container']//div//a").nth(i).click();
            break;
        }

        const currentURL = await page.url()
        console.log(currentURL)
    }
})

test('verifing top companies', async ({ page }) => {

    const obj = new NaukariHome(page);
    await obj.verifyTopCompanies()


})