
import {test,expect} from '@playwright/test'
import { readExcelfile } from '../utilities/readexcel'

const testData = readExcelfile('testdata/exceldatas.xlsx', 'Sheet1')

testData.forEach((data: any, index: number) => {

    test(`Login Test ${index}`, async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.fill('#user-name', data.username);
        await page.fill('#password', data.password);

        await page.click('#login-button');

        // assertion
        await expect(page).toHaveURL(/dashboard/);
    });

});

