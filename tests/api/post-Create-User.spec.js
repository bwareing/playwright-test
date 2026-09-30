import {test, expect, request} from '@playwright/test';

test("create user", async ({}) =>{
   const api = await request.newContext({
    baseURL : 'https://reqres.in/'
   });
   
const response = await api.post('/api/users', {
    data: {
        name: 'Brandon',
        job: 'QA engineer'
    }
});
   const body =  await response.json();
   console.log(body);

  expect(response.status()).toBe(201);
  expect(body.id).toBeTruthy();
  expect(body.createdAt).toBeTruthy();
});
