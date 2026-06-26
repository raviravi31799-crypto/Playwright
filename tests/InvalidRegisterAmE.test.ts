import{test,expect} from "@playwright/test";
test("InvalidRegister",async({page})=>{
   await page.goto("https://automationexercise.com");
    await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();
    console.log("Navigated to home page");
    await page.locator("//i[@class='fa fa-lock']").click();
    const signupform=await page.locator("//div[@class='signup-form']/child::h2");
    await expect(signupform).toBeVisible();
    await page.getByPlaceholder("Name").fill("Usha");
    await page.locator('[data-qa="signup-email"]').fill('UshaRanjith@gmail.com');
    await page.locator("//button[@data-qa='signup-button']").click();
    const warningtext=await page.getByText("Email Address already exist!");
    await expect(warningtext).toBeVisible();
    console.log("Invalid Register is verified successfully");
})