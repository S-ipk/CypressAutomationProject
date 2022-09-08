/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('Handling Dropdowns',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//using mouse hover 
//you need to navigate to parent
//cy.get('div.mouse-hover-content').invoke('show')

//using force click
cy.contains('Top').click({force: true})
cy.url().should('include','top')




})
 
 
 
})