
import { test, expect } from '@playwright/test'

test("Verify random bank page", async ({ page }) => {
    await page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")

    await page.waitForLoadState("domcontentloaded")
    await page.locator("//button[contains (text(),'Customer Login')]").click()

    await page.locator("//select[@id='userSelect']").selectOption({ index: 4 })


    const value = await page.locator("//select[@id='userSelect']").textContent()

    console.log(value)

    await page.locator("//button[@type='submit']").click()

    
})