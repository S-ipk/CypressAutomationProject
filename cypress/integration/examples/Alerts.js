/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('Handling Dropdowns',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()

//window:alert

cy.on('window:confirm',(str) => {
    
    //Mocha assertion
    expect(str).to.equal('Hello , share this practice page and share your knowledge')


})

//Opening new tab 
cy.get('#opentab').invoke('removeAttr','target').click()

//Verify current url
cy.url().should('include','qaclickacademy')


//navigate back or forward  within browsers 

cy.go('back')




})
 
 
 
})