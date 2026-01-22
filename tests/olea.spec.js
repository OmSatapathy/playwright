
import{test,expect} from '@playwright/test'

test('verify olea title', async({page})=>{


    await page.goto("https://www.google.com/")
    await page.locator("//textarea[@name='q']").fill('Olea Global')
    await page.waitForTimeout(2000)

    const allElements = await page.locator("//div[@role='presentation']").all();

    for (const ele of allElements) {
        const text = await ele.textContent();
        if (text.includes("Olea Global")) {
            await page.waitForTimeout(2000)
            await ele.click();
            break; 
        }
    }
})