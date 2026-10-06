import {test, expect, request} from '@playwright/test';

test('login vaild', async ({}) => {

    const api = await request.newContext({
        baseURL : 'https://reqres.in/'
    });

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

test('login invaild', async ({}) => {

    const api = await request.newContext({
        baseURL : 'https://reqres.in/'
    });

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
