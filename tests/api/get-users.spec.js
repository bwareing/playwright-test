import { test, expect, request } from '@playwright/test';
import { test_tool as Api_request} from './fixtures/api-fixture';


Api_request('Get all users', async ({ api}) =>{

const response = await api.get('/api/users');
const body = await response.json();
const users = body.data;
let num_of_user = 0;
 console.log(body);

expect(response.ok()).toBeTruthy();
expect(users.length).toBeGreaterThan(0);
expect(users[0].id).toBeTruthy();
expect(users[0].email).toContain("@reqres.in");

users.forEach(user => {
    expect(user.id).toBeTruthy();
    expect(user.email).toContain("@reqres.in");
    num_of_user += 1;
});

console.log(num_of_user);

});
