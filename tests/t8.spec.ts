//Test Case 8 - Click on increasing the item count and add to cart
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto(
    "https://practicesoftwaretesting.com/product/01J9M92TGGV88YK1P5T2FSYMJW"
  );
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  await page.locator('button[data-test="increase-quantity"]').click();
  await page.locator('button[data-test="add-to-cart"]').click();
  await page.locator('button[data-test="decrease-quantity"]').click();
});