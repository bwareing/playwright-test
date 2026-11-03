import {test, expect, request} from '@playwright/test';
import { test_tool as Api_request } from './fixtures/api-fixture';

Api_request('get single resource', async ({api}) => {

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
