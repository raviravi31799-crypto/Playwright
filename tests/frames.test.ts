import{test,expect} from "@playwright/test";
test("Frames",async({page})=>
{
    await page.goto("https://letcode.in/frame");
    const allframes=page.frames();
    console.log("No.of frames:"+allframes.length);
    const myframe=page.frame("firstFr");
    await myframe?.fill("input[name='fname']","Joshi");
    await myframe?.fill("input[name='lname']","Rathod");
    const frame=page.frameLocator('iframe[name="firstFr"]');
    await expect(frame.locator("p.text-sm.font-semibold.text-centre")).toContainText("Joshi");
   // await expect(frame.locator("p.text-sm.font-semibold.text-centre")).toContainText("Rathod");

    
});
 //innerframe


test("Frames2",async({page})=>{
    const frame = page.frameLocator("iframe[src='/frame']");
    await page.goto("https://letcode.in/frame");
    const allframes=page.frames();
    console.log("No of frames:"+allframes.length);

    await frame.locator("input[name='fname']").fill("john");
    await frame.locator("input[name='lname']").fill("jeck");
    const text = await frame.locator("#result").textContent();

    expect(text).toContain("You have entered");
    expect(text).toContain("john");
    expect(text).toContain("jeck");

    await page.waitForTimeout(3000);
    const innerFrame=frame.frameLocator("iframe[src='/innerframe']");
    await innerFrame.locator("input[name='email']").fill("john@gmail.com");

});

   


    

