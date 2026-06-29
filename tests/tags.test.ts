import {test,expect} from "@playwright/test";
test("login @smoke",async({page})=>{
    console.log("Login");
});
test("Invalid login @smoke @regression",async({page})=>{
    console.log("Invalidlogin");
});
test("login @sanity",async({page})=>{
    console.log("failed");
})
