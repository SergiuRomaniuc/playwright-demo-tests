import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://zota.team/');

  await expect(page).toHaveTitle(/zota.team/);
});