import{test,expect} from "@playwright/test";
test("Select dropdown",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption("#select-demo",{index:3
        //label:"Wednesday"
        //value:"Wednesday"
    });
})