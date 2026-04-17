import { test, expect } from '@playwright/test'
import { readExcelfiles } from '../../utils/datadriven'

const testData = readExcelfiles('testdata/registerDetails.xlsx', 'Sheet1')
testData.forEach((data: any, index: any) => {
    test(`test with excel data  ${index}`, async ({ page }) => {

        await page.goto("https://demowebshop.tricentis.com/register")

        await page.locator("#FirstName").fill(data.firstname)
        await page.locator("#LastName").fill(data.lastname)
        await page.locator("#Email").fill(data.email)
    })

})