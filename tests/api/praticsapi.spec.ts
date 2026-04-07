import { test, expect, request } from '@playwright/test'


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

test("verify auth token", async ({ request }) => {
    // API expects JSON format with proper headers
    const resp = await request.post("https://billpay-api.gauravkhurana-practice-api.workers.dev/oauth/token",
        { 
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "X-Request-Id": "swagger-test-001"
            },
            data: {
                "grant_type": "client_credentials",
                "client_id": "demo-client",
                "client_secret": "demo-secret-789"
            }
        })

    const code = resp.status()
    console.log("Status Code:", code)

    const value = await resp.json()
    console.log("Response JSON:", value)
    
    expect(code).toBe(200)
    expect(value).toBeDefined()
})