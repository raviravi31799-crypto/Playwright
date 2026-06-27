import{test,expect} from "@playwright/test";
test("Confirm alert",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on("dialog",async(alert)=>{
        const text=alert.message();
        console.log(text);
        await alert.dismiss();
    })
    await page.getByText("Click Me").nth(1).click();
    const message=await page.locator("//p[@id='confirm-demo']").textContent();
    //await expect(message).toEqual("You pressed Cancel!");
    console.log(message);
})
