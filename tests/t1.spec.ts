//Test Case 1 - Ensure that the page loads
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
});