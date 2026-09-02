import{test,expect} from '@playwright/test'

test('dropdwon test',async({page})=>{

await page.goto(' https://demoqa.com/select-menu')
await  page.locator("#withOptGroup").click()
await page.getByText("Group 1, option 1",{exact:true}).click()

await expect (page.locator("#withOptGroup")).toContainText("Group 1, option 1")




})