const { test, expect } = require('@playwright/test');

test('POST request to API', async ({ request }) => {
    const url = 'https://api.restful-api.dev/objects';
    const payload = {
        name: "Apple MacBook Pro 16",
        data: {
            year: 2019,
            price: 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    };

    const response = await request.post(url, {
        headers: { 'Content-Type': 'application/json' },
        data: payload
    });

    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.name).toBe(payload.name);
    expect(responseBody.data).toMatchObject(payload.data);

    console.log(`Status: ${response.status()}`);
    console.log(`Response: ${JSON.stringify(responseBody, null, 2)}`);
});
