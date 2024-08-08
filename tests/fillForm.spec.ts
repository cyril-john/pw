import { test } from '@playwright/test'

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