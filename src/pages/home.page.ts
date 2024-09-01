import { test, expect, Page, type Locator } from '@playwright/test'
import HelperBase from './helperBase';

interface person {
    name: string,
    age: number,
    nickname?: unknown,
    isEligible: () => boolean

}

let cyril: person = {
    name: 'Cibi', age: 23, isEligible: () => cyril.age>=18
}



export class HomePage extends HelperBase {

    constructor(page: Page) {
         super(page);
         }

         async isEligible(bool: boolean)
                { console.log(bool)}


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
    async createNewButton(buttonName: string): Promise<void>
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

    async checkTotal(num1: number, num2: number): Promise<number> {
        return num1+num2
    }

    async displaytext(message: string)
    {
        console.log(message)
    }


}

function isEligible(bool: any, boolean: any) {
    throw new Error('Function not implemented.');
}
