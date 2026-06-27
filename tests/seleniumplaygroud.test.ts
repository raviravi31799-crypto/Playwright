import{test,expect} from "@playwright/test";
test("Task",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const Title=await page.title();
    console.log("Title",Title);
    const currenturl=await page.url();
    console.log("CurrentUrl:",currenturl);
    const textbox=await page.getByPlaceholder("Please enter your Message");
    console.log(await textbox.getAttribute("placeholder"));
    await textbox.fill("Jothika");
    await page.locator("//button[@id='showInput']").click();
    const message=await page.getByPlaceholder("Please enter your Message").inputValue();
    console.log("After entering value:",message);
   
    
    
})