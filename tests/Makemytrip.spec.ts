import{test,expect} from '@playwright/test'
import{HomePageMakeMytrip} from '../pageobjects/Makemytrip/HomepageMMT'

test('Test makemy trip page', async({page})=>{
        const obj = new HomePageMakeMytrip(page);
        await obj.setUp()
        

})