import{test,expect} from "@playwright/test";
test("Prompt alert",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on("dialog",async(alert)=>{
        const text=alert.defaultValue();
        console.log(text);
        await alert.accept("Jo");
    });
    await page.getByText("Click Me").nth(2).click();
    const message=await page.locator("//p[@id='prompt-demo']").textContent();
    console.log(message);

    

}
);