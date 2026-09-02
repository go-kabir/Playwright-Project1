import{test,expect} from '@playwright/test'


test('Open an URL',async function({page}){

    await page.goto('https://practicetestautomation.com/practice-test-login/')
await page.locator('input#username').fill('student')
})