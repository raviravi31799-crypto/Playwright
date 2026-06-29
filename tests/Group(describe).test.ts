import{test} from "@playwright/test";
test.describe("Login @smoke",()=>{
    test("test 1",async({page})=>{
        console.log("Login");
    });
    test("test2",async({page})=>{
        console.log("Logout")
    })
});