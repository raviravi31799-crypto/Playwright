import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('A');
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('Admin@5');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('12345');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('img', { name: 'First slide' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome Admin@5');
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});