import{test,expect} from "@playwright/test";
const products=['Tshirt','Tops','Saree'];
for (const product of products)
test(`Search ${product}`,async({page})=>{
    await page.goto("https://automationexercise.com/");
    await expect.soft(page.locator("//i[@class='fa fa-home']")).toBeVisible();
   console.log("Successfully navigated to homepage");
   await page.getByRole('link',{name:"products"}).click();
   await expect.soft(page.getByText("All Products")).toBeVisible();
   console.log("Navigated to all products page successfully");
   await page.locator("//input[@id='search_product']").fill(product);
   await page.locator("//button[@id='submit_search']").click();
   await expect.soft(page.getByText("Searched Products")).toBeVisible();
   await expect.soft(page.locator("//div[@class='features_items']")).toContainText(product);
   console.log("Results are related to searched keyword");
});