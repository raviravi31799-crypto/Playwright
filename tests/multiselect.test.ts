import{test,expect} from "@playwright/test";
test("Select dropdown",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.waitForTimeout(5000);
    await page.selectOption("#multi-select",[{index:2},
        {label:"Texas"},
        {value:"Washington"}]);
})