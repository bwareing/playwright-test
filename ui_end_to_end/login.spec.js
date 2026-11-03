import {test, expect, request} from '@playwright/test';

test('Can log in', async ({page}) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  await expect(page.getByText('Login Page')).toBeVisible();
  await page.getByRole('textbox' , {name:'Username'}).fill('tomsmith');
  await page.getByRole('textbox', {name:'Password'}).fill('SuperSecretPassword!');
  await page.getByRole('button', {name:' Login'}).click();
  await expect(page.getByText('Welcome to the Secure Area. When you are done click logout below.')).toBeVisible();
})
