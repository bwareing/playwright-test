import {test, expect, request} from '@playwright/test';

test ('test pagination', async ({}) => {
    const api = await request.newContext({
        baseURL : 'https://reqres.in/'
    })

    const response = await api.get('/api/users?page=1');

    const body = await response.json();
    console.log(body);

    expect(body.page).toBe(1);

    expect(body.data.length).toBe(6);
    expect(Array.isArray(body.data)).toBe(true);

})

test ('test pagination get page 2', async ({}) => {
    const api = await request.newContext({
        baseURL : 'https://reqres.in/'
    })

    const response = await api.get('/api/users?page=2');

    const body = await response.json();
    console.log(body);

    expect(body.page).toBe(2);

    expect(body.data.length).toBe(6);
    expect(Array.isArray(body.data)).toBe(true);

    expect(body.data[0].id).toBe(7);
    expect(body.data[5].id).toBe(12);

})

test('make sure pages are different', async ({}) =>{
      const api = await request.newContext({
        baseURL : 'https://reqres.in/'
    })

    const response_1 = await api.get('/api/users?page=1');
    const response_2 = await api.get('/api/users?page=2');

    const body_1 = await response_1.json();
    const body_2 = await response_2.json();

    expect(body_1.data[0].id).not.toBe(body_2.data[0].id);
    expect(body_1.page).not.toBe(body_2.page);

})
