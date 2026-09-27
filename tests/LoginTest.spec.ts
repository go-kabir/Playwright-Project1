import{test, expect} from '@Playwright/test'
import { LogInPage } from '../pages/LogInPage'


const url='https://rahulshettyacademy.com/client'
const username = "testnHNk@gmail.com"
const password = "Testing@1234"
const incorrectPassword = "Test"
const finalpage='https://rahulshettyacademy.com/client/#/dashboard/dash'

/*test("login test", async({page})=>{

await page.goto ('https://rahulshettyacademy.com/client', { waitUntil: 'commit' })

const username = "testnHNk@gmail.com"
const password = "Testing@1234"
const incorrectPassword = "Test"

await page.locator('#userEmail').fill(username)
await page.locator('#userPassword').fill(password)
await page.locator('#login').click()
await expect (page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash')
})
*/


test('logintest with class', async({page})=>{


const lp= new LogInPage(page)
await lp.LaunchURL(url)
await lp.loginIntoApplication(username,password)
await expect (lp.finalpage).toBeVisible()
})