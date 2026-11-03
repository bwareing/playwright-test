import {test, expect, request} from '@playwright/test';

test('check boxes', async ({page}) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
  await expect(page.getByRole('checkbox')).toHaveCount(2);
  await expect(page.getByRole('checkbox').nth(0)).not.toBeChecked();
  await expect(page.getByRole('checkbox').nth(1)).toBeChecked();
  await page.getByRole('checkbox').nth(0).check();
  await page.getByRole('checkbox').nth(1).uncheck();
  await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
  await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();
})
