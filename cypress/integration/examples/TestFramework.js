/// <reference types="Cypress" />
//import HomePage class 
import HomePage from '../pageObject/HomePage'
import ProductPage from '../pageObject/ProductPage'

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
const productPage=new ProductPage()

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
//handle items dynamically after checkout 
//if you want to reuse the variable define as var instead of const 
var sum=0

cy.get('tr td:nth-child(4)strong').each(($e1, index, $list) => {

  const amount = $e1.text()
  var res = amount.split(" ")
  res = res[1].trim()
 
  //convert string to number/integer
  sum= Number(sum)+Number(res)


}).then(function(){})

cy.get('h3 strong').then(function(element){

  const amount = element.text()
  var res = amount.split(" ")
  var total = res[1].trim()
  expect(Number(total)).to.equal(sum)
})





cy.contains('Checkout').click()
  cy.get('#country').type('India')
  cy.get('.suggestions > ul > li > a').click()
  cy.get('#checkbox2').click({force: true})
  cy.get('input[type="submit"]').click()
  //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
  cy.get('.alert').then(function(element)
  {
     const actualText=element.text()
    expect(actualText.includes("Success")).to.be.true
  })





})
 
 
 
})