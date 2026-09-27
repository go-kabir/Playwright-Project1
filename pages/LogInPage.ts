import {Page, Locator } from "@playwright/test"


export class LogInPage{

page:Page    
private readonly username: Locator
private readonly password: Locator
private readonly btn: Locator
loginpage: Locator
finalpage:Locator

constructor(page:Page){

this.page=page
this.username=this.page.locator('#userEmail')
this.password=this.page.locator('#userPassword')
this.btn=this.page.locator('#login')
this.loginpage=this.page.locator('https://rahulshettyacademy.com/client')
this.finalpage=this.page.locator("[routerlink='/dashboard/']")
}

async LaunchURL(url:string){

await this.page.goto('https://rahulshettyacademy.com/client',{ waitUntil: 'commit' })

}

async loginIntoApplication(username:string, password: string){

   await this.username.fill(username)
  await  this.password.fill(password)
   await this.btn.click()
}

}