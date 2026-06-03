    import { test, expect, TestInfo } from '@playwright/test';
    import { loginSteps } from '../../page-objects/Page-steps/login-page.ts';
    import data from "../../data.json" with {type:'json'}
import { CreatingnewuserSteps } from '../../page-objects/Page-steps/signUp-page.ts';
    

    let loginpage:loginSteps;
    let testData:any
    let signuppage:CreatingnewuserSteps
   

    test.describe('UI Application test',function(){

    test.beforeEach(async function ({page}) {
       loginpage =new loginSteps (page)
       signuppage= new CreatingnewuserSteps(page)



    })

    // 1.test case to verify the header (Sign IN)

    test("verify the header",async function () {
    
        await loginpage.launchtheApplication()
        await loginpage.VerifytloginpageisDisplayed()
    }) 


    // 2.Test case to do login and log out with valid credentials

    test("log in and log out with the valid credentials",async function({},testInfo:TestInfo) {
        testData = data[testInfo.title as keyof typeof data];
        await loginpage.launchtheApplication()
        await loginpage.enterusernameAndpassword(testData.username,testData.password)
        await loginpage.Clickloginbutton()
        await loginpage.clickmenuButton()
        await loginpage.clicklogoutButton()
    })


      // 3. test case to login with Invalid credentials


      test.only("log in with invalid credentials",async function({},testinfo:TestInfo){
        testData=data[testinfo.title as keyof typeof data]
        await loginpage.launchtheApplication()
        await loginpage.enterusernameAndpassword(testData.Invalidusername,testData.Invalidpassword)
        await loginpage.Clickloginbutton()
        await loginpage.verifyLoginError()
      })


// test case for selecting the interests from the checkboxes

    test ("selecting Interest",async function() {
        await signuppage.launchtheSignuppage()
        await signuppage.SelectTheCheckboxes()
    })



    })

    