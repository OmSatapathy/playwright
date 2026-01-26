import { Locator, Page } from '@playwright/test'

export class Homepagelocator {

    page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly Loginbutton: Locator;
    readonly sidepannel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username')
        this.password = page.getByPlaceholder('Password')
        this.Loginbutton = page.locator("//button[@type='submit']")
        this.sidepannel = page.locator("//div[@class='oxd-sidepanel-body']//li")
    }


    async verifyLogin(username: string, password: string) {

        await this.username.fill(username)
        await this.password.fill(password)
        await this.Loginbutton.click()
        console.log(await this.page.title())
    }

    async evaluateSidepanel() {
        await this.sidepannel.first().waitFor({ state: 'visible' });
        const allValue = await this.sidepannel.allInnerTexts()
        const count = allValue.length;

        //  console.log(allValue)

        for (let i = 0; i < count; i++) {
            const text = allValue[i];
            if (text.includes("Recruitment")) {
                await this.sidepannel.nth(i).click();
                console.log("clicked")
                break;
            }

        }
    }
}