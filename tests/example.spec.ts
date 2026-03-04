import { test, expect } from '@playwright/test';

// Instead of relying on an external website (which may trigger network errors),
// we inject a minimal HTML document directly into the page. This makes the
// tests deterministic and usable offline.

test.beforeEach(async ({ page }) => {
  await page.setContent(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Playwright Demo</title>
      </head>
      <body>
        <a role="link" href="#">Get started</a>
        <h1>Installation</h1>
      </body>
    </html>
  `);
});

// The actual assertions no longer need to call `page.goto`.

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright Demo/);
});

test('get started link', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
