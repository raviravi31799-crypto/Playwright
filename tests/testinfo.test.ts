import{test,expect} from "@playwright/test";
test("Testpactice",async({page},testInfo)=>{
    console.log(testInfo.line);
    console.log(testInfo.title);
    console.log(testInfo.retry);
    console.log(testInfo.file);
    console.log(testInfo.workerIndex);
    console.log(testInfo.parallelIndex);
    console.log(testInfo.project.name);
    console.log(testInfo.status);
    console.log(testInfo.expectedStatus);
    if(testInfo.status==testInfo.expectedStatus){
        console.log("results are as expected");
    }
})