import { test, expect } from '../fixtures/kutrim.fixture'

test('validate homepage', async({HomepageKutrim}) =>{

   await expect(HomepageKutrim).toHaveURL('https://www.olakrutrim.com');
})