import{test,expect} from "@playwright/test";
test("Testcases",async({page})=>{
    await page.goto("https://automationexercise.com/");
    await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();
    console.log("Successfully navigated to homepage");
    await page.getByRole('button',{name:'Test Cases'}).click();
    const title=await page.locator("//h2[@class='title text-center']/child::b[text()='Test Cases']");
    await expect(title).toBeVisible();
    console.log("Navigated to test cases page");
    const currenturl=await page.url();
    await expect(currenturl).toContain("test_cases");
    console.log("Url also matched ");

});