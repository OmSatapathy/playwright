import { Page, Locator } from '@playwright/test'

export class naukariLogin {

    readonly page: Page;
    readonly login: Locator
    readonly email: Locator
    readonly password: Locator
    readonly loginBTN: Locator

    readonly numberOfSearch: Locator




    constructor(page: Page) {
        this.page = page;
        this.login = page.locator("#login_Layer")
        this.email = page.getByPlaceholder("Enter your active Email ID / Username")
        this.password = page.getByPlaceholder("Enter your password")
        this.loginBTN = page.locator("//button[@type='submit']")
        this.numberOfSearch = page.locator("//span[@class='count']")

        //span[@class='count']
    }

    async verifyLogin(usename: string, pwd: string) {

        await this.login.click()
        await this.email.waitFor({ state: 'visible' })
        await this.email.fill(usename)
        await this.password.fill(pwd)
        await this.loginBTN.click()
        await this.page.locator("//div[contains(text(),'Profile performance')]").first().waitFor({ state: 'visible' })
    }

    async countNumbers() {
        try {
            const values = await this.numberOfSearch.all()

            for (const li of values) {
                console.log(await li.textContent())
            }

        } catch (error) {

        }
    }
}