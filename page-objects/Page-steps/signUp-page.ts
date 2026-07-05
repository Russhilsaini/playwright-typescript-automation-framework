import { Page } from "@playwright/test";
import { WebCommons } from "../../utils/Common Utilities/UI_Commons/web-commons.ts";
import signUppage from "../../page-objects/Page-Elements/Signup_page_Elements.json" with {type:'json'}
import config  from "../../config/config.json"with{type:'json'}

    export class CreatingnewuserSteps{
    page:Page;
    web:WebCommons;

    constructor(page:Page){
     this.page=page;
     this.web=new WebCommons(this.page);
 };

    //Method to launch the application  

        async launchsignuppage():Promise<void>{
            await this.web.launchApplication(config.app.SignuppageUrl,config.app.title);
            
        };

    //Method to enter new name,email and password 

    async enternameEmailPassword(newName:string, newEmail:string ,newPassword:string):Promise<void>{

    await this.web.entertext(signUppage.name,newName);
    await this.web.entertext(signUppage.Email,newEmail);
    await this.web.entertext(signUppage.password,newPassword);

    };
    
        // method to enter exsisting name,email password

        async enterexsistingDetails(exsistingusername:string, exsistinguseremail:string ,exsistinguserPassword:string):Promise<void>{

    await this.web.entertext(signUppage.name,exsistingusername);
    await this.web.entertext(signUppage.Email,exsistinguseremail);
    await this.web.entertext(signUppage.password,exsistinguserPassword);

    };




    
    //Method to select checkboxes
    async SelectTheCheckboxes():Promise<void>{
        await this.web.selectCheckboxes(signUppage.interest);
     };
        
     //Method to select male (radio button)

    async radiobuttonSelection():Promise<void>{
        await this.web.selectradioButton(signUppage.gender);
    };

    //method to select the state

    async selectState(stateValue:string){
        await this.web.selectOption(signUppage.State,stateValue);
    };
   
    // method to select the hobbies

    async selectHobbies(hobbie:string):Promise<void>{
        await this.web.selectOption(signUppage.hobbies,hobbie);
        
    };
        //method to click the signup button 

        async clickSignupbutton()
        {
            await this.web.iselementenabled(signUppage.SignupButton)
            await this.web.clickElement(signUppage.SignupButton)
            
        };

        //method to verify the error message

        async verifyerrorText(errorText:string){
            await this.web.verifytext(signUppage.errormsg,errorText)

        }

        // method to verify the redirected url after creating a new user

        async verifyredirectedUrl():Promise<void>{
            await this.web.verifyUrl(config.app.url)
        }

    }

     
