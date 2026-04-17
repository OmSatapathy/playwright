import { test as base, expect, Page } from '@playwright/test'

type myfixture = {
    loginfixture: Page
}


export const test = base.extend<myfixture>({
    loginfixture: async ({ page }, use) => {

        await page.goto("https://sauce-demo.myshopify.com/account/login")
        await page.locator("#customer_email").fill("abcd@gmail.com")
        await page.locator("#customer_password").fill("63664")
        await page.locator("//input[@class='button']").click()

        await use(page)

    }


})

export { expect }