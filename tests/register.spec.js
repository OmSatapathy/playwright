import{test,expect} from '@playwright/test'


test.beforeEach('user registation',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html")
    const pagetitle=   await page.title();
    
    expect.soft(pagetitle).toBe('Register')
})

test('user details', async({page})=>{

    await page.getByPlaceholder('First Name').fill('madhav')
    await page.getByPlaceholder('Last Name').fill('Kapoor')

    await page.locator("//input[@type='email']").fill('madhav562@gmail.com')
    await page.locator("//input[@type='tel']").fill('848877357')

    await page.waitForTimeout(3000)
})

test('user personal details', async({page})=>{
    await page.locator("(//input[@type='radio'])[1]").click()
    await page.locator("(//input[@type='checkbox'])[1]").click()

    const skills = page.locator("//select[@id='Skills']");
    await skills.selectOption({ value: 'Android' });


    const skills2 = page. locator("//select[@id='Skills']")
    await skills2.selectOption({value : 'Client Support'})

    await page.waitForTimeout(3000)
    await skills2.selectOption({index: 8})
    await page.waitForTimeout(3000)
})


test('select calender model', async({page})=>{
      const year=   await page.locator("//select[@id='yearbox']")
      await year.selectOption({value : '2005'})
      await page.waitForTimeout(3000)
      await year.selectOption({label : '2010'})  
      
})


test('alerts handler test', async({page})=>{

    await page.hover("//a[contains(text(), 'SwitchTo')]")
    await page.locator("//*[contains(text(), 'Alerts')]").click()
    await page.waitForTimeout(3000)
    const pagetitle = await page.title()

    await expect(pagetitle).toBe('Alerts')

    page.on('dialog', dialog => dialog.accept());
    await page.locator("//div[@id='OKTab']").click();

    await page.locator("//a[@href='#CancelTab']").click()

    page.on('dialog', d=>d.dismiss)
    await page.locator("//div[@id='CancelTab']").click();
    const textvalue = await page.locator("//*[@id='demo']").innerText()
    console.log(textvalue)
    



})


test('promt alert handle',async({page})=>{

    await page.hover("//a[contains(text(), 'SwitchTo')]")
    await page.locator("//*[contains(text(), 'Alerts')]").click()
    await page.waitForTimeout(3000)
    const pagetitle = await page.title()

    await page.locator("//a[@href='#Textbox']").click()
    await page.waitForTimeout(3000)
    page.on('dialog',async(d)=>{
        await page.waitForTimeout(3000)
          d.type("Om prakash")
          const msg =  d.message()
          console.log(msg)
          d.accept()
 
    })
    await page.locator("//button[@class='btn btn-info']").click()
 
})