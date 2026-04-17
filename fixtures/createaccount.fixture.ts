import{test as base, Page,expect} from '@playwright/test'

type Register ={
    registeruser:Page;
}

export const test = base.extend<Register>({

     registeruser: async({page},use)=>{
        await page.goto("https://cloud.olakrutrim.com/signUp")
        await page.getByPlaceholder('Enter your first name').fill('')
        await page.getByPlaceholder('Enter your last name').fill('')
        await page.getByPlaceholder('Enter your email address').fill('')
        await page.getByPlaceholder('Enter your mobile number').fill('')
        await page.locator("#password").fill('')
        await page.locator("#confirmPassword").fill('')

        await use(page)
     }

})

export {expect}