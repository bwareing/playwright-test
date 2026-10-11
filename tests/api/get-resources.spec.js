import {test, expect, request} from '@playwright/test';

test('get more then 1 resource', async ({}) => {
 
    const api = await request.newContext({
        baseURL : 'https://reqres.in/'
    })

    const response = await api.get('/api/unknown/');

    const body = await response.json();

    console.log(body);

    expect(response.status()).toBe(200);

    expect(body.data.length).toBeGreaterThan(1);

    expect(body.data.length).toBe(6);

    expect(body.data[0].id).toBe(1);

    expect(body.data[0].name).toBe('cerulean');
 
    expect(body.data.every((resource) => {
    return resource.year > 0 && resource.name != "" 
    && resource.color != "" && resource.color.startsWith('#') 
    && /^#[0-9A-Fa-f]{6}$/.test(resource.color);
})).toBe(true);


api.dispose();
})

test('get page 2 of resources', async ({}) => {
     const api = await request.newContext({
        baseURL : 'https://reqres.in/'
    })

    const response = await api.get('/api/unknown/?page=2');

    const body = await response.json();

    console.log(body);

    expect(response.status()).toBe(200);

    expect(body.page).toBe(2);

    expect(body.data.length).toBeGreaterThan(1);

    expect(body.data[0].id).not.toBe(1);

    await api.dispose();

})
