import{test,expect} from '@playwright/test'

test('verify alets', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")
    await page.locator("//a[normalize-space()='Alert with Textbox']").click()

     page.on("dialog",a=>{
       
        page.waitForTimeout(2000)
        a.type("testing playwright")
        console.log(a.message())
        a.accept()
      })

  
    await page.locator("//button[@class='btn btn-info']").click()
    await page.waitForTimeout(2000)
})