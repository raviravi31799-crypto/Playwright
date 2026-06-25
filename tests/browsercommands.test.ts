import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto("https://www.google.co.in");
    const title=await page.title();
    console.log("Title:",title);
    const currenturl=await page.url();
    console.log("CurrentUrl:",currenturl);
    const content=await page.content();
    console.log("Content:",content.substring(0,300));
    await page.waitForTimeout(5000);
    
});