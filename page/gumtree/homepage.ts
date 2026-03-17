import { Page, Locator } from '@playwright/test'

export class gumtreeHome {

    readonly page: Page;
    readonly acceptCokkies: Locator;
    readonly headers: Locator;
    readonly carvaichel: Locator

    constructor(page: Page) {
        this.page = page;
        this.acceptCokkies = page.locator("//button[@id='onetrust-reject-all-handler']")
        this.headers = page.locator("//div[@class='grid grid--item grid--col-12']")
        this.carvaichel = page.locator("//span[contains(text(),'Cars & Vehicles')]")
    }

    async navigation() {

        await this.acceptCokkies.click()

        const allValues = await this.headers;
        const count = await allValues.count()

        for (let i = 0; i < count; i++) {
            const value = await allValues.nth(i).textContent()
        }
    }

    async verifyCar() {
        await this.carvaichel.hover()
        await this.page.locator("//a[contains(text(),'Cars')]").first().click()

        await this.page.getByPlaceholder("Postcode or location").nth(1).waitFor({state: "attached"})

        const content = await this.page.getByPlaceholder("Postcode or location").nth(1).innerText()

        console.log(content)
    }
}
