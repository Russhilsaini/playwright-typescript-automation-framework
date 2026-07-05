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


      test("log in with invalid credentials",async function({},testinfo:TestInfo){
        testData=data[testinfo.title as keyof typeof data]
        await loginpage.launchtheApplication()
        await loginpage.enterusernameAndpassword(testData.Invalidusername,testData.Invalidpassword)
        await loginpage.Clickloginbutton()
        await loginpage.verifyLoginError();
      })


    // test case for creating the new user (SIgnup page)

      test("Create a new user",async function () {
        testData=data
        await signuppage.launchsignuppage();
        await signuppage.enternameEmailPassword(testData.newuserdata.Newname,testData.newuserdata.Newemail,testData.newuserdata.Newpassword);
        await signuppage.SelectTheCheckboxes()
        await signuppage.radiobuttonSelection()
        await signuppage.selectState(testData.newuserdata.stateValue)
        await signuppage.selectHobbies(testData.newuserdata.hobbie)
        await signuppage.clickSignupbutton()
        await signuppage.verifyredirectedUrl()
      })



    // test case for verifing the error message while creating the new user

        test("Verify the error message while creating the new user",async function () {
        testData=data
        await signuppage.launchsignuppage();
        await signuppage.enternameEmailPassword(testData.exsistedduserdata.exsistingusername,testData.exsistedduserdata.exsistinguseremail,testData.exsistedduserdata.exsistinguserPassword);
        await signuppage.SelectTheCheckboxes()
        await signuppage.radiobuttonSelection()
        await signuppage.selectState(testData.exsistedduserdata.stateValue)
        await signuppage.selectHobbies(testData.exsistedduserdata.hobbie)
        await signuppage.clickSignupbutton()
        await signuppage.verifyerrorText(testData.errormsg.errorText)
      })

        
    })



  
    