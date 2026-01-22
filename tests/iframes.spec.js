import{test,expect} from '@playwright/test'

test('handing of iframes', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    await page.waitForTimeout(3000)
    const parentFrame = page.frameLocator("iframe#singleframe");

    // Locate input field inside the iframe and perform actions
    await parentFrame.locator("input[type='text']").click();
    await parentFrame.locator("input[type='text']").fill("rakesh");
    await page.waitForTimeout(3000)

})

