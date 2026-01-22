const { test, expect } = require('@playwright/test');

test('Verify GET response from API', async ({ request }) => {
    const url = 'https://api.restful-api.dev/objects';
    
    const response = await request.get(url);
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);
    
    responseBody.forEach(item => {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('name');
        expect(item).toHaveProperty('data');
        
        if (item.data) {
            expect(typeof item.data).toBe('object');
        }
    });
    
    console.log(`Status: ${response.status()}`);
    console.log(`Response: ${JSON.stringify(responseBody, null, 2)}`);
});