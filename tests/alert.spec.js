import { test, expect, request } from '@playwright/test'
test.use({
  viewport: { width: 1500, height: 1400 }
})

test('verify alets', async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html")
  await page.locator("//a[normalize-space()='Alert with Textbox']").click()

  page.on("dialog", a => {

    page.waitForTimeout(2000)
    a.type("testing playwright")
    console.log(a.message())
    a.accept()
  })


  await page.locator("//button[@class='btn btn-info']").click()
  await page.waitForTimeout(2000)
})



test('verify alert present', async ({ page }) => {

  await page.goto("https://gauravkhurana.com/test-automation-play/")
  await page.locator("//button[contains(text(),'Intermediate')]").waitFor({ state: "visible" })
  await page.locator("//button[contains(text(),'Advanced')]").click()


  await page.on('dialog', dialog => dialog.type('we are there'))
  //await page.on('dialog', dialog => dialog.accept())
  await page.getByTestId("show-prompt").click()
  await page.waitForTimeout(3000)



})


test.skip('verify user creation request', async ({ request }) => {
  const payload = {
    "name": "John",
    "email": "john@test.com"
  }

  const response = await request.post("baseurl" + "/api/users", { headers: { "content-type": "appcation/json" }, data: payload })
  const jsonres = await response.json()

  for (const user of jsonres) {
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('role');
  }


      const hasAdmin = users.some(user => user.role === 'admin');


})