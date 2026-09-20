// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://playwrightlab.github.io/");
});

test('Can load site', async ({ page }) => {
    await expect(page).toHaveURL("https://playwrightlab.github.io/");
});

test('Page display Play Lab', async ({ page }) => {
    await expect(page.getByTestId('logo').getByRole('img')).toHaveAttribute('alt', 'PlayLab');
});

test('Night mode can be toggled', async ({ page }) => {
    await page.getByTestId("theme-toggle").click();
    await expect(page.locator('ion-icon[name="sunny-outline"]')).toBeVisible();
    await page.getByTestId("theme-toggle").click();
    await expect(page.locator('ion-icon[name="moon-outline"]')).toBeVisible();
});

test.describe('test drop down iteams',  () => {
    
    test.beforeEach(async ({ page }) => {
    await page.goto("https://playwrightlab.github.io/");
    await page.getByTestId("nav-menu").click();
   });
   
   test('forms work', async ({ page }) => {
    await page.getByTestId("nav-forms").click();
    await expect(page.locator("#formsTitle")).toBeInViewport();
   });

   test('shopping work', async ({ page }) => {
    await page.getByTestId("nav-shopping").click();
    await expect(page.locator("#shoppingTitle")).toBeInViewport();
   });

   test('wizard work', async ({ page }) => {
    await page.getByTestId("nav-wizard").click();
    await expect(page.locator("#wizardTitle")).toBeInViewport();
   });

   test('flaky elements work', async ({ page }) => {
    await page.getByTestId("nav-flaky").click();
    await expect(page.locator("#flakyTitle")).toBeInViewport();
   });
   
   test('accessbilty work', async ({ page }) => {
    await page.getByTestId("nav-a11y").click();
    await expect(page.locator("#a11yTitle")).toBeInViewport();
   });

   test('tables work', async ({ page }) => {
    await page.getByTestId("nav-tables").click();
    await expect(page.locator("#tablesTitle")).toBeInViewport();
   });

   test('dynamic content work', async ({ page }) => {
   await page.getByTestId("nav-dynamic").click();
   await expect(page.locator("#dynamicTitle")).toBeInViewport();
   });

   test('shadow dom work', async ({ page }) => {
   await page.getByTestId("nav-shadow").click();
   await expect(page.locator("#shadowTitle")).toBeInViewport();
   });

   test('carousel', async ({ page }) => {
   await page.getByTestId("nav-carousel").click();
   await expect(page.locator("#carouselTitle")).toBeInViewport();
   });

   test('date picker work', async ({ page }) => {
   await page.getByTestId("nav-datepicker").click();
   await expect(page.locator("#datepickerTitle")).toBeInViewport();
   });

   test('responive work', async ({ page }) => {
   await page.getByTestId("nav-responsive").click();
   await expect(page.locator("#responsiveTitle")).toBeInViewport();
   });

   test('interactions work', async ({ page }) => {
   await page.getByTestId("nav-interactions").click();
   await expect(page.locator("#interactionsTitle")).toBeInViewport();
   });

   test('modals & alerts work', async ({ page }) => {
   await page.getByTestId("nav-modals").click();
   await expect(page.locator("#modalsTitle")).toBeInViewport();
   });

   test('advcanced', async ({ page }) => {
   await page.getByTestId("nav-advanced").click();
   await expect(page.locator("#advancedTitle")).toBeInViewport();
   });

   test('network', async ({ page }) => {
   await page.getByTestId("nav-network").click();
   await expect(page.locator("#networkTitle")).toBeInViewport();
   });

   test('media player', async ({ page }) => {
   await page.getByTestId("nav-media").click();
   await expect(page.locator("#mediaTitle")).toBeInViewport();
   });

});
