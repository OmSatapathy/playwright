import { test, expect } from "@playwright/test";
import { GauravKhuranPage } from '../page/gauravkhurana/praticsite'

test.use({
    viewport: { width: 1500, height: 1400 }
})

test("verify automation page", async ({ page }) => {

    await page.goto("https://gauravkhurana.com/test-automation-play/")
    await page.locator("//button[contains(text(),'Intermediate')]").waitFor({ state: "visible" })

    const obj = new GauravKhuranPage(page);
    await obj.verifytabs()
    await obj.verifyDropandDrop()
    await obj.mouseHover()
    await obj.verifyRightclick()

    await obj.verifyIframes()


})