import { test, expect } from '../fixtures/saucedemo.fixture';

test.describe('Post Login Tests', () => {

  test('Verify user is logged in successfully', async ({ loginfixture }) => {

    // Example assertion - adjust based on actual UI
    await expect(loginfixture).toHaveURL(/account/);

  })

  })