/// <reference types="cypress" />

import loginPage from "../../../support/KPTS/NikolaN/loginPage"
import productsPage from "../../../support/KPTS/NikolaN/productsPage"

describe('Swag Lab', () => {
    const badUser = 'locked_out_user'
    const goodUser = 'standard_user'
    const password = 'secret_sauce'

    const LoginPage = new loginPage()
    const ProductsPage = new productsPage()

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Web page load properly and login form is displayed', () => {
        cy.get('.login_logo').should('be.visible')
        LoginPage.usernameField().should('be.visible')
        LoginPage.passwordField().should('be.visible')
        LoginPage.loginButton().should('be.visible')
    })

    it('Proper error message is displayed when locked out user login', () => {
        LoginPage.usernameField().type(badUser)
        LoginPage.passwordField().type(password)
        LoginPage.loginButton().click()
        LoginPage.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('Standard User is able to login successfuly', () => {
        LoginPage.usernameField().type(goodUser)
        LoginPage.passwordField().type(password)
        LoginPage.loginButton().click()

        ProductsPage.title().should('be.visible')
        ProductsPage.title().should('have.text', 'Products')
    })

})