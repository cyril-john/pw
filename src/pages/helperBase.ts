import { type Page, test, expect, type Locator } from '@playwright/test'


export default class HelperBase
{
    readonly page: Page;

    constructor(page: Page) { this.page = page; }

    async waitInSeconds(timeInSeconds: number) 
    {
        await this.page.waitForTimeout(timeInSeconds*1000)
    }
}