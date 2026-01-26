import { test, expect } from '@playwright/test'
import { Homepagelocator } from '../page/homepage'
import { Recruitmentpage } from '../page/Recruitment'


test.beforeEach(`browser setup`, async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

test('Verify login functionality', async ({ page }) => {

    const obj = new Homepagelocator(page)
    await obj.verifyLogin("Admin", "admin123")

    expect(page.url()).toContain("/dashboard")

    await obj.evaluateSidepanel()
    await page.waitForSelector("//div[@class='oxd-select-text oxd-select-text--active']")

    const obj1= new Recruitmentpage(page)
   await  obj1.selectDropdown()

})