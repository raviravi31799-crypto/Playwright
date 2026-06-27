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

    

 //innerframe
 test("Frames2",async({page})=>{

 
    await page.goto("https://letcode.in/frame");
    const allframes=page.frames();
    console.log("No.of frames:"+allframes.length);
    const myframe=page.frame("firstFr");
    await myframe?.fill("input[name='fname']","Joshi");
    await myframe?.fill("input[name='lname']","Rathod");
    const frame=page.frameLocator('iframe[name="firstFr"]');
    const locator=await expect(frame.locator("p.text-sm.font-semibold.text-centre"));
    
    const innerframe=frame.frameLocator("iframe[src='/innerframe']");
    await innerframe.locator("input[name='email']").fill("aa@gmail.com");
 })





   


    

})