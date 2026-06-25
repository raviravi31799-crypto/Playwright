import { chromium } from 'playwright';
(async () => {
    //launch browser
    const browser = await chromium.launch({
        headless: false
    });
    //new broser context(isolated session or incognito window)
    const context = await browser.newContext();
    //new page(new tab)
    const page = await context.newPage();
    //Maximize window
    await page.setViewportSize({
        width: 1920, height: 1080,
    });
    await page.goto("https://www.google.co.in");
    await page.waitForTimeout(5000);
    await browser.close();
})();
