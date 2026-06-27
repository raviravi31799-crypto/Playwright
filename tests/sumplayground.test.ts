import{test,expect} from "@playwright/test";
test("Sum",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    await page.waitForTimeout(5000);
    const num1=await page.locator("//input[@id='sum1']").fill("5");
    const num2=await page.locator("//input[@id='sum2']").fill("5");
    await page.waitForTimeout(5000);
    await page.getByRole('button',{name:'Get Sum'}).click();
    const button=await page.getByRole('button',{name:'Get Sum'}).boundingBox();
    console.log(button?.width,button?.height);
    await page.waitForTimeout(5000);
    const result=await page.locator("//div[@id='user-message']/child::p[@id='addmessage']").textContent();
    await expect(result).toBe('10');
    

});