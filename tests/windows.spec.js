import { test, expect } from '@playwright/test'
import { promises } from 'dns'

test('handling multiple window', async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.browserstack.com/")
    const [newPage] = await Promise.all
        (
            [context.waitForEvent("page"),
            page.locator("//a[@title='Facebook']").click()

            ]
        )

    await page.waitForLoadState();
    await newPage.locator("(//input[@name='email'])[2]").fill('anish@gmail.com')
    const currentURL = await newPage.url()
    console.log(currentURL)
})


test('demo site window', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://demo.automationtesting.in/Windows.html")

    await page.click("//a[contains(text(),'Open New Seperate Windows')]")

    const [newPage] = await Promise.all(
        [
            context.waitForEvent("page"),
            page.locator("//button[@class='btn btn-primary']").click()
        ]
    )

    await newPage.waitForLoadState()
    const url = newPage.url()
    console.log(url)
    await newPage.close()

    const url1 = page.url()
    console.log(url1)
})