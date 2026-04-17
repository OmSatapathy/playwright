import{test as base, Page,expect} from '@playwright/test'

type kutrimHome ={
    HomepageKutrim:Page
}

export const test = base.extend<kutrimHome>({
    HomepageKutrim: async ({page},use)=>{
      
     await page.goto("https://www.olakrutrim.com/")
     const alllinkes =    await page.locator("//a[@target='_blank']")
     const size =  await alllinkes.count()
     for(let i =0; i< await size; i++){
        const singlelink =   await alllinkes.nth(i).textContent()
        console.log(singlelink)
     }

     await use(page)
    }
  })


export {expect}