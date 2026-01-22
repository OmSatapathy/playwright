import { test, expect } from '@playwright/test';

test('Verifying Demo website', async ({ page }) => {

    await page.goto("https://www.automationexercise.com/");
    
    // Get all product price elements
    const allValues = await page.locator("//div[@class='product-image-wrapper']//h2").all();

    let maxValue = 0;
    let maxElement = null;

    for (const single of allValues) {
        let text = await single.textContent();
        let number = parseInt(text.replace(/\D/g, ''), 10) || 0; // Convert to integer, default to 0 if NaN

        console.log(`Extracted Number: ${number}`);

        if (number > maxValue) {
            maxValue = number;
            maxElement = single;
        }
    }

    // Click on the element with the max value (if found)
    if (maxElement) {
        await maxElement.click();
        console.log(`Clicked on the highest value: ${maxValue}`);
    } else {
        console.log("No valid numbers found in the extracted elements.");
    }
});
