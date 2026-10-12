import { test, expect, request } from '@playwright/test';
import Ajv from 'ajv';

const user_schema = {
    type: "object",
    properties: {
        data: {
            type: "object",
            required: [
                "id",
                "email",
                "first_name",
                "last_name",
                "avatar"
            ],
            properties: {
                id: {
                    type: "integer"
                },
                email: {
                    type: "string"
                },
                first_name: {
                    type: "string"
                },
                last_name: {
                    type: "string"
                },
                avatar: {
                    type: "string"
                }
            
            }
        
        }
    }
};

test('test schema', async ({})=>{
    const api = await request.newContext({
        baseURL: 'https://reqres.in/'
    })

    const response = await api.get('/api/users/2');

    expect(response.status()).toBe(200);

    const body = await response.json();
    const invalidBody = structuredClone(body);
    invalidBody.data.id = "bug";

    const ajv = new Ajv();

    const validate = ajv.compile(user_schema);

    const validate_results = validate(body);

    const invalidBody_results = validate(invalidBody);

    expect(validate_results).toBe(true);

    expect(invalidBody_results).toBe(false);

    console.log(body);
})

