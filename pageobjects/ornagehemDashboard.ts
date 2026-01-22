import{Page,Locator} from'@playwright/test';

export class dashboardPage {

    readonly page: Page;
    readonly job: Locator;
    readonly organization: Locator; 
    readonly qualifications: Locator;

    constructor(page: Page) {
        this.page = page;
        this.job =page.locator("//span[contains(text(),'Job ')]");
        this.organization =page.locator("//span[contains(text(),'Organization ')]");
        this.qualifications =page.locator('text=Qualifications');
    }

    async navigateToQualifications() {
    
        await this.job.hover();
        await this.job.click();
        await this.organization.hover();
        await this.qualifications.click();

    }

}