import {chromium,test} from "@playwright/test"
test("Login Test",async()=>{
    const browser=await chromium.launch({
        headless:false
    });
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://www.demoblaze.com/");
    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']","Admin@5");
    await page.fill("//input[@id='loginpassword']","12345");
    await page.click("//button[text()='Log in']")
    page.waitForTimeout(5000);


//    const page1 =await context.newPage();
//    await page1.goto("https://www.demoblaze.com/cart.html");
//    page.waitForTimeout(5000);
    const NewContext=await browser.newContext();
    const Newpage=await browser.newPage();
    await Newpage.goto("https://www.demoblaze.com/cart.html");
    page.waitForTimeout(5000);
});