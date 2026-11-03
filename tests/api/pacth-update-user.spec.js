import { test, expect, request } from '@playwright/test';
import { assert } from 'node:console';
import { test_tool as Api_request } from './fixtures/api-fixture';

Api_request('Do pacth update', async ({api}) => {
    
    const response = await api.patch('api/users/2', {
         data:{
            job: 'be a kid'
         }
    });

    const body = await response.json(response);

    expect(response.status(200)); 
    expect(body.job).toBe('be a kid');
    expect(body.updatedAt).toBeTruthy();

    console.log(body);

});
