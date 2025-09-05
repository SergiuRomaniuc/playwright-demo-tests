import { test, expect, type Locator } from '@playwright/test';


// funtional testing
test.skip('has title', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/?utm_source=chatgpt.com#/');

  await expect(page).toHaveTitle(/React • TodoMVC/);
});

test.skip('input is clikable', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/?utm_source=chatgpt.com#/');

    let locatorInputField:Locator = page.locator('.new-todo');

    let isVisible:boolean = await locatorInputField.isVisible();
    let isEnabled:boolean = await locatorInputField.isEnabled();

    if (isVisible && isEnabled) {
        console.log("✅ The element is visible and enabled.");
        expect(isVisible && isEnabled).toBeTruthy();
    } else {
        console.log("❌ The element is not visible or not enabled.");
        expect(isVisible && isEnabled).toBeTruthy();
    }
});

test.skip('input creates new entry', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/?utm_source=chatgpt.com#/');
    let locatorInputField:Locator = page.locator('.new-todo');
    
    let input:string = "sergiu";

    await locatorInputField.fill(input);
    await page.keyboard.press('Enter');

    let inputResult:string = await page.locator('[data-testid="todo-title"]').innerText();

    expect(inputResult).toEqual(input);
});