import { Page , Locator ,expect } from "@playwright/test";



 export  class WebCommons{
    Page:Page;

    constructor(Page:Page){
        this.Page=Page;
    }
    //common metod to generate web elements from the locator

    async element(locator:string):
    Promise<Locator>{
    return this.Page.locator(locator)
}
//method to launch the application
    async launchApplication(url:string,title?:string):Promise<void>{
        await this.Page.goto(url)
    if (title) {
    await  expect(this.Page).toHaveTitle(title) }
    }

//method to scroll to an element

        async scrollToElement(locator:string):Promise <void>{
        const element= await this.element(locator);
        await element.scrollIntoViewIfNeeded()
            
}
    //method to click the element
    async clickElement(locator:string):Promise<void>{
        const element= await this.element(locator)
         await this.scrollToElement(locator)
        await element.click()
    };

//method for db click the element

      async doubleclickElment(locator:string):Promise<void>{
        const element= await this.element(locator)
        await this.scrollToElement(locator)
        await element.dblclick();


      }  
    
// method for right click

async rightclickElment(locator:string):Promise<void>{
        const element= await this.element(locator)
        await this.scrollToElement(locator)
        await element.click({button:'right'});


      } 
      
    //method to hover an element
      async hoverElement(locator:string):Promise<void>{
        const element = await this.element(locator)
        await this.scrollToElement(locator)
        await element.hover();
      }

      //method to get the text content from the element

      async getElementText(locator:string):Promise<string|null>{
        const element= await this.element(locator)
        await this.scrollToElement(locator)
         return await element.textContent()
      }
// method to get the attribute 

        async getattributes(locator:string,attribute:string):Promise<string|null>{
            const element= await this.element(locator)
            await this.scrollToElement(locator)
            return await element.getAttribute(attribute)
        } 
        //method to upload a file
    async uploadFile(locator:string,filepath:string):Promise<void>{
        const element= await this.element(locator)
        await this.scrollToElement(locator)
        await element.setInputFiles(filepath)
    }
        //method to check if element is visible
    async iselementVisible(locator:string):Promise<void>{
    const element = await this.element(locator);
        // await this.scrollToElement(locator)
        await expect(element).toBeVisible()
     }
//method to check is the element is enabled or not
     
    async iselementenabled(locator:string):Promise<void>{
     const element =await this.element(locator)
     expect(element).toBeEnabled() 
    }

    //common method to check the element is disappeared

    async iselementdisappeared(locator:string):Promise<void>{
        const element=  await this.element(locator)
       await expect(element).toBeHidden()
    }
    //common method to clear the text
    async clearExsistingText(locator:string):Promise<void>{
        const element= await this.element(locator)
        await element.clear()
    }


    //common method for filling text 

    async entertext(locator:string,text:string,email?:string):Promise<void>{
        const element= await this.element(locator)
        await this.scrollToElement(locator)
        await this.clearExsistingText(locator)
        await element.fill(text)
    }
    //common method to get the entered text from the textbox

    async getText(locator:string):Promise<string>{
        const element=await this.element(locator)
        await this.scrollToElement(locator)
        return await element.inputValue()
        
    }

    //common method to press a key on element

    async pressKey(locator:string,key:string):Promise<void>{
        const element= await this.element(locator)
        await this.scrollToElement(locator)
        await element.press(key)
    }
    //method to use assertion with the URL
    
        async verifyUrl(expectedURl:string):Promise<void>{
            await expect (this.Page).toHaveURL(expectedURl)
        }

        //common method to select the options form dropdown

        async selectOption(locator:string,option:string):Promise<void>{
            const element= await this.element(locator)
            await this.scrollToElement(locator)
            await element.selectOption({value:option})
        }

        //Method to select the checkboxes 

        async selectCheckboxes(values:string[]):Promise<void>{
            for (const value of values){
                const element = await this.Page.getByLabel(value)
             await element.check()
           } 
          
        }

        // method to verify the text

        async verifytext(locator:string,expectedtext:string):Promise<void> {
            const element= await this.element(locator)
            await expect(element).toHaveText(expectedtext)
        }


        
        //Method to check the radio button

    async selectradioButton (locator:string):Promise<void> {
        const element= await this.element(locator)
        await element.check()
    }


    }