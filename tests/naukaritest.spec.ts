import { test, expect, Browser, chromium } from '@playwright/test'
import { NaukariHome } from '../page/naukari/Homepage'
import{naukariLogin} from '../page/naukari/Login'

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

test('verify login', async({page})=>{

    const obj = new naukariLogin(page);
    await obj.verifyLogin("omops92@gmail.com","hpprobook4410")

    expect(await page.url()).toBe('https://www.naukri.com/mnjuser/homepage')

    await obj.countNumbers()

    await page.locator("//a[@title='About us']").scrollIntoViewIfNeeded()

    const allLinks = await page.locator("//a[@target='_blank']")
    for(let i =0; i< await allLinks.count(); i++){
        const values = await allLinks.nth(i).textContent()
         if(values?.includes('View top skills')){
            await allLinks.nth(i).click()
            break
         }
        console.log(values)
    }
})