/// <reference types="cypress" />

import cartPage from "../../../support/KPTS/NikolaN/cartPage"
import loginPage from "../../../support/KPTS/NikolaN/loginPage"
import productsPage from "../../../support/KPTS/NikolaN/productsPage"

describe('Swag Lab', () => {
  before(() => {
    cy.visit('')
  })
  const badUser = 'locked_out_user'
  const goodUser = 'standard_user'
  const password = 'secret_sauce'
  const LoginPage = new loginPage()
  const ProductsPage = new productsPage()
  const CartPage = new cartPage()

  describe('User is able to coplete product purchase flow', () => {

    it('1. Standard User is able to login successfuly', () => {
      cy.visit('')
      LoginPage.usernameField().type(goodUser)
      LoginPage.passwordField().type(password)
      LoginPage.loginButton().click()

      ProductsPage.title().should('be.visible')
      ProductsPage.title().should('have.text', 'Products')
    })

    it('2. User adds items to the cart', () => {
      ProductsPage.addBackpackButton().click()
      ProductsPage.addBikeLightButton().click()
      ProductsPage.addTShirtButton().click()
    })

    it('3. User checks if items are added to the cart', () => {
      ProductsPage.shoppingCartButton().click()
      cy.contains('Sauce Labs Backpack')
      cy.contains('Sauce Labs Bike Light')
      cy.contains('Sauce Labs Bolt T-Shirt')
    })

    // //Adding items to the cart
    // ProductsPage.addBackpackButton().click()
    // ProductsPage.addBikeLightButton().click()
    // ProductsPage.addTShirtButton().click()


    // //Checkin the Cart for added items
    // ProductsPage.shoppingCartButton().click()
    // cy.contains('Sauce Labs Backpack')
    // cy.contains('Sauce Labs Bike Light')
    // cy.contains('Sauce Labs Bolt T-Shirt')

    // //User goes back to products page 
    // CartPage.continueShoppingButton().click()

    // //User opens item page and adds it to the cart
    // cy.contains('Sauce Labs Fleece Jacket').click()
    // cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()

    // //User goes to the cart and checks if item is added
    // ProductsPage.shoppingCartButton().click()
    // cy.contains('Sauce Labs Backpack')
    // cy.contains('Sauce Labs Bike Light')
    // cy.contains('Sauce Labs Bolt T-Shirt')
    // cy.contains('Sauce Labs Fleece Jacket')

    // //User removes items from the cart
    // cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    // cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
    // cy.contains('Sauce Labs Backpack')
    // cy.contains('Sauce Labs Bike Light')
    // cy.contains('Sauce Labs Bolt T-Shirt').should('not.exist')
    // cy.contains('Sauce Labs Fleece Jacket').should('not.exist')

    // //User continues with Checkout
    // cy.get('[data-test="checkout"]').click()
    // cy.get('.title').should('have.text', 'Checkout: Your Information')

    // cy.get('[data-test="firstName"]').type('Nikola')
    // cy.get('[data-test="lastName"]').type('Nikic')
    // cy.get('[data-test="postalCode"]').type('34000')

    // cy.get('[data-test="continue"]').click()

    // cy.get('[data-test="finish"]').click()




  })

})
