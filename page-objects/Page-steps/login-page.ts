import { Page } from "@playwright/test";
import { WebCommons } from "../../commons/web-commons.ts";
import loginpage from "../Page-Elements/login-page-Elements.json" with{type:'json'}
import Config from "../../config/config.json" with{type:'json'}
import data from"../../data.json"with{type:'json'}


    export class loginSteps{
    page:Page
    web:WebCommons
    

    constructor(page:Page){
        this.page=page
        this.web= new WebCommons(this.page)
    }
    // method to launch the application

    async launchtheApplication():Promise<void>{
        await this.web.launchApplication(Config.app.url,Config.app.title)
    }
        
    // method to verify is login page is displayed 

    async VerifytloginpageisDisplayed():Promise<void>{
        await this.web.iselementVisible(loginpage.header)
    }

    //method to enter username and password

    async enterusernameAndpassword (username:string,password:string):Promise<void> {
       
        await this.web.entertext(loginpage.Email,username)
        await this.web.entertext(loginpage.Userpassword,password)
    }
    // method to click the login  button
    
    async Clickloginbutton():Promise<void>{
        await this.web.clickElement(loginpage.LoginButton)
    }
    //method to click the menu button
    async clickmenuButton():Promise<void>{
        await this.web.clickElement(loginpage.menu,)
        
    }
       //method to click the logout button 

        async clicklogoutButton():Promise<void>{
        await this.web.clickElement(loginpage.logoutButton)
    }

    //method to verify text     

    async verifyLoginError():Promise<void>{
        await this.web.verifytext(loginpage.loginError,Config.app.LoginError)
    }


    }

    

