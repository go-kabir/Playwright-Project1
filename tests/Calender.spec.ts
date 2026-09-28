import{test,expect} from '@playwright/test'


test('test1', async({page})=>{

await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html')
await page.locator('#first_date_picker').click()


let targetDate ='11'
let targetMonth='November'
let targetYear='2026'


while(true){

if  ((await page.locator('.ui-datepicker-month').textContent()==targetMonth) &&
   (await page.locator('.ui-datepicker-year').textContent()==targetYear))
   {

await page.locator('table.ui-datepicker-calendar td[data-handler="selectDay"] a', { hasText: targetDate })
           .and(page.locator(`text="${targetDate}"`))
           .click();

break;
   }

   else {await page.getByText('Next',{exact:true}).click()}
}

const output=await page.locator('#first_date_picker').inputValue()

console.log(output)


})


test('test2 clicking Prev button', async({page})=>{

await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html')
await page.locator('#first_date_picker').click()


let targetDate ='11'
let targetMonth='November'
let targetYear='2026'

const obj= {

    January:'1',
    February:'2',
    March:'3',
    April:'4',
    May:'5',
    June:'6',
    July:'7',
    August:'8',
    September:'9',
    October:'10',
    November:'11',
    December:'12'
}


const targetMonthNum = Number(obj[targetMonth as keyof typeof obj]);
const presentMonth=await page.locator('.ui-datepicker-month').textContent()
const presentMonthFinal = Number(obj[presentMonth as keyof typeof obj]);


console.log(targetMonthNum)
console.log(presentMonthFinal)

while(true){

if  ((await page.locator('.ui-datepicker-month').textContent()==targetMonth) &&
   (await page.locator('.ui-datepicker-year').textContent()==targetYear))
   {

await page.locator('table.ui-datepicker-calendar td[data-handler="selectDay"] a', { hasText: targetDate })
           .and(page.locator(`text="${targetDate}"`))
           .click();

break;
   }
else if (presentMonthFinal>targetMonthNum)
{

    await page.getByText('Prev',{exact:true}).click()

}

   else {await page.getByText('Next',{exact:true}).click()}
}

const output=await page.locator('#first_date_picker').inputValue()

console.log(output)


})
