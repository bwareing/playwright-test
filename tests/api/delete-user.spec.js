import {test, expect, request} from '@playwright/test';
import { assert } from 'node:console';

test('Delete user', async ({}) => {
     const api =  await request.newContext ({
         baseURL: 'https://reqres.in/'
     });
   const response = await api.delete('/api/users/2', {}); 

   assert(response.status(204));
});
