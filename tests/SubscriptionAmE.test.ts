import { test,expect } from '@playwright/test';
test("Subscription",async({page})=>{
    await page.goto("https://automationexercise.com/");
     await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();
    console.log("Successfully navigated to homepage");
    const subscribe = page.getByPlaceholder("Your email address");
    await subscribe.scrollIntoViewIfNeeded();
    await subscribe.fill("Usha@gmail.com");
    await page.locator("//button[@id='subscribe']").click();
    await expect(page.locator(".alert-success.alert")).toBeVisible();
    
    console.log("Subscribed successfully");

    
})
