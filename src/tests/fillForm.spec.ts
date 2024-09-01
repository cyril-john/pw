import { test } from '@playwright/test'
import dotenv from 'dotenv';
import HomePage from '../pages/home.page';
dotenv.config();


test('login form', async ({ page }) => {
    await page.goto('http://localhost:4200/pages/iot-dashboard');
    await page.getByRole('link', { name: 'Forms' }).click();
    await page.getByRole('link', { name: 'Form Layouts' }).click();
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('test@test.com');
    await page.locator('#exampleInputPassword1').click();
    await page.locator('#exampleInputPassword1').fill('secret123');
    await page.locator('nb-card').filter({ hasText: 'Basic formEmail' }).locator('span').first().click();
    await page.locator('nb-card').filter({ hasText: 'Basic formEmail' }).getByRole('button').click();

   
    await page.getByPlaceholder('Jane Doe').fill('jan doe');
})

test('public urls ', async ({ page }) =>{
    await page.goto('http://www.uitestingplayground.com/');
    await page.getByRole('link', { name: 'Text Input' }).click();
    await page.getByPlaceholder('MyButton').click();
    await page.getByPlaceholder('MyButton').pressSequentially('type me', {delay: 100});
    await page.getByRole('button', { name: 'Button That Should Change it\'' }).click();

    //sergii.rudenko@transportexchangegroup.com
})

test('pom model', async ({ page }) => {
    const homePage = new HomePage(page);
   await homePage.goto();
   await homePage.createNewButton('create');
})