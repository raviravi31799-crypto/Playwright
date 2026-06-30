import{test,expect} from "@playwright/test";
test("Download",async({page})=>{
    await page.goto("https://demoqa.com/upload-download",{timeout:30000});
    const downloadPromise=page.waitForEvent('download');
    await page.locator("//a[@id='downloadButton']").click({timeout:30000});
    const download=await downloadPromise;
    const failure=await download.failure();
    console.log("File downloaded successfully");
    await expect(failure).toBeNull();
    const filename=await download.suggestedFilename();
    console.log(filename);
    const save=await download.saveAs("downloads/downloadedfile.jpeg");
    await expect(filename).toContain(".jpeg");
    console.log("File saved successfully and verified");

    
})