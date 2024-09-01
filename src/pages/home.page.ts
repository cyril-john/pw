import { test, expect, Page, type Locator } from '@playwright/test'
import HelperBase from './helperBase';

export default class HomePage extends HelperBase {

    constructor(page: Page) {
         super(page);
         }

    async someAction() {
        console.log('some test to be added here');
        await this.waitInSeconds(2);
    }
    async goto()
    {
        await this.page.goto('http://www.uitestingplayground.com/');
    }
    /**
     * 
     * @param buttonName - 
     */
    async createNewButton(buttonName: string)
    {
        const textInput = this.page.getByRole('link', { name: 'Text Input' })
        const textMyButton = this.page.getByPlaceholder('MyButton')
        const actionButton = this.page.locator('#updatingButton');

        await textInput.click();
        await textMyButton.click()
        await textMyButton.fill(buttonName);
        await actionButton.click();

       await expect.soft(actionButton, 'check button created with provided name').toHaveText('buttonName');
    }

}