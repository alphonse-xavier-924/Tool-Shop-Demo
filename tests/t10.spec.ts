//Test case 10 - Change the language to FR
import { test, expect } from "@playwright/test";

test("ensure language dropdown is set to FR", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/auth/register");
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  const languageDropdown = page.locator('button[data-test="language"]');
  await languageDropdown.click();
  const dropdownMenu = page.locator('ul[role="menu"]'); // Adjust if necessary
  await dropdownMenu.locator('li:has-text("FR")').click(); // Ensure the option matches the text
  await expect(languageDropdown).toContainText("FR");
});
