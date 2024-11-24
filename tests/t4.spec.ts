//Test Case 4 - Search using a string
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);

  const searchInput = page.locator("#search-query");
  await searchInput.fill("Slip");
  await page.locator('button[data-test="search-submit"]').click();
  await page.waitForTimeout(2000);
});
