import {test, expect, request} from '@playwright/test';

test('Can log out', async ({page}) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await page.getByRole('textbox' , {name:'Username'}).fill('tomsmith');
  await page.getByRole('textbox', {name:'Password'}).fill('SuperSecretPassword!');
  await page.getByRole('button', {name:' Login'}).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.getByText('You logged out of the secure area!')).toBeVisible();
})
