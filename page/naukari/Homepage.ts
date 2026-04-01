import { Page, Locator } from '@playwright/test'

export class NaukariHome {
    readonly page: Page;
    readonly headers: Locator;
    readonly loginBtn: Locator;
    readonly registerBTN: Locator;
    readonly headerDropdown: Locator
    readonly enterskillFiled: Locator;
    readonly selectExp: Locator;

    readonly listOfTitle: Locator
    readonly numberofExp: Locator

    readonly topcompanies: Locator
    readonly paginationBtn: Locator

    constructor(page: Page) {
        this.page = page;
        this.headers = page.locator("#nI-gNb-menus")
        this.loginBtn = page.locator(".login_Layer")
        this.registerBTN = page.locator(".register_Layer")
        this.headerDropdown = page.getByText('For employers')
        this.enterskillFiled = page.getByPlaceholder("Enter skills / designations / companies")
        this.selectExp = page.getByPlaceholder('Select experience')

        this.listOfTitle = page.locator("//li[@class='tuple-wrap ']")
        this.numberofExp = page.locator("//ul[@class='dropdown ']//li")

        this.topcompanies=page.locator("//span[@class='industry-card ']")
        this.paginationBtn=page.locator("//div[@class='swiper-button-next' and @role ='button']")
    }



    async verifyHeader() {
        const total = await this.headers.count();

        for (let i = 0; i < total; i++) {
            const text = await this.headers.nth(i).innerText();
            console.log(`Header ${i}: ${text.trim()}`);
        }
    }

    async verifyOpenField() {
        await this.enterskillFiled.fill("Lead QA");

        await this.listOfTitle.first().waitFor({ state: 'visible' });

        const count = await this.listOfTitle.count();
        let found = false;

        for (let i = 0; i < count; i++) {
            const text = await this.listOfTitle.nth(i).innerText();
            const cleanText = text.trim();

            console.log(`Job ${i}: ${cleanText}`);
            if (cleanText.includes('Lead Quality Engineer')) {
                console.log('✅ Found matching job, clicking...');

                await this.listOfTitle.nth(i).click();
                found = true;
                break; 
            }

        }
        if (!found) {
            throw new Error('❌ Lead Quality Engineer job not found');
        }
    }

    async verifyLogin(){
       await this.headerDropdown.hover()
       await this.page.locator("//*[contains(text(),'Employer Login')]").click()
    }



    async verifyTopCompanies(){
        try {
           const companiescount=  await this.topcompanies.count()
           for (let i =0; i< companiescount; i++){
              await this.topcompanies.nth(i).textContent()
              console.log(await this.topcompanies.nth(i).textContent())
           }
            
        } catch (error) {
            console.log(error)
        }
    }

    
}