import { test, Locator, Page } from '@playwright/test'



export class GauravKhuranPage {
    page: Page;
    readonly headers: Locator;
    readonly intemediateTab: Locator;
    readonly dropfrom: Locator;
    readonly dropTo: Locator


    constructor(page: Page) {
        this.page = page;
        this.headers = page.locator("//button[@type='button' and @role='tab']")
        this.intemediateTab = page.locator("//button[contains(text(),'Intermediate')]")
        this.dropfrom = page.getByTestId("drag-item-item-4");
        this.dropTo = page.getByTestId("drop-zone")

    }

    async browserOpen() {
        await this.page.goto("https://gauravkhurana.com/test-automation-play/")
        await this.headers.first().waitFor({ state: "visible" })

    }

    async verifytabs() {
        const alltab = await this.headers
        const alltabscount = alltab.count()

        for (let i = 0; i < await alltabscount; i++) {
            await alltab.nth(i).textContent()
            {
                if (await alltab.nth(i).textContent() == 'Intermediate') {
                    await alltab.nth(i).click()
                    break;
                }
            }

        }

    }

    async verifyDropandDrop() {
        await this.page.dragAndDrop('[data-testid="drag-item-item-4"]', '[data-testid="drop-zone"]')
        const value = await this.dropTo.textContent()
        console.log(value)

    }

    async mouseHover() {
        await this.page.getByTestId("hover-item-1").hover()
        const value1 = await this.page.getByTestId("hover-item-1").innerText()
        console.log(value1)

    }

    async verifyRightclick() {
        await this.page.getByTestId("context-item-1").click({ button: 'right' })
        await this.page.getByTestId("autocomplete-input").click()
        await this.page.getByTestId("autocomplete-input").fill('a')
        const values = await this.page.locator("//div[@data-testid='suggestions-dropdown']//div")
        const total = values.count()

        for (let i = 0; i < await total; i++) {
            await values.nth(i).textContent()
            console.log(await values.nth(i).textContent())

        }


    }

}

