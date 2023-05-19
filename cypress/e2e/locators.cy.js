/// <reference types="cypress" />


describe('Find or Get elements by using different locators', ()  => {


    beforeEach(()=> {

        // runs before each test cases, like beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/login');
    })


    it('Check different locator strategies', () => {

        // By CSS locator
        cy.get("input[name='username").type("Project"); // every statements create an object to be interacted, an next command makes operation to the object created at the previous statement

        //attribute name and value
        cy.get("[type='text']").clear(); //clear what is typed
        

        // to find multiple elements by using tag
        cy.get("input").each((item, index, list) => {

            //assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })
       
    })

    
       
    



})