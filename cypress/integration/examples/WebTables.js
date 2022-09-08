/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('Handling Dropdowns',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//handling web tables dynamically 

//find the table name first via css

cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

    const text= $e1.text()

    //find which web table you want yo get via each func.

    if(text.includes("Python"))

    {
        // goes to "25" via next func.
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()

         // verify price equals to "25"
         expect(priceText).to.equal('25')
        })
    }
  



})




})
 
 
 
})