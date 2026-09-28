// @ts-
import {test, expect, request} from '@playwright/test';

test('Get single user', async({}) => {
const api = await request.newContext({
   baseURL: 'https://reqres.in/'
});
const starttime = Date.now();
const response = await api.get('/api/users/2');
const bad_response = await api.get('/api/users/25');


const response_time = Date.now() - starttime; 

expect(response_time).toBeLessThan(2000);

expect(response.ok()).toBeTruthy();
expect(bad_response.ok()).toBeFalsy();

const body = await response.json();

console.log(body);

expect(response.status(200));


expect(body.data.id).toBe(2);
expect(body.data.first_name).toBe('Janet');
expect(body.data.last_name).toBe('Weaver');
expect(body.data.email).toContain('@reqres.in');

await api.dispose();

});
