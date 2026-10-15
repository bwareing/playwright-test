import {test, expect, request} from '@playwright/test';
import { assert } from 'node:console';

test ('test api mocking', async ({page}) => {
   await page.route('https://reqres.in/api/users', async (route) => {
   await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({
        id: 101,
        name: 'Brandon',
        job: 'dad'
    }) 
   });
});
   
   await page.goto('https://reqres.in/');


   const response = await page.evaluate(async () => {
    const res = await fetch('https://reqres.in/api/users');
    return res.json();
});
  

   expect(response.name).toBe('Brandon');
   expect(response.job).toBe('dad');

})
