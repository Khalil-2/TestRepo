import { test, expect } from '@playwright/test';
import path from 'path';

const filePath = `file://${path.resolve('index.html')}`;

test.describe('Landing Page Accessibility and UX', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(filePath);
    });

    test('should have a skip to main content link', async ({ page }) => {
        const skipLink = page.locator('a.skip-link');
        await expect(skipLink).toBeAttached();
        await expect(skipLink).toHaveAttribute('href', '#main-content');

        // Test keyboard focus
        await page.keyboard.press('Tab');
        await expect(skipLink).toBeFocused();
        await expect(skipLink).toBeVisible();
    });

    test('should have semantic landmarks', async ({ page }) => {
        await expect(page.locator('header')).toBeVisible();
        await expect(page.locator('main')).toBeVisible();
        await expect(page.locator('footer')).toBeVisible();
        await expect(page.locator('nav')).toHaveAttribute('aria-label', 'Main Navigation');
    });

    test('should have an accessible "Get Started" button', async ({ page }) => {
        const btn = page.locator('#get-started-btn');
        await expect(btn).toBeVisible();
        await expect(btn).toHaveAttribute('aria-label', 'Get started with TestRepo');
        await expect(btn).toHaveText('Get Started');
    });

    test('should provide feedback via aria-live on button click', async ({ page }) => {
        const btn = page.locator('#get-started-btn');
        const status = page.locator('#status-message');

        await btn.click();

        await expect(btn).toBeDisabled();
        await expect(btn).toHaveText('Starting...');
        await expect(status).toHaveText('Initializing TestRepo experience. Please wait.');

        // Wait for the status change
        await expect(btn).toHaveText('Started!', { timeout: 3000 });
        await expect(status).toHaveText('TestRepo has been successfully started.');
    });
});
