import { test, expect, Browser } from '@playwright/test'

test('Verify window handling', async ({ browser }) => {


    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.waitForLoadState("domcontentloaded")



    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("(//div[@class='social-btns'])[1]//a[1]").click(),
        page.locator("(//div[@class='social-btns'])[1]//a[2]").click(),
        page.locator("(//div[@class='social-btns'])[1]//a[3]").click(),

    ]);


    await newPage.waitForLoadState("load");
    console.log(await newPage.title())

    await newPage.bringToFront()
    console.log(await page.title())

})