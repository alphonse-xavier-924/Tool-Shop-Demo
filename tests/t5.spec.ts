//Test Case 5 - Click on a checkbox
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  await page.locator('input[type="checkbox"]').nth(0).check();
  await page.locator('input[type="checkbox"]').nth(1).check();
  await page.locator('input[type="checkbox"]').nth(2).check();
});
