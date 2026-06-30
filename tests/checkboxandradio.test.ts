import{test,expect} from '@playwright/test';
test("radio",async({page})=>{
    await page.goto("https://demoqa.com/radio-button");
    await page.locator("#yesRadio").check();
    const message=await page.locator("//span[@class='text-success']").textContent();
    await expect(message).toEqual("Yes");

});
test("checkbox",async({page})=>{
    await page.goto("https://demoqa.com/checkbox");
    await page.locator("//span[@aria-hidden='true']/following-sibling::span[1]").click();
    await page.locator("//span[@aria-label='Select Desktop']").check();
    const text=await page.locator("//div[@id='result']").textContent();
    await expect(text).toContain("desktopnotescommands")
    await page.locator("//span[@aria-label='Select Desktop']/preceding-sibling::span[1]").click();
    await page.locator("//span[@aria-label='Select Commands']").uncheck({timeout:40000});
    await expect(text).toContain("notes");
    console.log("Checkbox operations are verified successfully");


});