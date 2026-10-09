import {test, expect, request} from '@playwright/test';

test('get single resource', async ({}) => {

   const api = await request.newContext({
     baseURL: 'https://reqres.in/'
   });

   const response = await api.get('/api/unknown/2');

   const body = await response.json();

   console.log(body);

   const starttime = Date.now();

   const response_time = Date.now() - starttime; 

   expect(response_time).toBeLessThan(2000);

   expect(response.status(200));

   expect(body.data.id).toBe(2);
   expect(body.data.name).toBe('fuchsia rose');
   expect(body.data.color).toBe('#C74375');

   await api.dispose()
   

})
