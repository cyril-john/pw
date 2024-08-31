import { test } from '@playwright/test'
import { request } from 'http'
// import user from '../.auth/users.json'
import fs from 'fs'



test('authenticate login', async({page, request}) =>{
    
console.log('hi there')
await page.goto('https://angular-realworld.netlify.app')
    const loginRequest = await request.post('https://api.realworld.io/api/users/login', {data: {"user":{"email":"cyril@test.com","password":"test123"}}})

    const loginResponse = await loginRequest.json()

    const accessToken = await loginResponse.user.token

    console.log(accessToken)

    await page.goto('https://angular-realworld.netlify.app')

    const statusCode = await page.waitForResponse('https://api.realworld.io/api/tags')

await page.getByRole('link', { name: '  New Article' }).click();
await page.getByPlaceholder('Article Title').click();
await page.getByPlaceholder('Article Title').fill('New article added');
await page.getByPlaceholder('What\'s this article about?').click();
await page.getByPlaceholder('What\'s this article about?').fill('new article description added');
await page.getByPlaceholder('Write your article (in').click();
await page.getByPlaceholder('Write your article (in').fill('Lorem ipsun some text');
await page.getByRole('button', { name: 'Publish Article' }).click();


})