import{test,expect} from "@playwright/test";
test("Subscribe in cart page",async({page})=>{
    await page.goto("https://automationexercise.com/");
    await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();
    console.log("Successfully navigated to homepage");
    await page.getByRole('link',{name:'Cart'}).click();
    const currentUrl=await page.url();
    await expect(currentUrl).toContain("view_cart");
    console.log("Navigated to cart page successfully");
    const subscribe = page.getByPlaceholder("Your email address");
    await subscribe.scrollIntoViewIfNeeded();
    await subscribe.fill("Usha@gmail.com");
    await page.locator("//button[@id='subscribe']").click();
    await expect(page.locator(".alert-success.alert")).toBeVisible();
    
    console.log("Subscribed successfully");


})