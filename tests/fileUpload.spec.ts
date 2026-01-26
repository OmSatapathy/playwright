import{test,expect} from '@playwright/test'

test('verify file upload functionalty', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    await page.setInputFiles("//input[@type='file']", "C:\\Users\\OM SATAPATHY\\Downloads\\ques.txt")

    await page.waitForTimeout(3000)

})

