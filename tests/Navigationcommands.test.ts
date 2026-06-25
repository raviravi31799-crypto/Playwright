import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto("https://www.google.co.in");
    await page.waitForTimeout(5000);

    await page.goto("https://www.flipkart.com");
    await page.waitForTimeout(5000);
    await page.goBack();

    await page.goForward();
    await page.waitForTimeout(5000);
    await page.reload();//refresh
    
    
})