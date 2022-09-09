/// <reference types="Cypress" />
//import HomePage class 
import HomePage from '../pageObject/HomePage'
import HomePage from '../pageObject/ProductPage'

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
 
//create object of HomePage class else you cannot use it 
const homePage=new HomePage()
const productPage=new productPage()

  cy.visit("https://rahulshettyacademy.com/angularpractice/")

homePage.getEditBox().type(this.data.name)
homePage.getGender().select(this.data.gender)
homePage.getTwoWayDataBinding().should('have.value',this.data.name)
homePage.getEditBox().should('have.attr','minlength','2')
homePage.getEntrepreneaur().should('be.disabled')
Cypress.config('defaultCommandTimeout', 8000)
homePage.getShopTab().click()


this.data.productName.forEach(function(element) {
 
  cy.selectProduct(element)
});

productPage.checkOutButton().click()





})
 
 
 
})