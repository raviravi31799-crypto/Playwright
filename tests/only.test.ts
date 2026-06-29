import {test,expect} from "@playwright/test";
test("Login",async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill("Admin@5");
    await page.locator("//input[@id='loginpassword']").fill("12345");
    await page.locator("//button[@onclick='logIn()']").click();
   const msg= await page.locator("//a[@id='nameofuser']");
    await expect.soft(msg).toBeVisible();
});
test.only("Invalid Login",async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill("Admin@5");
    await page.locator("//input[@id='loginpassword']").fill("Admin");
    page.on("dialog",async(alert)=>{
        const message=alert.message();
        console.log(message);
        await alert.accept();
        await expect(message).toEqual("Wrong password.");
    })
    await page.locator("//button[@onclick='logIn()']").click();
    
    

});