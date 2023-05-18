/// <reference types="cypress" />


describe('Contect: my First Tests', ()  => {


    before(() => {

        // runs once before all test cases in this describe block, like beforeClass in TestNG 
    })

    beforeEach(()=> {

        // runs before each test cases, like beforeMethod in TestNG
        cy.clearCookies();
    })

    after(() => {

        // similiar ro afterClass in TestNG , runs once after all tests finished
    })

    afterEach(() => {

        // similar to afterMethod in TestNG 
    }) 

    it('Opening a web application', () => {

        cy.visit('/registration_form');
       
    })

})