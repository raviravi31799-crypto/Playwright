import{test,expect} from "@playwright/test";
test("All products",async({page})=>{
    await page.goto("https://automationexercise.com/");
    await page.route('**/*', route => {
        const url = route.request().url();

        if (
            url.includes('googleads') ||
            url.includes('doubleclick') ||
            url.includes('googlesyndication') ||
            url.includes('adservice')
        ) {
            route.abort();
        } else {
            route.continue();
        }
    });
   await expect.soft(page.locator("//i[@class='fa fa-home']")).toBeVisible();
   console.log("Successfully navigated to homepage");
   await page.getByRole('link',{name:"products"}).click();
   await expect.soft(page.getByText("All Products")).toBeVisible();
   console.log("Navigated to all products page successfully");
   const pageurl=await page.url();
   console.log(pageurl);
   await expect.soft(pageurl).toContain("products");
   await page.getByRole('link',{name:"View Product"}).first().click();
   const productpage=await page.url();
   await expect.soft(productpage).toContain("product_details/1");
   console.log("Successfully navigated to first poroduct details page");
   const productname=await page.locator("//img[@class='newarrival']/following-sibling::h2");
   await expect.soft(productname).toBeVisible();
   const category=await page.locator("//img[@class='newarrival']/following::p[1]");
   await expect.soft(category).toBeVisible();
   await expect.soft(page.getByText("Rs. 500")).toBeVisible();
   await expect.soft(page.getByText("Availability:")).toBeVisible();
   await expect.soft(page.getByText("Condition:")).toBeVisible();
   await expect.soft(page.getByText("Brand:")).toBeVisible();
   console.log("Verified all details of product");


})