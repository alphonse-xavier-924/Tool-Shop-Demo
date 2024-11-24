//Test Case 9 - Complete customer registration
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/auth/register");
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);
  const firstNameInput = page.locator("#first_name");
  await firstNameInput.fill("John");
  const lastNameInput = page.locator("#last_name");
  await lastNameInput.fill("Doe");
  const dateNameInput = page.locator("#dob");
  await dateNameInput.fill("2012-12-12");
  const addressInput = page.locator("#address");
  await addressInput.fill("Fictional Street, Fictional State");
  const stateInput = page.locator("#state");
  await stateInput.fill("ma");
  const postInput = page.locator("#postcode");
  await postInput.fill("01609");
  const cityInput = page.locator("#city");
  await cityInput.fill("wx");
  const selectElement = await page.locator("#country");
  await selectElement.selectOption({ value: "US" });
  const phoneInput = page.locator("#phone");
  await phoneInput.fill("555555555");
  const emailNameInput = page.locator("#email");
  await emailNameInput.fill("john.doe@example.com");
  const passwordNameInput = page.locator('input[data-test="password"]');
  await passwordNameInput.fill("234fssyhjke0");
  await page.click('button[data-test="register-submit"]');
});
