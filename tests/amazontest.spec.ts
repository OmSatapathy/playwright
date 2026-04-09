
import { test, expect, request, Browser, chromium } from '@playwright/test'
import userdetails from '../testdata/userdetails.json'
import { ExcelDataType } from 'xlsx'
import * as XLSX from 'xlsx';

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



test(" amazon website automation", async ({ page, request }) => {

    const apiResponse = await request.get(`https://www.amazon.in/api/search?query=refrigerator`)
    expect(apiResponse.ok()).toBeTruthy()
    const apiData = await apiResponse.json();

    const apiProductNames: string[] = apiData.iteams.map((item: any) => item.title.trim())

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


test(`learing map and filter`, async ({ }) => {

    const arr: number[] = [4, 5, 6, 7, 2];

    const result1: number[] = arr.map((a) => a * 2)
    console.log(result1)

    const strval: string[] = arr.map((val) => val.toString())
    console.log(strval)

    const val2 = arr.filter((cur) => cur > 3)
    console.log(val2)


    const str: string[] = ["Abc", "raja", "mahesh", "umesh"]

    const val3 = str.filter((a) => a.match('esh'))
    console.log(val3)


})


test("read json data", async ({ }) => {

    for (const jvalue of userdetails) {
        console.log(jvalue.email)
        console.log(jvalue.password)
    }

})

test("read excel data", async () => {

    const workbook = XLSX.readFile('testdata/exceldatas.xlsx');
    // Get first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert to JSON
    const data = XLSX.utils.sheet_to_json(sheet);

    //console.log(data);

    for (const d of data as any[]) {
        console.log(d.username)
    }

})


test("window handling", async ({ browser }) => {

    const browers = await chromium.launch()

    const context = await browers.newContext()

    const page = await context.newPage()

    await page.goto("https://sauce-demo.myshopify.com/")
    const pages: any = [];

    for (let i = 0; i < 3; i++) {
        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            page.locator("//a[@target='_blank']").nth(i).click()
        ]);
        await newPage.waitForLoadState();
        pages.push(newPage);
    }

    for (const p of pages) {
        console.log(await p.title());
    }

})