import { test, expect } from '@playwright/test';
test("Login",async({page})=>{
    await page.goto("https://automationexercise.com");
    await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();
    await page.locator("//i[@class='fa fa-lock']").click();
    const loginpanel=await page.getByText("Login to your account");
    await expect(loginpanel).toBeVisible();
    await page.locator("//input[@data-qa='login-email']").fill("UshaRanjith@gmail.com");
    await page.locator("//input[@data-qa='login-password']").fill("Usha15");
    await page.locator("//button[@data-qa='login-button']").click();
    const Name=await page.locator("//i[@class='fa fa-user']/parent::a").textContent();
    await expect(Name).toEqual(" Logged in as Joshi");
    console.log("User name is visible");
    const Delete=await page.locator("//i[@class='fa fa-trash-o']/parent::a");
    await Delete.click();
    await expect(page.locator("//h2[@data-qa='account-deleted']")).toBeVisible();
    console.log("Account deleted successfully");

});
