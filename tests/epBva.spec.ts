import { test, expect, type Locator } from '@playwright/test';


// Tests for EP & BVA 
// Particions: [1,100]; 0; >100
// EP represent: 
    // empty: 0 
    // valid: 10 
    // max val: 100 
    // over max: 101 (there is no accual maximum restriction, so this is a bit fictional)
    // (in the test itself it is not included)
// BVA points:
    // for 1: 0 1 2
    // for 100: 99 100 101    


const boundaryValues = [
    {len: 0, shouldAdd: false},
    {len: 1, shouldAdd: true},
    {len: 2, shouldAdd: true},
    {len: 99, shouldAdd: true},
    {len: 100, shouldAdd: true},
    {len: 101, shouldAdd: true},
];  

for(const c of boundaryValues) {
    
    test(`length ${c.len} shouldAdd=${c.shouldAdd}`, async ({ page }) => {
        await page.goto('https://demo.playwright.dev/todomvc/?utm_source=chatgpt.com#/');
        
        let todoListLocator: string = '.todo-list li';

        let numberOfTodoInitial: number = await page.locator(todoListLocator).count(); 
    
        let enterString: string = 'a'.repeat(c.len)
        
        await page.getByPlaceholder('What needs to be done?').fill(enterString);
        await page.keyboard.press('Enter');

        let numberOfTodoCurrent: number = await page.locator(todoListLocator).count();

        
        if((numberOfTodoInitial != numberOfTodoCurrent) && c.shouldAdd ) {
            console.log(numberOfTodoInitial);
            console.log(numberOfTodoCurrent);
            console.log('hey');
            expect(numberOfTodoCurrent).toBe(numberOfTodoInitial + 1);
        } else {
            expect(numberOfTodoCurrent).toBe(numberOfTodoInitial);
        }
    });

}