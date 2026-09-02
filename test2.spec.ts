import { test, expect } from '@playwright/test';

test('My First Playwright Test - Verify Documentation Page', async ({ page }) => {
  // 1. Navigate to the official Playwright website
  await page.goto('https://playwright.dev');

  // 2. Click on the "Get started" button link
  const getStartedButton = page.locator('text=Get started');
  await getStartedButton.click();

  // 3. Assert that the page URL now contains the word "intro"
  await expect(page).toHaveURL(/.*intro/);
  
  // 4. Assert that the main page header is visible
  const header = page.locator('h1');
  await expect(header).toContainText('Installation');
});