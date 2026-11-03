import {test, expect, request} from '@playwright/test';
import { test_tool as Api_request } from './fixtures/api-fixture';

Api_request("create user", async ({api}) =>{
   
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
  expect(body.job).toBe("QA engineer");
  expect(body.name).toBe("Brandon")
});
