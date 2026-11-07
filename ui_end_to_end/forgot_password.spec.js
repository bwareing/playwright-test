import {test, expect, request} from '@playwright/test';

test('Forgot password', async ({page}) => {
   await page.goto("https://the-internet.herokuapp.com/");
   await page.getByRole('link', {name:'Forgot Password'}).click();
   await expect(page).toHaveURL('https://the-internet.herokuapp.com/forgot_password');
   await expect(page.getByText('Forgot Password')).toBeVisible();
   await expect(page.getByLabel('E-mail')).toBeVisible();
   await page.getByLabel('E-mail').fill('BDWareing@gmail.com');
   await page.getByRole('button', {name:'Retrieve Password'}).click();
   await expect(page.getByText("Your e-mail's been sent!")).toBeVisible();
})
