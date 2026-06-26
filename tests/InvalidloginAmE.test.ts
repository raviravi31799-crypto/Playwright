import{test,expect} from "@playwright/test";
test("Invalid Login",async({page})=>{
    await page.goto("https://automationexercise.com");
    await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();
    console.log("Navigated to home page");
    await page.locator("//i[@class='fa fa-lock']").click();
    const loginpanel=await page.getByText("Login to your account");
    await expect(loginpanel).toBeVisible();
    await page.locator("//input[@data-qa='login-email']").fill("Usha@gmail.com");
    await page.locator("//input[@data-qa='login-password']").fill("Usha15");
    await page.locator("//button[@data-qa='login-button']").click();
    const warning=await page.getByText("Your email or password is incorrect!");
    await expect(warning).toBeVisible();
    console.log("Invalid login successful");
})