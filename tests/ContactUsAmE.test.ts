import { test,expect } from "@playwright/test";
test("Contact us",async({page})=>{
    await page.goto("https://automationexercise.com/");
    await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();
    await page.locator("//i[@class='fa fa-envelope']/parent::a").click();
    await expect( page.locator("//div[@class='contact-form']/child::h2")).toBeVisible();
    console.log("Get in touch is visible");
     await page.getByPlaceholder("Name").fill("Joshi");
    
     await page.locator("//input[@data-qa='email']").fill("Usha@gmail.com");
     
     await page.getByPlaceholder("Subject").fill("Regarding deley delivery");
     await page.getByPlaceholder("Your Message Here").fill("Always the products are not delivered on time.");
     await page.locator("//input[@name='upload_file']").setInputFiles("D:/book.avif");
     page.on("dialog",async(alert)=>{
        const message=alert.message();
        console.log(message);
        await alert.accept();
     });
     await page.locator("//input[@value='Submit']").click();
     
     await expect(page.locator("//div[@class='status alert alert-success']")).toBeVisible();
     await page.locator("//div[@id='form-section']").click();
     await expect(page.locator("//i[@class='fa fa-home']")).toBeVisible();

});
