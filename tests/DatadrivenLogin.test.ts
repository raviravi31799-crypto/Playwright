import{test,expect} from "@playwright/test";
import Logindata from "../testdata/Logindata.json" with {type:"json"};



//Interface for JSON data
interface LoginData{
    testname:string;
    username:string;
    password:string;
    expectedResult:"Success"|"Failure";
    ExpectedMessage:string;
}

const users=Logindata as LoginData[];
for(const data of users){
    test(`${data.testname} - ${data.username ||"Blank Username"}`,async({page})=>{
        await page.goto("https://www.demoblaze.com/");
        await page.click("#login2");
        await page.fill("#loginusername",data.username);
        await page.fill("#loginpassword",data.password);
        
        if(data.expectedResult === "Failure"){
            page.on("dialog",async(alert)=>{
                expect(alert.message()).toBe(data.ExpectedMessage);
                await alert.accept();
            });
        }
        await page.click("button[onclick='logIn()']");
        //Success validation
        if(data.expectedResult === "Success"){
            await expect (page.locator("#nameofuser")).toBeVisible({timeout:10000});
            await expect(page.locator("#nameofuser")).toContainText(`Welcome ${data.username}`);
        }
    });
}
