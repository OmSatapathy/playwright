import{test,expect} from '@playwright/test'

test('window handler', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

   const frameLoc= await page.frameLocator("//iframe[@name='SingleFrame']")
   await frameLoc.locator("//input[@type='text']").fill("i am inside frame")

   await page.waitForTimeout(2000)
})