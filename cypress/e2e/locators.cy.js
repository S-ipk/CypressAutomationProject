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
        

        // to find multiple elements by using tagName
        cy.get("input").each((item, index, list) => {

            //assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })

        // by attribute name
        cy.get('[type]');

        // by className
        cy.get('.btn.btn-primary');

        // by id
        cy.get('#wooden_spoon');

        // if I want to use text: no xpath in cypress, but it still possible with a different approcah 

        cy.get('button').should('contain','Login').click();
       
    })

    it('Check finding elements by travelling through DOM', () => {

        //travel to find the login button: locate username box - go to parent form - then find button 

        cy.get('input[name="username"').parents('form').find('button').should('contain','Login').click();



    })

    
       
    



})