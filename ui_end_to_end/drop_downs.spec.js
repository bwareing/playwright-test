import {test, expect, request} from '@playwright/test';

test('drop downs', async ({page}) =>{
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('a[href="/dropdown"]').click();
  expect(page).toHaveURL('https://the-internet.herokuapp.com/dropdown');
   
  const drop_down = page.locator('#dropdown'); 
  const drop_down_options = page.locator('#dropdown option');
  await expect(drop_down).toHaveValue('');
  await expect(drop_down_options).toHaveCount(3);
  await drop_down.selectOption('1');
  await expect(drop_down).toHaveValue('1');
  await drop_down.selectOption('2');
  await expect(drop_down).toHaveValue('2');
})
