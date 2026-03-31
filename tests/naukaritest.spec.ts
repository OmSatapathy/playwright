import{test,expect} from '@playwright/test'
import{NaukariHome} from '../page/naukari/Homepage'

test.beforeEach('browssr setup',async({page})=>{

    await page.goto("https://www.naukri.com/")
    await page.waitForLoadState('load')
})

test(`verify naukari homepage`, async({page})=>{

    const obj = new NaukariHome(page);
    await obj.verifyHeader()
    await obj.verifyOpenField()
    await page.waitForTimeout(3000)


})