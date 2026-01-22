import { test, expect, BrowserContext, Page } from '@playwright/test';
import { chromium } from '@playwright/test';

test('Browser Context Tests', async () => {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://naveenautomationlabs.com/')

    console.log((await page.title()).toString());
})
