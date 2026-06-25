import { test, expect } from '@playwright/test';

test('Register test', async ({ page }) => {
    await page.goto("https://automationexercise.com");
    await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();
    await page.locator("//i[@class='fa fa-lock']").click();
    await page.getByPlaceholder("Name").fill("Usha");
    await page.locator('[data-qa="signup-email"]').type('UshaRanjith@gmail.com');
    await page.locator("//button[@data-qa='signup-button']").click();
    const Acc=await page.getByText("Enter Account Information");
    await expect(Acc).toBeVisible();
    console.log("Enter information text is visible");
    await page.locator("//input[@id='id_gender2']").check();
    await page.locator("//input[@data-qa='password']").fill("Usha15");
    const days=await page.locator("//select[@data-qa='days']");
    await days.selectOption("28");
    const month=await page.locator("//select[@data-qa='months']");
    await month.selectOption("5");
    const year=await page.locator("//select[@data-qa='years']");
    await year.selectOption("2005");
    const news=await page.getByRole('checkbox',{name:'newsletter'});
    await news.check();
    const offer=await page.locator("//input[@id='optin']");
    await offer.check();
    await page.locator("//input[@data-qa='first_name']").fill("Usha");
    await page.locator("//input[@data-qa='last_name']").fill("R");
    await page.locator("//input[@data-qa='address']").fill("PTR nagar");
    await page.locator("//input[@data-qa='state']").fill("TamilNadu");
    await page.locator("//input[@data-qa='city']").fill("Salem");
    await page.locator("//input[@data-qa='zipcode']").fill("123456");
    await page.locator("//input[@data-qa='mobile_number']").fill("9887766554");
    await page.locator("//button[@data-qa='create-account']").click();
    const successmsg=await page.locator("//h2[@class='title text-center']");
    await expect(successmsg).toBeVisible();
    console.log("Account created successfully");
    await page.getByText("Continue").click();
    const Name=await page.locator("//i[@class='fa fa-user']/parent::a").textContent();
    await expect(Name).toEqual(" Logged in as Usha");
    console.log("User name is visible");
    const Delete=await page.locator("//i[@class='fa fa-trash-o']/parent::a");
    await Delete.click();
    await expect(page.locator("//h2[@data-qa='account-deleted']")).toBeVisible();
    console.log("Account deleted successfully");



    




});