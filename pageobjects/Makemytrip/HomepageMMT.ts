import { Page, Locator } from '@playwright/test'

export class HomePageMakeMytrip {
    private page: Page
    private popup: Locator
    private headers: Locator
    private currency: Locator

    constructor(page: Page) {
        this.page = page
        this.popup = page.locator("//span[@data-cy='closeModal']")
        this.headers = page.locator("//ul[@class='makeFlex font12 headerIconsGap']//li")
        this.currency = page.getByTestId("country-lang-switcher")
    }

    async setUp() {
        this.page.goto("https://www.makemytrip.com/")
     //   this.page.waitForLoadState("domcontentloaded")
        try {
            if (await this.popup.isVisible()) {
                await this.popup.click()
            } else {
                console.log("pop-up not displayed")
            }
        } catch (error) {
                
        }
    }
    async verifyHeader() {
        const allheadeers = await this.headers.allTextContents()
        allheadeers.forEach(element => {
            console.log(element)
        });
    }
}

