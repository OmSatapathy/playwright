import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from '@playwright/test';

test('Github login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto('https://github.com/login');

    await page.fill('input[name="login"]', 'omsatapathy7');
    await page.fill('input[name="password"]', 'your-password');
    await page.click('input[name="commit"]');

    await page.title().then(title => {
        expect(title).toBe('Sign in to GitHub · GitHub');
        expect(title).toContain('Sign in');

    })

    const textmsg = await page.getByRole('alert');
    await expect(textmsg).toHaveText('Incorrect username or password.');

    await browser.close();


})


test("youtube automation", async () => {

    const browser: Browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    const page: Page = await context.newPage()

    await page.goto('https://www.youtube.com/');
    await page.getByRole('combobox', { name: 'Search' }).click();

    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('cypress by testers talk')

    await page.getByRole('button', ({ name: 'search' })).nth(1).click()

    await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();

    await page.waitForTimeout(5000);

    const currenttitle = await page.title();

    console.log(currenttitle)

    expect(currenttitle).toContain('Cypress Tutorial Full Course | Cypress Automation ')
    await browser.close()
})