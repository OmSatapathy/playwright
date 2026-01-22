import{test,expect} from '@playwright/test'

test.use({
    viewport: { width: 1600, height: 1200 },
  });

  test('test file upload',async({page})=>{
      await page.goto("https://demo.automationtesting.in/FileUpload.html")
      await page.locator("//input[@type='file']").setInputFiles("C:\\Users\\OM SATAPATHY\\Downloads\\cat1.jpg")

      await page.waitForTimeout(3000)
  })