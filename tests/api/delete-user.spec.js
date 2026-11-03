import {test, expect, request} from '@playwright/test';
import { assert } from 'node:console';
import { test_tool  as Api_request} from './fixtures/api-fixture';

Api_request('Delete user', async ({ api}) => {
   const response = await api.delete('/api/users/2', {}); 

   assert(response.status(204));
});
