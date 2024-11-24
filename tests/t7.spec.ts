//Test Case 7 - Navigate to a diffrent page
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/contact");
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop/);
  await page.locator('a[data-test="nav-categories"]').click();
  await page.locator('a[data-test="nav-rentals"]').click();
  await expect(page).toHaveTitle(
    /Rentals Overview - Practice Software Testing - Toolshop - v5.0/
  );
});
