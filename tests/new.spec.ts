import {  test } from '@playwright/test'
import * as dotenv from 'dotenv';
dotenv.config();

test('.env var', async ({ page })=>
{
    console.log(process.env.base_URL)
   await page.goto(process.env.base_URL || " ")

})

