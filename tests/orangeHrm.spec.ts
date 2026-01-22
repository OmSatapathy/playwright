import{test,expect}from'@playwright/test';
import { OrangeHrm } from '../pageobjects/orangehrm';
import { dashboardPage } from '../pageobjects/ornagehemDashboard';

test.describe('OrangeHRM Login Tests', () => {
    const url = 'https://opensource-demo.orangehrmlive.com/';

    test.beforeEach(async ({ page }) => {
        await page.goto(url);
    });

    test('Valid Login Test', async ({ page }) => {
        const orangeHrm = new OrangeHrm(page);
        await orangeHrm.login('Admin', 'admin123');     
        await expect(page).toHaveURL(/dashboard/);
    })

    test('verify dashboard pages', async ({ page }) => {

          const orangeHrm = new OrangeHrm(page);
        await orangeHrm.login('Admin', 'admin123'); 
        await page.waitForLoadState('load')    
        await expect(page).toHaveURL(/dashboard/);

        const obj = new dashboardPage(page);
        await obj.navigateToQualifications();
        //await expect(page).toHaveURL(/viewQualifications/);

        await page.waitForLoadState('domcontentloaded')
        })
    })
     