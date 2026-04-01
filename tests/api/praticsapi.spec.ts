import { test, expect, request } from '@playwright/test'
import { console } from 'inspector'

test('check api health', async ({ request }) => {

    const res = await request.get("https://billpay-api.gauravkhurana-practice-api.workers.dev/health",
        { headers: { "content-type": "application/json" } })

    const jsonValue = await res.json()
    const headers = await res.headers()

    console.log(jsonValue.data.service)
    expect(res.status()).toBe(200)
    expect(jsonValue.data.status).toBe('healthy')
})

test("check db health", async ({ request }) => {

    const resp = await request.get(
        "https://billpay-api.gauravkhurana-practice-api.workers.dev/health/db",
        {
            headers: {
                "content-type": "application/json", "User-Agent": "curl/7.79.1" 
            }
        }
    );

    expect(resp.status()).toBe(200);

    const value = await resp.text();

   try {
        const json = JSON.parse(value);
        console.log("JSON:", json);
    } catch (e) {
        console.log("⚠️ Not a JSON response");
    }

});

