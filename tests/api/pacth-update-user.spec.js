import { test, expect, request } from '@playwright/test';
import { assert } from 'node:console';

test('Do pacth update', async ({}) => {
    
    const api = await request.newContext({
        baseURL: 'https://reqres.in/' 
    });

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
