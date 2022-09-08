/// <reference types="Cypress" />

 
describe('My Second Test Suite', function() 
{


    before(function(){
        //runs once before all tests in the block
        cy.fixture('example').then(function(data){
          // it take the mock data from fixtures so that you can easly use in your test cases 

           this.data =data// it gives entire access to class
        })
    })
 
it('Handling Dropdowns',function() {
 
 

  cy.visit("https://rahulshettyacademy.com/angularpractice/")

  cy.get(':nth-child(1) > .form-control').type(this.data.name)
  cy.get('select').select(this.data.gender)








})
 
 
 
})