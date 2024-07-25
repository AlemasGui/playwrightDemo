import { test, expect } from '@playwright/test';
import { log } from 'console';

test('API GET', async({request})=>{
    //https://reqres.in/
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet');
    expect(text).not.toContain('Guilherme');
    console.log (await response.json());
})

test('API POST', async({request})=> {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Guilherme",
            "job": "Professor"  
        }
    });
    expect(response.status()).toBe(201);
    console.log(await response.json());
})

test('API DELETE', async({request})=> {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
})