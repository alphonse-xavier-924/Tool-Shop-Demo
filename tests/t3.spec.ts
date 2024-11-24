//Test Case 3 - Ensure that the sliders work
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop - v5.0/);

  // Locate the min handle
  const minHandle = await page.locator(
    'span[role="slider"][aria-label="ngx-slider"]'
  );

  // Locate the max handle
  const maxHandle = await page.locator(
    'span[role="slider"][aria-label="ngx-slider-max"]'
  );

  const minHandleBox = await minHandle.boundingBox();
  const maxHandleBox = await maxHandle.boundingBox();

  const slider = await page.locator("ngx-slider");
  const sliderBox = await slider.boundingBox();

  if (minHandleBox && maxHandleBox && sliderBox) {
    const sliderWidth = sliderBox.width;
    const sliderRange = 200;

    const pixelsPerUnit = sliderWidth / sliderRange;

    const targetMinPosition = 50 * pixelsPerUnit;
    const targetMaxPosition = 150 * pixelsPerUnit;

    await page.mouse.move(
      minHandleBox.x + minHandleBox.width / 2,
      minHandleBox.y + minHandleBox.height / 2
    );

    await page.mouse.down();

    await page.mouse.move(
      sliderBox.x + targetMinPosition,
      minHandleBox.y + minHandleBox.height / 2
    );
    await page.mouse.up();

    await page.mouse.move(
      maxHandleBox.x + maxHandleBox.width / 2,
      maxHandleBox.y + maxHandleBox.height / 2
    );
    await page.mouse.down();
    await page.mouse.move(
      sliderBox.x + targetMaxPosition,
      maxHandleBox.y + maxHandleBox.height / 2
    );
    await page.mouse.up();
  } else {
    console.log(
      "Error: Could not get the bounding box of one or both handles."
    );
  }
});
