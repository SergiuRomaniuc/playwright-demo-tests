import { test, expect, type Locator } from '@playwright/test';

test.skip('has title', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/?utm_source=chatgpt.com#/');

  await expect(page).toHaveTitle(/React • TodoMVC/);
});

test('input is clikable', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/?utm_source=chatgpt.com#/');

    let locatorInputField:Locator = page.locator('.new-todo');

    let isVisible:boolean = await locatorInputField.isVisible();
    // let isVisible:boolean = false;
    let isEnabled:boolean = await locatorInputField.isEnabled();
    // let isEnabled:boolean = true;

    if (isVisible && isEnabled) {
        console.log("✅ The element is visible and enabled.");
        expect(isVisible && isEnabled).toBeTruthy();
    } else {
        console.log("❌ The element is not visible or not enabled.");
        expect(isVisible && isEnabled).toBeTruthy();
    }
});