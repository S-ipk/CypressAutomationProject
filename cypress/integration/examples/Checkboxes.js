/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//for check boxes -- verify that you checked it or not

cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

//uncheck 

cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

//chech multiple checkboxes 

cy.get('input[type="checkbox"]').check(['option2','option3'])



 
}  )
 
 
 
}  )