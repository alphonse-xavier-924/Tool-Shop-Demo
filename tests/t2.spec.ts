//Test Case 2 - Sort using Price(High-Low)
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  await page.selectOption('[data-test="sort"]', { value: "price,desc" });
});
