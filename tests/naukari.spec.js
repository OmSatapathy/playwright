import{test,expect} from '@playwright/test'
const NaukariPage = require('../pageobjects/naukariPOM')

test('verify naukari profile',async({page})=>{

    await page.goto("https://www.naukri.com/")

    const naukariobj = new NaukariPage(page);
    await   naukariobj.userLogin()

    await expect(page).toHaveTitle('Home | Mynaukri')
    await naukariobj.userDetails() 

    const allPerformance = await page.locator("//div[@class='profile-perf-content']").all();

    for (const unique of allPerformance) {
        let rawText = await unique.textContent();
        let formattedText = formatText(rawText);
        console.log(formattedText);
    }
    
     function formatText(text) {
        return text.replace(/(\D+)(\d+)/g, '$1 : $2   ').trim();
    }

 const jobDetails=   await page.locator("//div[@class='tab-list-item']").all()

   for(const jobDtl of jobDetails){
       const text = await jobDtl.textContent()
       console.log(text)
   }

})