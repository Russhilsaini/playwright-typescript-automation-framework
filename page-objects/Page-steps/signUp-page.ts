import { Page } from "@playwright/test";
import { WebCommons } from "../../commons/web-commons.ts";
import signUppage from "../../page-objects/Page-Elements/Signup_page_Elements.json" with {type:'json'}
import data from"../../data.json"with{type:'json'}
import config from "../../config/config.json" with {type:'json'}


export class CreatingnewuserSteps{
    page:Page
   web:WebCommons

    constructor(page:Page){
        this.page=page
        this.web=new WebCommons(this.page)
 }

        //Method to Launch the signup page
        

        async launchtheSignuppage():Promise<void>{
            await this.web.launchApplication(config.app.SignuppageUrl)
            
        }
    async SelectTheCheckboxes():Promise<void>{
        await this.web.selectCheckboxes(data.interest)
     }   
        
   
}