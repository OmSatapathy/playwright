import { Locator, Page } from '@playwright/test'

export class Recruitmentpage {

    page: Page;
    readonly jobtitle: Locator
    // readonly vacency: Locator
    // readonly hiringmanger: Locator
    // readonly status: Locator
    // readonly cadidateName: Locator
    // readonly applicationMode: Locator

    constructor(page: Page) {
        this.page = page
        this.jobtitle = page.locator("//div[@class='oxd-select-text-input']")
    }

    async selectDropdown() {
        await this.page.waitForTimeout(1000)
        await this.jobtitle.first().click()
        await this.page.waitForTimeout(3000)
        const values = await this.page.locator("//div[@role='listbox']").allTextContents()

        for (const value of values) {

            console.log(value);
        }

        const options = this.page.locator("div[role='option'].oxd-select-option");
        const count = await options.count();

        for (let i = 0; i < count; i++) {
            const text = await options.nth(i).textContent();
            if (text && text.includes("HR Associate")) {
                await options.nth(i).click();
                break;
            }
        }
             
        console.log(await options.allTextContents());
        await this.page.waitForTimeout(2000)


    }
}
