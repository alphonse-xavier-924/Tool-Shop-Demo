//Test Case 6 - Fill in the contact form
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/contact");
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop/);

  const firstNameInput = page.locator("#first_name");
  await firstNameInput.fill("John");
  const lastNameInput = page.locator("#last_name");
  await lastNameInput.fill("Doe");
  await page.locator('select[data-test="subject"]').selectOption("payments");
  const emailNameInput = page.locator("#email");
  await emailNameInput.fill("john.doe@example.com");
  const messageNameInput = page.locator("#message");
  await messageNameInput.fill(
    "This is a sample text that contains exactly one hundred characters for testing purposes and examples."
  );
  await page
    .locator('input[type="submit"][data-test="contact-submit"]')
    .click();
});
