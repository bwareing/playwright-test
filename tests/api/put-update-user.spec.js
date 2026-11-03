import { expect } from '@playwright/test';
import { test_tool as Api_request } from './fixtures/api-fixture.js';

Api_request('Update user', async ({ api }) => {
    const response = await api.put('/api/users/2', {
        data: {
            name: 'Brandon',
            job: 'Senior QA engineer'
        }
    });

    const body = await response.json();

    console.log(body);

    expect(response.status()).toBe(200);
    expect(body.name).toBe('Brandon');
    expect(body.job).toBe('Senior QA engineer');
    expect(body.updatedAt).toBeTruthy();
});
