import {test, expect, request} from '@playwright/test';
import { test_tool  as Api_request} from './fixtures/api-fixture';

Api_request('login vaild', async ({api}) => {

    const response = await api.post('api/login',{
        data:
        {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }

    })

    const body = await response.json();

    console.log(body);

    expect(response.status(200));
    expect(body).toHaveProperty('token');

})

Api_request('login invaild', async ({api}) => {

    const response = await api.post('api/login',{
        data:
        {
            email: 'eve.holt@reqres.iiiiin',
            password: 'cityslickaaaaaa'
        }

    })

    const body = await response.json();

    console.log(body);

    expect(response.ok()).toBeFalsy();
   
})
