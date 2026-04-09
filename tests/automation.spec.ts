import { test, expect } from '@playwright/test'

test("verifying blogpost website", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#male").check()

    await page.locator("#male").scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    const allDays = await page.locator("//input[@class='form-check-input']")

    const size = await allDays.count()

    for (let i = 0; i < await size; i++) {

        await allDays.nth(i).click()
    }

    await page.locator("#country").selectOption({ value: "canada" })
    await page.waitForTimeout(2000)
})

test("verify more logics", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#colors").scrollIntoViewIfNeeded()

    await page.locator("#colors").selectOption({ value: "green" })
    await page.locator("#colors").selectOption({ value: "red" })
    await page.waitForTimeout(2000)
})


test("verify brokenlinks", async ({ page, request }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    const links = (await page.$$eval('a', as => as.map(a => a.href))).filter((href: string) => href.startsWith('http'))

    let brokenCount = 0;

    // Check each link
    for (const link of links) {
        const res = await request.get(link);

        if (res.status() >= 400) {
            console.log(`❌ Broken: ${link} -> ${res.status()}`);
            brokenCount++;
        }
    }

    console.log(`Total Broken Links: ${brokenCount}`);
})