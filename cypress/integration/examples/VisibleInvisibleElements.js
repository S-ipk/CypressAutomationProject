/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('Handling Dropdowns',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//radio buttons
 
cy.get('[value="radio2"]').check().should('be.checked')





})
 
 
 
})