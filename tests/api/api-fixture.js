import {test} from '@playwright/test';

export const test_tool = test.extend({api: async ({playwright}, use) =>{
    const api = await playwright.request.newContext({
        baseURL : 'https://reqres.in/'
    });
    await use(api);
    await api.dispose();
} });
