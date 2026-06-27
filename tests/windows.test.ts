import{test,expect} from "@playwright/test";
test("Handle new windows",async({page,context})=>{
     

    await page.goto("https://demoqa.com/browser-windows");
    console.log("First window url:",page.url());
    
    //click new window button and wait for new window
   const [NewWindow]=await Promise.all([context.waitForEvent("page"),
    page.locator("#WindowButton").click(),
   ]);

   //Wait for new window to load
   await NewWindow.waitForLoadState("domcontentloaded");
   console.log("New Window url:",NewWindow.url());
   const heading =await NewWindow.locator("#sampleHeading").textContent();
   console.log("Heading:",heading);
   await expect(NewWindow.locator("#sampleHeading")).toHaveText("This is a sample page");
   await NewWindow.close();
   await expect(page).toHaveURL("https://demoqa.com/browser-windows");



});