
import { test, expect, request } from '@playwright/test'

test(" verift get list", async ({ request }) => {
    const respons = await request.get("https://www.amazon.in?product=refrigerator",)

    const jsonvalue = await respons.json()

    const allvaluesApi = await jsonvalue.data()
})



test("test amazon search", async ({ page }) => {

    await page.goto("https://www.amazon.in/")
    await page.locator("#twotabsearchtextbox").fill("refrigerator")

  //  await page.locator("//input[@type='submit']").click()


    const allsuggest = await page.locator("//div[@id='sac-suggestion-row]")
    await page.waitForTimeout(3000)
    const size = allsuggest.count()

    for (let i = 0; i < await size; i++) {
        try {
            const value = await allsuggest.nth(i).textContent()

            expect(value).toContain("refrigerator")
        } catch (error) {
            console.log("element not found")
        }


    }
})



test(" amazon website automation", async ({ page,request }) => {

      const apiResponse = await request.get(`https://www.amazon.in/api/search?query=refrigerator`)
      expect(apiResponse.ok()).toBeTruthy()
      const apiData = await apiResponse.json();

     const apiProductNames: string[] =   apiData.iteams.map((item:any) =>item.title.trim())

    await page.goto("https://www.amazon.in/")
    await page.locator("#twotabsearchtextbox").fill("refrigerator")
    await page.waitForTimeout(3000)
    const allItems = await page.locator("//div[starts-with(@id,'sac-suggestion-row')]")

    const size = allItems.count()

    for (let i = 0; i < await size; i++) {

        try {

            const singleIteam = await allItems.nth(i).textContent()
            expect(singleIteam).toContain('refrigerator')
            console.log(singleIteam)

        } catch (error) {

        }



    }
})